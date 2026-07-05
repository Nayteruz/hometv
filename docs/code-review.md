# Code Review — hometv (Домашний кинотеатр)

**Дата ревью:** 2026-06-27
**Общая оценка:** 6.5 / 10

Неплохой пет-проект с разумным выбором стека и заметным прогрессом в рефакторинге
(переход на TanStack Query, выделение API-слоя, именованные роуты — видно по истории коммитов).
Но есть **несколько серьёзных проблем с безопасностью**, которые нужно решать в первую очередь,
и системные слабые места (тесты, дублирование, утечка секретов в репозиторий).

---

## Оценки по категориям

| Категория | Оценка | Заметка |
|---|---|---|
| Выбор стека | **9/10** | Современно и адекватно |
| Настройка сборки / TS | **8/10** | Строгий TS, хорошая конфигурация |
| Качество кода | **6/10** | Чисто местами, но `any`, дублирование, магия |
| Архитектура | **6/10** | Разумно, но непоследовательное кэширование |
| **Безопасность** | **4/10** | Утечка токенов в git (favorites.js), нет Firestore rules, сломанный CI-secret |
| Тестирование | **1/10** | Тестов нет вообще |
| Документация | **8/10** | Хорошая для пет-проекта |
| UX / надёжность | **6/10** | Ошибки часто «проглатываются» в консоль |

---

## ✅ Сильные стороны

1. **Современный, адекватный стек**: Vue 3 Composition API + `<script setup>`, Pinia, Vue Router 5, TanStack Vue Query, TypeScript, Vite (rolldown), PWA.
2. **Хорошо настроенный TypeScript**: `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` (`tsconfig.app.json:13-18`).
3. **Чистый API-слой**: `components/api.ts` — централизованный клиент с кастомным `ApiError`, единый `fetchJson`, типизированные эндпоинты, заложена поддержка `AbortSignal`.
4. **Правильное использование TanStack Query**: `useInfiniteQuery` для коллекций, `Promise.allSettled` для отказоустойчивого сбора «похожих фильмов» (`FilmPage.vue:35-50`), корректные `queryKey`.
5. **Адекватная обработка ошибок**: в `FilmPage.vue` есть `isError` / `errorMessage` с человекочитаемыми сообщениями.
6. **Документация**: `CLAUDE.md`, `docs/api.md`, `docs/decisions.md` — редкость для проектов такого размера.
7. **Единые типы** (`types/index.ts`, `stores/types.ts`), централизованные константы (`const.ts`).
8. **Directives вынесены** (`VTitle`, `VIntersection`) — good Vue-idioms.

---

## 🔴 Критические слабые места (Безопасность)

### 1. Утечка токенов плееров в репозиторий — `src/stores/favorites.js`
Файл **трекается в git** и содержит хардкоженные токены плееров прямо в коде:

```js
"Alloha":    id => `...?kp=${id}&token=e7b61f129f4a392ac4bf6726a9dd6a`,
"VeoVeo":    id => `...?token=eyJhbGciOiJIUzI1NiJ9...`   // полный JWT
"VideoSeeD": id => `...?token=6091e1d0bf421f73804d2f0dcc2bf1cf`,
```

Сверху комментарий «Этот файл не импортируется… НЕ УДАЛЯТЬ» — но токены от этого не перестают быть в истории git.
**Эти токены нужно ротировать и удалять из истории.**

### 2. Токены плееров хранятся в Pinia store как реактивное состояние
`stores/filmStore.ts:9-15`: токены Alloha / HDVB / Bugall / VeoVeo / Coll / VideoSeeD / Kodi
живут как реактивные поля Pinia store (`apiAloha`, `apiHDBV`, …). Это создаёт ложное ощущение, что это
«состояние приложения» и некий секрет. На практике — это псевдо-публичные ключи сторонних агрегаторов
(любой может зарегистрироваться и получить свой токен за 2 минуты, сами сервисы передают их в URL как `?token=...`).
Ни о какой бреши безопасности пользователей речи не идёт.

**Реальная проблема**: токены не должны быть в Pinia store. Достаточно обычного модуля/замыкания,
который подставляет значение из `import.meta.env.VITE_*` «на лету» при формировании URL.
А дубль в `favorites.js` — это уже отдельная проблема (см. п.1).

> Firebase-ключи в бандле — это нормально (так и задумано для web-клиента).
> Реальная угроза безопасности — отсутствие Firestore rules (см. п.3).

### 3. Отсутствуют Firestore Security Rules
В проекте **нет файла** `firestore.rules`. Коллекция `users/{uid}` хранит `favorites`, списки, историю поиска.
Без явных правил данные пользователей потенциально читаемы/перезаписываемы кем угодно. Нужны правила:

```
match /users/{userId} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}
```

