# Внешние API и сервисы

## 1. Kinopoisk Unofficial API (v2.2)

**Основной источник данных о фильмах.**

| Параметр | Значение |
|----------|----------|
| Базовый URL | `https://kinopoiskapiunofficial.tech/api/` |
| Аутентификация | Заголовок `X-API-KEY` |
| Ключ | `VITE_API_FILM_LIST_KEY` из `.env` (можно переопределить в профиле пользователя через Firestore) |
| Формат ответа | JSON |

### Эндпоинты

#### GET `/v2.2/filters`
Получение списка жанров.

**Используется:** `filmStore.getGenreList()` → `GenreList.vue`

**Ответ:**
```json
{
  "genres": [{ "id": 1, "genre": "драма" }, ...]
}
```

**Особенности:**
- Жанры кешируются в `localStorage` (ключ `genres`).
- 17 жанровых категорий игнорируются (см. `GENRES_IGNORED` в `firebaseActions.ts`): для взрослых, мюзикл, спорт, церемония, фильм-нуар, биография, вестерн, короткометражка, документальный, реальное ТВ, ток-шоу, концерт, игра, новости.
- **Известная проблема:** эндпоинт возвращает HTTP 400 в текущей версии API.

#### GET `/v2.2/films/{id}`
Получение информации о фильме по Kinopoisk ID.

**Используется:** `FilmPage.vue` (через `vue-query`: `useQuery(['filmInfo', id])`)

**Ответ нормализуется** через `getFilmEntity()` → `IFilmEntity`:
- `kinopoiskId`/`filmId`/`id` → `id`
- `nameRu`/`nameEn`/`nameOriginal`/`name` → `name`
- `posterUrlPreview`/`posterUrl`/`image` → `image`
- `rating`/`ratingKinopoisk`/`ratingImdb` → `rating`

#### GET `/v2.2/films/{id}/similars`
Похожие фильмы.

**Используется:** `FilmPage.vue` (через `vue-query`: `useQuery(['filmExtras', id])`)

#### GET `/v2.2/films/{id}/relations`
Связанные фильмы (сиквелы, приквелы, ремейки).

#### GET `/v2.1/films/{id}/sequels_and_prequels`
Сиквелы и приквелы (старая версия API v2.1).

#### GET `/v2.2/films/collections`
Коллекции фильмов (главная страница).

**Параметры:**
| Параметр | Значение |
|----------|----------|
| `type` | `TOP_POPULAR_ALL` (всегда) |
| `page` | Номер страницы (1-based) |

**Используется:** `MainList.vue` (через `vue-query`: `useInfiniteQuery(['collections'])`)

**Ответ:** `{ items: IFilmEntity[], total: number, totalPages: number }`

#### GET `/v2.2/films` (поиск)
Поиск фильмов.

**Параметры:** `q` (текст), `genres` (id жанра), `page` и др.

**Используется:** `SearchPage.vue`

---

## 2. Видео-плееры (агрегаторы)

На странице фильма доступно 8 источников видео. URL-шаблоны и API-ключи определены в `src/components/const.ts`.

### Alloha
| Параметр | Значение |
|----------|----------|
| URL | `https://harald-as.newplayjj.com/?kp={id}&token={api}` |
| Ключ | `VITE_API_ALOHA_KEY` |
| Тип | Прямой iframe |

### Collaps
| Параметр | Значение |
|----------|----------|
| URL | `https://api.atomics.ws/embed/kp/{id}` |
| Ключ | Не требуется |
| Тип | Прямой iframe |

### VideoCDN
| Параметр | Значение |
|----------|----------|
| URL | `https://p.lumex.space/j3mqebEPqCLB?domain=nayteruz.github.io&kp_id={id}` |
| Ключ | Не требуется (домен жёстко задан) |
| Тип | Прямой iframe |

### Coll (bhcesh.me)
| Параметр | Значение |
|----------|----------|
| URL API | `https://api.bhcesh.me/list?token=4c250f7ac0a8c8a658c789186b9a58a5&kinopoisk_id={id}` |
| Ключ | Закодирован в URL |
| Тип | Асинхронный — сначала запрос к API, затем iframe по `results[0].iframe_url` |

