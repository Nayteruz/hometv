# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Start development server**: `npm run start` — launches Vite dev server on port 8000.
- **Build for production**: `npm run build` — runs Vite build, then executes `copy-404.js` to copy `dist/index.html` → `dist/404.html` (required for GitHub Pages SPA fallback).
- **Preview built app**: `npm run preview` — serves the built output locally.
- **Lint**: `npm run lint` — runs ESLint (flat config `eslint.config.mjs`) on all `.vue`, `.js`, and `.ts` files.
- **Fix lint errors**: `npm run lint:fix` — runs ESLint with `--fix`.
- **Type‑check**: `npm run type-check` — runs `vue-tsc --noEmit` with strict TypeScript.
- **Deploy to GitHub Pages**: автоматический — при пуше в ветку `master` срабатывает GitHub Actions workflow (`.github/workflows/deploy.yml`). Собирает проект, копирует `index.html` → `404.html` и деплоит в `gh-pages`.

*There are no dedicated test scripts in this project; tests can be added later as needed.*

## High‑Level Architecture

- **Framework**: Vue 3 with the Composition API (`<script setup>` syntax).
- **Language**: TypeScript with strict mode (`strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`).
- **State Management**: Pinia stores located in `src/stores/`. Three stores: `authStore`, `filmStore`, `userListsStore`.
- **Routing**: Vue Router with `createWebHistory('/hometv')` base. Scroll behavior restores saved position or scrolls to top. Catch-all route `/:pathMatch(.*)*` renders `NotFound`.
- **Data Fetching**: `@tanstack/vue-query` is used for async API calls (`useQuery`, `useInfiniteQuery`). Query keys include `['collections']`, `['filmInfo', id]`, `['filmExtras', id]`.
- **Styling**: SCSS (Sass) with `<style scoped lang="scss">`. Global CSS custom properties defined in `src/variables.css`. Prettier config in `.prettierrc` (single quotes, 2-space indent, semicolons).
- **Authentication**: Firebase Auth with **email/password** authentication (NOT Google sign-in — the Google button exists in UI but handler is a stub). Firebase Firestore stores user data (lists, profile, API keys).
- **PWA / Offline**: Service worker via `register-service-worker` + custom `sw.js` in `public/`. `manifest.json` for installable PWA. Enabled only in production mode.
- **External APIs**:
  - **Kinopoisk Unofficial API** (v2.2) — primary movie data source. Wrapper in `src/components/api.ts`. Requires `VITE_API_FILM_LIST_KEY`.
  - **Video player aggregators** — multiple streaming sources configured in `src/components/const.ts`:
    - Alloha (`VITE_API_ALOHA_KEY`)
    - Collaps (atomics.ws)
    - VideoCDN (lumex.space)
    - HDVB (`VITE_API_HDTV_KEY`)
    - Kodik (kodikapi.com)
    - Coll (bhcesh.me)
    - Trailers (atomics.ws)
  - Player selection UI in `FilmPlayerSelect.vue` and player-specific components.

## Project Structure