### 4. Локальный `.env` с реальными ключами
`.gitignore` корректно исключает `.env` (хорошо), но все ключи Firebase API (`.env:11-16`) — клиентские и
всё равно попадут в бандл. В сочетании с отсутствием rules — рискованно.

---

## 🟠 Значимые проблемы

### 5. Сломанный синтаксис env в CI — `.github/workflows/deploy.yml:38`
```yaml
VITE_API_FIREBASE_APP_ID='1:452296723769: ${{ secrets.VITE_API_FIREBASE_APP_ID }}
```
Не валидное имя env-переменной (содержит `=` и `:`), поэтому `VITE_API_FIREBASE_APP_ID` при сборке в CI
скорее всего не подставляется или ломает шаг. Локальный `.env` маскирует проблему.

### 6. Дублирование «list-страниц» — почти идентичные компоненты
`FavoritePage.vue`, `WatchListPage.vue`, `WaitListPage.vue`, `WatchingPage.vue`, `LastViews.vue` —
**6 файлов по 20-25 строк**, отличающихся только полем стора и заголовком. Кандидат на один
параметризованный компонент `<UserListPage list-key="..." />`.

### 7. Двойная нормализация данных в list-страницах
В `WatchListPage.vue:15`, `WaitListPage.vue:15`, `WatchingPage.vue:15`:
```ts
const list = computed(() => getFilmEntityList(filmLists.watchList));
```
Но `watchList` уже нормализован через `getFilmEntityList` в `userListsStore` (`hydrate` → `initUserData`).
Значит `getFilmEntity` вызывается повторно на уже чистых данных — бесполезная работа на каждый re-render.
`FavoritePage.vue` и `LastViews.vue` этого не делают (там правильно).

### 8. `setTimeout` + глобальный `Kinobox` без проверки
`FilmKinoboxTab.vue:23-28`:
```ts
setTimeout(() => { new Kinobox('.kinobox_player', ...).init(); }, 1000);
```
Хрупко: если скрипт грузится дольше секунды — упадёт с `ReferenceError`. Нет `onBeforeUnmount` для очистки.
Лучше слушать `script.onload`.

### 9. Каскад `console.warn`/`console.error` вместо показа пользователю
`userListsStore.ts` — почти все действия (`addFavorite`, `addWatching`, …) при ошибке пишут только в консоль.
Пользователь не узнает, что избранное не сохранилось. UI при этом покажет добавленное состояние
(оптимистичный апдейт не откатывается при ошибке `safeUpdateUserData`).

### 10. `@ts-ignore` и непубличное API без обработки
`FilmKinoboxTab.vue:24` — `// @ts-ignore` перед `new Kinobox(...)`. `Kinobox` нигде не типизирован и
грузится с внешнего домена `kinobox.tv` — точка отказа без fallback.

---

## 🟡 Менее критичные замечания

| Проблема | Где | Комментарий |
|---|---|---|
| Полное отсутствие тестов | весь проект | Ни unit, ни e2e; `type-check` есть, но это не тесты |
| `@typescript-eslint/no-explicit-any: 'off'` | `eslint.config.mjs:75,100` | С пометкой «потом включить» — типобезопасность дырявая |
| `inject('emitter') as any` | `MainList.vue:24`, `FilmList.vue:40` | mitt-типизация объявлена (`GlobalEvents`), но фактически cast в `any` |
| `getFilmRating` дублируется | `stores/utils.ts:74` и `components/utils.ts:18` | Одинаковая логика в двух местах |
| `safeUpdateUserData` — read-modify-write без транзакции | `stores/utils.ts:181-205` | Race condition: два быстрых добавления могут потерять данные (нужны `runTransaction`) |
| `PlayerClub` iframe на захардкоженный домен | `FilmPlayerClub.vue:4` | Магическое число без константы |
| Микс `.js` и `.ts` файлов | `favorites.js` среди `.ts` | Несогласованность типизации |
| Пустой `.browserslistrc` | корень | Нет реальной поддержки браузеров |
| `.continue`, `.claude`, `.mcp.json` | корень | AI-тулинг закоммичен — раздувает репозиторий |
| `:key="$route.fullPath"` перемонтирует | `App.vue:3,13` | Header / Nav перемонтируются при каждом переходе — возможны потери фокуса/состояния |

---

## 🏗️ Архитектурное резюме

- **Слои разделены неплохо**: views → components → stores → api/plugins. Связи в основном однонаправленные.
- **Pinia stores на Options API** — последовательно (везде одинаково), но `Setup syntax` был бы лаконичнее.
- **TanStack Query внедрён точечно** (только `FilmPage` и `MainList`), а пользовательские списки тянутся напрямую из Firebase через store — **непоследовательно**. Часть данных кэшируется/рефетчится автоматически, часть — нет.
- **Нет守 layers**: store дёргает `firebaseActions`, который дёргает `firebase/firestore` напрямую; нет единого репозитория.

---

## 🎯 Топ-3, что сделать в первую очередь