### kodi (Kodik API)
| Параметр | Значение |
|----------|----------|
| URL API | `https://kodikapi.com/search?token=41dd95f84c21719b09d6c71182237a25&kinopoisk_id={id}` |
| Ключ | Закодирован в URL |
| Тип | Асинхронный — запрос к API, затем iframe по `results[0].link` |

### HDVB
| Параметр | Значение |
|----------|----------|
| URL API | `https://apivb.com/api/videos.json?id_kp={id}&token={api}` |
| Ключ | `VITE_API_HDTV_KEY` |
| Тип | Асинхронный — запрос к API, затем iframe по `data[0].iframe_url` |

### Kodik (прямой)
| Параметр | Значение |
|----------|----------|
| URL | `https://kodik.cc/find-player?kinopoiskID={id}` |
| Ключ | Не требуется |
| Тип | Прямой iframe |

### Трейлер
| Параметр | Значение |
|----------|----------|
| URL | `https://api.atomics.ws/embed/trailer-kp/{id}` |
| Ключ | Не требуется |
| Тип | Прямой iframe |

### Известные проблемы плееров

- **Lumex (FilmPlayerClub):** таймаут при загрузке iframe с `svetacdn.in`. Внешний сервис может быть недоступен.
- Асинхронные плееры (Coll, kodi, HDVB) могут вернуть `null`, если API не отвечает — тогда плеер молча пропускается.

---

## 3. Firebase / Firestore

### Конфигурация

Жёстко задана в `src/plugins/firebaseConfig.ts` (НЕ в `.env`).

| Параметр | Значение |
|----------|----------|
| Project ID | `hometv-c10f8` |
| Auth Domain | `hometv-c10f8.firebaseapp.com` |

### Firebase Authentication

**Метод:** Только email/password (НЕ Google — кнопка Google есть в UI, но обработчик — заглушка).

**Основные функции (`authStore`):**
- `authWithEmailAndPassword(data)` — вход
- `createAuthWithEmailAndPassword(data)` — регистрация + создание документа пользователя в Firestore
- `authLogout()` — выход
- `authChange(callback)` — слушатель изменений авторизации (`onAuthStateChanged`)
- `editAuthNameOrApiKey(data)` — изменение имени и API-ключа

**Ошибки авторизации** переводятся на русский через `translateErrorCode()`:
- `auth/wrong-password` → «Неверный пароль»
- `auth/invalid-email` → «Недопустимый email»
- `auth/user-not-found` → «Пользователь не найден»
- `auth/weak-password` → «Пароль не менее 6 символов»

### Firestore (Cloud Firestore)

**Коллекция:** `users/{uid}`

**Структура документа пользователя:**
```typescript
{
  name: string;           // Имя пользователя
  email: string;          // Email
  api_key: string;        // Персональный API-ключ Кинопоиска
  favorites: IFilmEntity[];
  watchingList: IFilmEntity[];
  watchList: IFilmEntity[];
  waitingList: IFilmEntity[];
  lastSearchList: { id: number; value: string }[];
  lastViews: IFilmEntity[];
  skippedIds: number[];
}
```

**CRUD-операции (`firebaseActions.ts`):**
- `userDataGet(uid)` — получить документ пользователя
- `userDataSet(data, uid)` — создать документ при регистрации

**Синхронизация списков (`userListsStore` + `safeUpdateUserData`):**
- Все мутации списков проходят через `safeUpdateUserData(fieldName, updaterFn)`.
- Алгоритм: читаем текущие данные из Firestore → применяем `updaterFn` → пишем обратно → обновляем локальный стейт.
- При изменении состояния авторизации: `hydrate()` заполняет сторы, `reset()` очищает.

**Ограничения списков:**
| Список | Лимит |
|--------|-------|
| `lastViews` | 40 элементов |
| `lastSearchList` | 30 элементов |
| `skippedIds` | 100 элементов |

---

## 4. Переменные окружения (.env)

| Переменная | Назначение |
|-----------|-----------|
| `VITE_API_FILM_LIST_KEY` | Ключ Kinopoisk Unofficial API (основной) |
| `VITE_API_ALOHA_KEY` | Токен плеера Alloha |
| `VITE_API_HDTV_KEY` | Токен плеера HDVB |

Пользователь может переопределить ключ Кинопоиска через профиль (поле `api_key` в Firestore). Приоритет: персональный ключ из Firestore > ключ из `.env`.