```
src/
├── main.ts                  — Entry point: creates app, registers Pinia/VueQuery/Router/directives/emitter
├── App.vue                  — Root layout: HeaderFilm, GenreList, RouterView with KeepAlive, ToTop, NavigationByKeys
├── variables.css            — CSS custom properties (colors, wrapper-width)
├── env.d.ts                 — Vue SFC type declarations
├── registerServiceWorker.js — PWA service worker registration (prod only)
├── components/
│   ├── api.ts               — Kinopoisk API client (fetch wrapper, ApiError class, all endpoints)
│   ├── const.ts             — App constants: keyboard keys, breakpoints, player URLs, page titles, router paths
│   ├── utils.ts             — Component-level utilities (film page title, rating, ID lookup)
│   ├── FilmList.vue         — Responsive grid of film cards (5→4→3→2 columns)
│   ├── FilmItem.vue         — Individual film card (inside FilmPage/)
│   ├── FilmRating.vue       — Rating display component
│   ├── GenreList.vue        — Genre filter tabs
│   ├── PaginationList.vue   — Page number navigation
│   ├── NavigationByKeys.vue — Keyboard navigation (arrows + Enter) for film grid
│   ├── PlayersList.vue      — Player iframe display
│   ├── PopupContainer.vue   — Generic popup/modal wrapper
│   ├── PreloadCard.vue      — Skeleton loading placeholder (single)
│   ├── PreloadCards.vue     — Skeleton loading placeholders (multiple)
│   ├── ToTop.vue            — Scroll-to-top button
│   ├── ButtonBack.vue       — Back navigation button
│   ├── ButtonBlue.vue       — Reusable styled button
│   ├── WatchActionButton.vue    — "Watch" action button (multi-list)
│   ├── FavoriteActionButton.vue — Favorite toggle button
│   ├── NotFound.vue         — 404 page component
│   ├── Header/
│   │   ├── HeaderFilm.vue   — Main header with nav buttons, search, auth
│   │   ├── HomeButton.vue, FavoriteButton.vue, LastViewButton.vue
│   │   └── MenuPopup.vue    — Mobile menu popup
│   ├── SearchForm/
│   │   ├── SearchForm.vue   — Search input with submit
│   │   └── SearchPopup.vue  — Recent searches dropdown
│   ├── FilmPage/
│   │   ├── FilmItem.vue         — Film card in grid
│   │   ├── FilmImage.vue        — Poster image with lazy load
│   │   ├── FilmGenres.vue       — Genre tags
│   │   ├── FilmPlayerSelect.vue — Player source selector
│   │   ├── FilmKinoboxTab.vue, FilmKinoBD.vue, FilmPlayerClub.vue, FilmKinoTop.vue — Player-specific tabs
│   │   ├── FilmActionList.vue   — Action buttons container
│   │   └── FilmActionButtons/   — Individual action buttons (Favorite, Watching, WatchList, WaitingList)
│   ├── registration/
│   │   ├── RegistrationWrap.vue  — Auth modal wrapper (toggles sign-in/registration)
│   │   ├── RegistrationComponent.vue — Registration form (email, name, API key, password)
│   │   ├── SignInComponent.vue   — Sign-in form
│   │   └── LogoutComponent.vue   — Logout button + user info display
│   └── icons/                    — 20+ SVG icon components (IconFavorite, IconGoogle, etc.)
├── directives/
│   ├── VIntersection.ts    — Infinite scroll directive (IntersectionObserver), triggers getMoreFilms()
│   └── VTitle.ts           — Dynamic document title directive ($root, beforeUpdate, updated hooks)
├── plugins/
│   ├── index.ts            — Re-exports firebaseApp and firebaseDb
│   ├── firebase.ts         — Firebase app initialization + Firestore instance
│   ├── firebaseConfig.ts   — Firebase project config (apiKey, projectId, etc.)
│   └── firebaseActions.ts  — Firestore CRUD helpers: userDataGet, userDataSet, translateErrorCode, GENRES_IGNORED
├── router/
│   └── index.ts            — Route definitions (8 named routes + catch-all)
├── stores/
│   ├── authStore.ts        — Auth state: user, errorMessage, apiKey. Actions: login, register, logout, edit profile, auth state listener
│   ├── filmStore.ts        — Film/search state: genres, filters, pagination, search query, focus index, films cache
│   ├── userListsStore.ts   — User's 6 lists + skipped IDs, hydrated from Firestore, synced on change
│   ├── favorites.js        — Static hardcoded favorite film list (offline fallback / demo data)
│   ├── types.ts            — Store type definitions (AppUser, IFilmStoreState, IUserListsStoreState, etc.)
│   ├── utils.ts            — Store utilities: film entity mappers, list operations, safeUpdateUserData
│   └── const.ts            — FILM_TYPE and FILM_TYPE_LABELS enums
├── types/
│   └── index.ts            — Global types: IFilmEntity, IFilmRaw, EventsEmitter
└── views/
    ├── MainList.vue        — Home page with infinite scroll collections (useInfiniteQuery)
    ├── FilmPage.vue        — Film detail page: info, image, players, similars, genres
    ├── SearchPage.vue      — Search results page with pagination
    ├── FavoritePage.vue    — User's favorite films
    ├── LastViews.vue       — Recently viewed films
    ├── WatchingPage.vue    — Currently watching list
    ├── WatchListPage.vue   — Plan-to-watch list
    └── WaitListPage.vue    — Waiting for new episodes/seasons
```

