# Предложения по улучшению проекта

Создано: 2026-06-16. Список идей для будущих доработок.

## 🔴 Высокий приоритет

### 1. Исправить тип `EventsEmitter`
**Файл:** `src/types/index.ts`
**Суть:** Событие `searchSubmit` используется в коде (SearchForm.vue → SearchPage.vue), но отсутствует в типе `EventsEmitter`. Сейчас там только `'isLoading' | 'clickPage'`.
**Исправить:**
```typescript
export type EventsEmitter = 'isLoading' | 'clickPage' | 'searchSubmit';
```

### 2. `.vscode/settings.json` + `.vscode/extensions.json`
**Суть:** Настройки форматирования и рекомендованные расширения для VSCode.
- `settings.json`: format-on-save, Prettier как дефолтный форматтер для Vue/TS/SCSS, автофикс ESLint
- `extensions.json`: Volar, ESLint, Prettier, SCSS IntelliSense
**Важно:** `.gitignore` уже разрешает `!.vscode/extensions.json`, но запрещает остальной `.vscode/`. Нужно также разрешить `settings.json`:
```
!.vscode/extensions.json
!.vscode/settings.json
```

---

## 🟡 Средний приоритет

### 3. Pre-commit хук (lint-staged + husky)
**Суть:** Автоматический прогон ESLint и type-check перед коммитом.
**Установка:**
```bash
npm i -D husky lint-staged
npx husky init
```
**В `.husky/pre-commit`:**
```
npx lint-staged
```
**В `package.json`:**
```json
"lint-staged": {
  "*.{vue,ts,js}": ["eslint --fix", "vue-tsc --noEmit"]
}
```

### 4. Удалить осиротевшие компоненты
**Файлы:**
- `src/components/FilmPage/FilmKinoboxTab.vue`
- `src/components/FilmPage/FilmKinoBD.vue`
- `src/components/FilmPage/FilmKinoTop.vue`
**Суть:** Ни один из трёх не импортируется в `FilmPlayerSelect.vue` (там только `FilmPlayerClub.vue`). Перед удалением проверить grep'ом, что действительно нигде не используются.

---

## 🟢 Низкий приоритет

### 5. Тестовая инфраструктура
**Суть:** Добавить `vitest` + `@vue/test-utils` для unit-тестов хранилищ (Pinia stores) и утилит.
- Smoke-тесты на `authStore`, `filmStore`, `userListsStore`
- Тесты на мапперы `getFilmEntity()` / `getFilmEntityList()`
- Тесты на `safeUpdateUserData()`

### 6. CHANGELOG.md
**Суть:** Вести историю изменений по версиям. Формат — [Keep a Changelog](https://keepachangelog.com/).

### 7. GitHub-шаблоны
**Файлы:**
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
**Суть:** Стандартизировать оформление багов и PR (но для соло-проекта польза ограничена).

---

## ❌ Отклонено

- **`.env.example`** — не нужен, проект разрабатывается единственным разработчиком.

---

## Чеклист выполнения

- [ ] 1. Исправить `EventsEmitter` в `src/types/index.ts`
- [ ] 2. Добавить `.vscode/settings.json` и `.vscode/extensions.json`
- [ ] 3. Настроить pre-commit хук (lint-staged)
- [ ] 4. Удалить осиротевшие компоненты
- [ ] 5. Базовая тестовая инфраструктура (vitest)
- [ ] 6. CHANGELOG.md
- [ ] 7. GitHub-шаблоны
