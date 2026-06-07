# Code Conventions for hometv

## Vue Components
- Use `<script setup lang="ts">` composition API (no Options API)
- Props: define with `defineProps<T>()` + `withDefaults()`
- Emits: use `defineEmits()` with TypeScript typing
- Styles: always `<style scoped lang="scss">` — avoid global styles in components
- Use `@/` path alias for imports (not relative paths)

## TypeScript
- Type everything explicitly — avoid `any` (there's an eslint exception but prefer not to use it)
- Import types with `type` keyword: `import type { IFilmEntity } from '@/types'`
- Store types go in `src/stores/types.ts`, global types in `src/types/index.ts`
- Use strict mode (enabled in tsconfig)

## Stores (Pinia)
- Use Options API style with `defineStore('name', { state, getters, actions })`
- Store names: `authStore`, `filmStore`, `userListsStore`
- State factory returns typed object `(): IStoreState => ({...})`
- Always import store type interfaces from `./types`

## Component Communication
- Use `inject('emitter')` from `mitt` for cross-component events, NOT props drilling
- Known events: `isLoading`, `clickPage`, `searchSubmit`
- Add new events to `EventsEmitter` type in `src/types/index.ts`

## Naming
- **Files**: PascalCase for components (`FilmList.vue`), camelCase for utils (`api.ts`)
- **Interfaces**: prefix `I` — `IFilmEntity`, `IAuthData`
- **Types**: `T` prefix — `IFilmRaw` is an exception (legacy)
- **Stores**: camelCase — `useAuthStore`
- **Vue refs**: explicit types — `const films = ref<IFilmEntity[]>([])`

## Styles
- Use CSS custom properties from `src/variables.css` when possible
- Responsive: 5 columns → 1024px → 4 cols → 768px → 3 cols → 480px → 2 cols
- Color variables: `--color-main-dark: #163060`, `--color-main: #80b0d9`

## Film Data
- Always normalize through `getFilmEntity()` / `getFilmEntityList()` in `stores/utils.ts`
- Film ID can be in `kinopoiskId`, `filmId`, or `id` field — use the fallback chain

## User Lists (firebase)
- All list mutations go through `safeUpdateUserData(fieldName, updaterFn)`
- List operations: `addFirstAndExcludeCopy()` for add, `removeData()` for remove
- After mutating, update the local store state immediately
- Always check `if (!this.user || !item)` guard at start of list actions

## Special Files
- `src/stores/favorites.js` — статический демо-файл со списком избранных фильмов. НЕ импортируется в коде, НЕ удалять. Используется как резервный источник данных / пример структуры.

## Error Handling
- API errors: catch `ApiError` (has `status`, `url`, `message`)
- Firebase errors: catch `FirebaseError`, use `translateErrorCode()` for user-facing messages
- Use `console.error` for errors, `console.warn` for non-critical issues