## Key Architectural Patterns

### User Lists System
The `userListsStore` manages **6 separate lists** synchronized with Firestore:
- `favorites` — favorited films
- `watchingList` — currently watching
- `watchList` — plan to watch
- `waitingList` — waiting for new episodes
- `lastViews` — recently viewed (max 40 items)
- `lastSearchList` — recent search queries (max 30 items)
- `skippedIds` — hidden/unwatched film IDs (Set, max 100)

Each list uses `safeUpdateUserData(fieldName, callback)` which reads current Firestore data, applies the callback, and writes back. List items are deduplicated by film ID. On authentication state change, `hydrate()` populates the store; on logout, `reset()` clears all lists.

### Event System
Global event emitter using `mitt` library, provided via `app.provide('emitter', emitter)`. Known events:
- `'isLoading'` — emitted with boolean to show/hide loading overlay on FilmList
- `'clickPage'` — emitted when pagination is clicked, triggers page fetch
- `'searchSubmit'` — emitted on search form submit (consumed by SearchPage)

### Keyboard Navigation
`NavigationByKeys.vue` provides arrow-key film grid navigation:
- Arrow keys move focus between film cards
- Column count adapts to breakpoints (5/4/3/2 columns)
- Enter navigates to film detail page
- Focus position is persisted per route in `filmStore.focusIds`
- Disabled on film detail page (`filmPage` route)

### Infinite Scroll
`VIntersection` directive uses `IntersectionObserver` to trigger `getMoreFilms()`. Used on `MainList.vue` for infinite scroll and `SearchPage.vue` for "load more" pagination.

### API Layer
`src/components/api.ts` is the centralized API client:
- Custom `ApiError` class with status code
- `fetchJson()` helper with AbortSignal support
- Endpoints: filters, film info, similars, relations, sequels/prequels, collections, search
- All film data normalized through `getFilmEntity()` mapper

### Environment Variables
Three API keys required (see `.env`):
- `VITE_API_FILM_LIST_KEY` — Kinopoisk Unofficial API key
- `VITE_API_ALOHA_KEY` — Alloha video player token
- `VITE_API_HDTV_KEY` — HDVB video player token

Users can override the film API key per-account (stored in Firestore under `api_key` field).

### Path Aliases
Configured in both `vite.config.ts` and `tsconfig.app.json`:
- `@/` → `src/`
- `@/types` → `src/types/`

## Notable Implementation Details

- `index.html` entry script is `/src/main.js` (not `.ts` — the file is `.ts` but imported as `.js` per Vite convention).
- `KeepAlive` caches `MainList` component only, other routes re-render on navigation.
- `App.vue` handles click-outside for search popup via `clickOutside` listener, excluding clicks inside `.search-form`.
- Firebase config is hardcoded in `firebaseConfig.ts` (not in `.env` for this project).
- `Firebase Error` handling uses `FirebaseError` type from `firebase/app`.
- `GENRES_IGNORED` filters out 17 genre categories from the Kinopoisk API (adult content, documentaries, talk shows, etc.).
- `copy-404.js` is a post-build script: copies `dist/index.html` to `dist/404.html` for GitHub Pages SPA fallback.
- The project uses **rolldown-vite** (npm alias `npm:rolldown-vite@7.2.5`) instead of standard Vite.
- `.prettierrc`: 2-space tabs, single quotes, semicolons enabled, Vue indent script and style.
- ESLint uses the **flat config** format (`eslint.config.mjs`) with `defineConfig` helper.
- PWA manifest: `public/manifest.json` with `theme_color: #163060` matching the CSS variable `--color-main-dark`.

## Header Buttons (6 items, left to right)

| # | Component | Назначение | Поведение без авторизации |
|---|-----------|-----------|--------------------------|
| 1 | `HomeButton` | Переход на главную `/hometv/` | Работает |
| 2 | `LastViewButton` | Переход на `/hometv/last-views` (последние просмотренные) | Работает |
| 3 | `FavoriteButton` | Переход на `/hometv/favorites`, показывает счётчик избранного | **Disabled** (кнопка `button.disabled`, счётчик "0") |
| 4 | `SearchForm` | Поле ввода + кнопка «Найти», переход на `/hometv/search?q=...` | Работает |
| 5 | `RegistrationWrap` | Открывает popup авторизации/регистрации | Работает |
| 6 | `MenuPopup` | Выпадающее меню со списками пользователя | Работает |

