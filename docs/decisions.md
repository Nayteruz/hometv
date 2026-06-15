# Архитектурные решения (ADR)

## 1. Vue 3 + Composition API с `<script setup>`

**Решение:** Использовать Vue 3 с Composition API и синтаксисом `<script setup lang="ts">` во всех компонентах.

**Причины:**
- Более компактный и читаемый синтаксис по сравнению с Options API.
- TypeScript-first подход — строгая типизация пропсов, эмитов, рефов.
- Лучшая поддержка tree-shaking и меньший размер бандла.
- `KeepAlive` используется для кеширования `MainList` (главная страница), остальные маршруты перерендериваются при навигации.

**Альтернативы:** React, Angular — не рассматривались, т.к. проект изначально на Vue.

---

## 2. Pinia для управления состоянием (вместо Vuex)

**Решение:** Использовать Pinia 3.x с синтаксисом Options API.

**Причины:**
- Официальная замена Vuex от команды Vue.
- Нативная поддержка TypeScript (без дополнительных обёрток).
- Девтулзы из коробки.
- Options API стиль выбран для единообразия: `defineStore('name', { state, getters, actions })`.

**Три стора:**
| Стор | Файл | Зона ответственности |
|------|------|---------------------|
| `authStore` | `stores/authStore.ts` | Аутентификация, профиль, API-ключ |
| `filmStore` | `stores/filmStore.ts` | Жанры, поиск, пагинация, фокус навигации |
| `userListsStore` | `stores/userListsStore.ts` | 6 пользовательских списков + skippedIds |

**Почему Options API в сторах:** Исторически сложилось в проекте, проще для понимания разработчиками с опытом Vue 2/Vuex.

---

## 3. `@tanstack/vue-query` для асинхронных запросов

**Решение:** Использовать `@tanstack/vue-query` (v5) вместо ручного управления запросами.

**Причины:**
- Автоматическое кеширование, инвалидация, рефетч.
- Встроенная поддержка infinite queries для бесконечного скролла (`MainList.vue`).
- Декларативные ключи запросов: `['collections']`, `['filmInfo', id]`, `['filmExtras', id]`.
- Девтулзы отключены (не нужны в проде).

**Альтернативы:** Ручные fetch в сторах, Apollo Client — избыточен (нет GraphQL), SWR — менее зрелый для Vue.

---

## 4. Firestore для хранения пользовательских данных

**Решение:** Хранить все пользовательские списки в Cloud Firestore (коллекция `users/{uid}`), а не в localStorage.

**Причины:**
- Синхронизация между устройствами.
- Надёжное хранение (не потеряется при очистке кеша браузера).
- Бесплатного лимита Firebase хватает для масштабов проекта.
- Уже используется Firebase Auth — экосистема единая.

**Паттерн safeUpdateUserData:**
```
1. Прочитать текущий документ из Firestore
2. Применить updater-функцию к нужному полю
3. Записать обновлённое поле обратно
4. Обновить локальный стейт стора
```
Это гарантирует, что мы не перезатрём данные другого поля при конкурентных изменениях.

**Почему не localStorage:** localStorage не синхронизируется, ограничен 5MB, не привязан к пользователю.

---

## 5. SCSS (Sass) для стилей

**Решение:** Использовать `<style scoped lang="scss">` в компонентах.

**Причины:**
- Изоляция стилей через `scoped` — предотвращает конфликты.
- SCSS даёт вложенность, переменные, миксины.
- Глобальные переменные в `src/variables.css` (CSS custom properties): цвета, ширина контейнера.
- Sass используется через `sass` (Dart Sass).

---

## 6. Валидация данных фильмов через mapper-функции

**Решение:** Все данные фильмов нормализуются через `getFilmEntity()` / `getFilmEntityList()`.

**Причины:**
- API Кинопоиска возвращает поля в разных форматах (иногда `kinopoiskId`, иногда `filmId`, иногда `id`).
- Компоненты работают с единым интерфейсом `IFilmEntity`, не завися от формата API.
- Централизованная логика: рейтинг (`rating`, `ratingKinopoisk`, `ratingImdb`), изображение (`posterUrlPreview`, `posterUrl`, `image`), название (`nameRu`, `nameEn`, `nameOriginal`, `name`).