1. **Ротация и удаление токенов из `favorites.js` + истории git** (критично — они публичны).
2. **Добавить `firestore.rules`** с доступом только владельца документа.
3. **Починить `deploy.yml:38`** — сейчас CI-сборка может собираться без Firebase App ID.

---

# 📋 План устранения

> Порядок выполнения — сверху вниз. Фаза 1 (безопасность) требует подтверждения перед действиями с git-историей.

## Фаза 1 — Критическое (безопасность) ⚠️

| # | Задача | Файлы | Действие |
|---|---|---|---|
| 1.1 | Удалить утечку токенов | `src/stores/favorites.js` | Файл не импортируется (по комментарию). Удалить полностью. |
| 1.2 | Очистить историю git | вся история | `git filter-repo --path src/stores/favorites.js --invert-paths` + `git push --force`. **Требует подтверждения — переписывает историю.** |
| 1.3 | Вывести токены из Pinia store в модуль | `stores/filmStore.ts:9-15`, новый `components/playerApi.ts` | Удалить поля `apiAloha`/`apiHDBV`/… из реактивного state. Вынести в обычный модуль с замыканием, который подставляет `import.meta.env.VITE_*` при формировании URL. Удалить `API_KEY_MAP` из `const.ts`. Ротация токенов — опционально, по желанию (действие пользователя). |
| 1.4 | Firestore Security Rules | создать `firestore.rules`, `firebase.json` | Правило `match /users/{userId} { allow read, write: if request.auth != null && request.auth.uid == userId; }`. Деплой через `firebase deploy --only firestore:rules`. |
| 1.5 | Починить CI-секрет | `.github/workflows/deploy.yml:38` | Привести к формату `VITE_API_FIREBASE_APP_ID: ${{ secrets.VITE_API_FIREBASE_APP_ID }}`. |

## Фаза 2 — Значимое

| # | Задача | Файлы | Действие |
|---|---|---|---|
| 2.1 | Дедуплицировать list-страницы | `views/UserListPage.vue` (новый), `views/*.vue`, `router/index.ts` | Один параметризованный компонент (props `title`, `listKey`), роуты отсылают к нему с meta или пропсами. |
| 2.2 | Убрать двойную нормализацию | `WatchListPage.vue`, `WaitListPage.vue`, `WatchingPage.vue` | Использовать данные стора напрямую, как в `FavoritePage` (после дедупликации — автоматически). |
| 2.3 | Переписать `FilmKinoboxTab` | `components/FilmPage/FilmKinoboxTab.vue` | `script.onload` вместо `setTimeout`; `onBeforeUnmount` очистка; типизация `Kinobox` через `declare global` вместо `@ts-ignore`. |
| 2.4 | Ошибки store в UI | `stores/userListsStore.ts`, `stores/utils.ts`, новый toast/notify | Единый механизм уведомлений (mitt-event `notify` + компонент-тост, или `errorMessage` в store). Откатывать оптимистичный апдейт при ошибке. |
| 2.5 | Включить `no-explicit-any` постепенно | `eslint.config.mjs`, несколько `.ts/.vue` | Заменить ключевые `any` (emitter, `fetchJson` return, `extractIframeSrc` data) и включить правило как `warn`. |

## Фаза 3 — Менее критичное

| # | Задача | Файлы | Действие |
|---|---|---|---|
| 3.1 | Дедуп `getFilmRating` | `stores/utils.ts`, `components/utils.ts` | Вынести в одно место, убрать дубль. |
| 3.2 | `safeUpdateUserData` → транзакция | `stores/utils.ts:181-205` | `runTransaction` для атомарности read-modify-write. |
| 3.3 | Константа для iframe-домена | `components/FilmPage/FilmPlayerClub.vue:4` | Вынести магический домен в `const.ts`. |
| 3.4 | Тесты | новый `vitest.config.ts`, `**/*.spec.ts` | Unit-тесты на utils: `getFilmEntity`, `addFirstAndExcludeCopy`, `extractIframeSrc`, `filterGenres`, `initUserData`. |
| 3.5 | Заполнить `.browserslistrc`, ревизия AI-тулинга | `.browserslistrc`, `.gitignore` | Реальные таргеты браузеров; проверить, нужно ли коммитить `.continue`/`.claude`/`.mcp.json`. |
| 3.6 | Ревизия `:key` перемонтирования | `App.vue:3,13` | Оценить, можно ли убрать `:key="$route.fullPath"` без потери поведения. |

---

## Статус выполнения

- [ ] **Фаза 1** — безопасность (требует подтверждения перед 1.2)
- [ ] **Фаза 2** — значимые улучшения
- [ ] **Фаза 3** — полировка

> Фиксы будут применяться пошагово по запросу, начиная с Фазы 1.
> Перед `git push --force` (п. 1.2) требуется явное подтверждение.