Кнопка `ButtonBlue` (поиск) скрыта на десктопе (`display: none`), показывается только на `@media (max-width: 500px)`.

### SearchForm
- При активном поиске появляется кнопка «×» для очистки поля.
- `SearchForm` видна всегда, когда `route.name === 'searchPage'` или есть `route.query.q`.
- На мобильных устройствах поиск переключается кнопкой `ButtonBlue` (лупа).

### RegistrationWrap (Auth Popup)
- Два режима: **Авторизация** (Email + Password + «Войти») и **Регистрация** (Почта + Имя + Api ключ + Password + «Регистрация»).
- В режиме регистрации есть ссылка «получить ключ API» → `https://kinopoiskapiunofficial.tech/signup`.
- Google-кнопка присутствует в UI, но обработчик — **заглушка** (аутентификация только по email/password).

### MenuPopup
Выпадающее меню с 5 пунктами:
1. «Смотрю сейчас» → `/hometv/watching`
2. «Буду смотреть» → `/hometv/watch-list`
3. «Жду продолжения» → `/hometv/waiting-list`
4. «Просмотренное» → `/hometv/last-views`
5. «Перезагрузить» — перезагрузка страницы (emit-событие)

## FilmPlayerSelect — выбор плеера

`FilmPlayerSelect.vue` — переключение между вкладками плееров:
- **«Плееры»** (`playerNum === 1`): рендерит `PlayersList` — 8 источников (Alloha, Collaps, VideoCDN, Coll, kodi, HDVB, Kodik, Трейлер) + iframe с видеоплеером.
- **«Lumex»** (`playerNum === 2`): рендерит `FilmPlayerClub` — отдельный плеер через svetacdn.in.

**Важно:** `playerNum` инициализируется как `ref(0)`, поэтому при загрузке страницы фильма ни одна вкладка не выбрана — плеер не отображается до клика по вкладке. Вкладка «Плееры» показывается по умолчанию только после ручного клика.

## Known Issues

1. **Заголовок страницы (document.title) не обновляется** на некоторых маршрутах. Например, на `/last-views` и `/watching` заголовок остаётся «Список последних новинок». Связано с директивой `VTitle.ts` или отсутствием `meta.title` в определении маршрутов.

2. **FilmPlayerSelect: плеер не выбран по умолчанию** — `playerNum = ref(0)`, пользователь видит пустую область плеера. Вероятно, должно быть `ref(1)`.

3. **API-ошибка при загрузке жанров**: `GET https://kinopoiskapiunofficial.tech/api/v2.2/filters` возвращает HTTP 400. Ошибка возникает в `filmStore.getGenreList()` → `GenreList.vue`. Возможно, эндпоинт `/filters` изменился или требует дополнительных параметров.

4. **Lumex-плеер (svetacdn.in) — таймаут**: iframe показывает «Превышено время ожидания ответа от сайта». Внешний сервис может быть недоступен или заблокирован.

## Project‑Specific Tips

- When adding new store modules, follow the existing pattern: use `defineStore` with Options API style. Register automatically via `createPinia()` in `main.ts`.
- UI components communicate via the global `emitter` (inject with `inject('emitter')`). Use the `EventsEmitter` type in `src/types/index.ts` when adding new events.
- All film data must go through `getFilmEntity()` / `getFilmEntityList()` mappers in `stores/utils.ts` to normalize fields (`kinopoiskId`/`filmId`/`id`, `posterUrlPreview`/`posterUrl`/`image`, etc.).
- After modifying Firebase rules or config, update `src/plugins/firebaseConfig.ts`.
- When adding new user list types, add them to: `IUserListsStoreState`, `IInitializedUserData`, `IFirebaseUserData` (in `stores/types.ts`), `initUserData()` (in `stores/utils.ts`), and `userListsStore` actions.
- The `emit: clickPage` pattern requires components to call `emitter.on('clickPage', handler)` — SearchPage and MainList both listen for this event from `PaginationList`.
- Remember to run `npm run lint` and `npm run type-check` before committing to keep the codebase consistent.
- `@tanstack/vue-query` devtools are not enabled; query caching uses default settings.