**Расположение:** `stores/utils.ts`

---

## 7. Event Bus (mitt) для межкомпонентной коммуникации

**Решение:** Использовать `mitt` (EventEmitter) вместо проброса пропсов или provide/inject для событий.

**Причины:**
- События носят глобальный характер: `isLoading`, `clickPage`, `searchSubmit`.
- Избегает проблемы prop-drilling через несколько уровней вложенности.
- Легковеснее, чем создание отдельного стора для UI-событий.

**События (определены в `types/index.ts` → `EventsEmitter`):**
| Событие | Данные | Источник | Потребители |
|---------|--------|---------|-------------|
| `isLoading` | `boolean` | `MainList.vue`, `SearchPage.vue` | `FilmList.vue` |
| `clickPage` | `number` (page) | `PaginationList.vue` | `MainList.vue`, `SearchPage.vue` |
| `searchSubmit` | `string` (query) | `SearchForm.vue` | `SearchPage.vue` |

---

## 8. PWA (Progressive Web App)

**Решение:** Поддержка PWA через `register-service-worker` + `vite-plugin-pwa`.

**Причины:**
- Возможность установки на домашний экран (мобильные, десктоп).
- Офлайн-режим через service worker (`public/sw.js`).
- `manifest.json` с `theme_color: #163060` (соответствует `--color-main-dark`).
- PWA включается только в production-режиме.

---

## 9. Индивидуальный API-ключ пользователя

**Решение:** Разрешить пользователю указывать свой API-ключ Кинопоиска в профиле.

**Причины:**
- У каждого пользователя свой лимит запросов (500 запросов/день на бесплатном тарифе).
- Если один пользователь исчерпает лимит, другие не пострадают.
- Ключ хранится в Firestore (`api_key`), приоритет: персональный ключ > ключ из `.env`.

---

## 10. Rolldown-Vite вместо стандартного Vite

**Решение:** Использовать `rolldown-vite` (v7.2.5) как замену Vite.

**Причины:**
- Экспериментальный билд Vite на Rolldown (новый бандлер на Rust от команды Vite).
- Более быстрая сборка по сравнению с esbuild/rollup.
- В `package.json` используется алиас: `"vite": "npm:rolldown-vite@7.2.5"` с `overrides`.

---

## 11. GitHub Pages деплой с 404-фолбеком

**Решение:** SPA размещается на GitHub Pages (`nayteruz.github.io/hometv/`).

**Причины:**
- Бесплатный хостинг для статических сайтов.
- Post-build скрипт `copy-404.js` копирует `index.html` → `404.html` — необходимо для обработки клиентских маршрутов (SPA fallback).
- Деплой автоматический через GitHub Actions (`.github/workflows/deploy.yml`), триггер — пуш в `master`.

**Base URL:** `/hometv` (установлен в `vite.config.ts` → `base` и `router/index.ts` → `createWebHistory('/hometv')`).

---

## 12. Типизация и строгий TypeScript

**Решение:** `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.

**Причины:**
- Предотвращение багов на этапе компиляции.
- Все пропсы и эмиты типизированы через `defineProps<T>()` + `withDefaults()`.
- Типы разделены: глобальные (`src/types/index.ts`), сторов (`src/stores/types.ts`).
- Исключение для `any` присутствует в ESLint-конфиге, но не приветствуется.

---

## 13. Соглашение об именовании (Naming Conventions)

| Категория | Стиль | Пример |
|----------|-------|--------|
| Компоненты | PascalCase | `FilmList.vue`, `NavigationByKeys.vue` |
| Утилиты/сервисы | camelCase | `api.ts`, `firebaseActions.ts` |
| Интерфейсы | Префикс `I` | `IFilmEntity`, `IAuthData` |
| Типы (исключение) | Префикс `T` / `I` (legacy) | `IFilmRaw` |
| Сторы | camelCase | `useAuthStore` |
| Переменные окружения | `VITE_*` | `VITE_API_FILM_LIST_KEY` |
| CSS классы | kebab-case | `.search-popup-btn` |
