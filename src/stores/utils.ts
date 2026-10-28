import { GENRES_IGNORED } from '@/plugins/firebaseActions';
import type { IFilmEntity, IFilmRaw, IFilmRawList } from '@/types';
import type { IFirebaseUserData, IInitializedUserData } from './types';
import { FILM_TYPE_LABELS } from './const';
import { firebaseDb } from '@/plugins';
import { userDataGet } from '@/plugins/firebaseActions';
import { updateDoc, doc } from 'firebase/firestore';
import { useAuthStore } from '@/stores/authStore';

export const addDataLastAndExcludeCopy = (
  list: IFilmRawList,
  item: IFilmRaw
) => {
  const filmId = Number(item?.kinopoiskId || item?.filmId || item?.id);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const excludedList = list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== filmId
  );

  return [...excludedList, itemWithTime];
};

export const addDataFirst = (list: IFilmRawList, item: IFilmRaw) => {
  const filmId = Number(item?.kinopoiskId || item?.filmId || item?.id);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const alreadyExists = list.some(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) === filmId
  );

  if (alreadyExists) {
    return list;
  }

  return [itemWithTime, ...list];
};

export const addFirstAndExcludeCopy = (list: IFilmRawList, item: IFilmRaw) => {
  const filmId = Number(item?.kinopoiskId || item?.filmId || item?.id);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const excludedList = list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== filmId
  );

  return [itemWithTime, ...excludedList];
};

export const removeData = (list: IFilmRawList, itemId: number) => {
  return list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== itemId
  );
};

const getCountryList = (countries: Record<string, any>[]): string[] => {
  return countries.map((country) => country?.country || country || '');
};

const getName = (filmRaw: IFilmRaw): string => {
  return (
    filmRaw.name ||
    filmRaw.nameRu ||
    filmRaw.nameEn ||
    filmRaw.nameOriginal ||
    filmRaw?.name ||
    'Без названия'
  );
};

const getGenreList = (genres: Record<string, any>[]): string[] => {
  return genres.map((genre) => genre?.genre || genre || '');
};

export const getFilmRating = (filmRaw: IFilmRaw): string => {
  const rating =
    filmRaw?.rating ||
    filmRaw?.ratingKinopoisk ||
    filmRaw?.ratingImdb ||
    filmRaw?.rating;

  if (!rating) {
    return '∞';
  }

  if (typeof rating === 'number') {
    return rating.toFixed(1);
  }

  return rating;
};

const allohaText = (value: unknown): string =>
  value == null || value === '' ? '' : String(value);

const allohaIframe = (value: unknown): string => {
  if (typeof value !== 'string') return '';
  const url = value.trim();
  if (/^https?:\/\//i.test(url) || url.startsWith('//')) return url;
  return '';
};

const allohaList = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.map((item) => allohaText(item)).filter(Boolean);
  }
  if (typeof value !== 'string') return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

const ALLOHA_TYPES: Record<string, string> = {
  movie: 'FILM',
  film: 'FILM',
  serial: 'TV_SERIES',
  series: 'TV_SERIES',
  'tv-series': 'TV_SERIES',
  anime: 'FILM',
  'anime-serial': 'TV_SERIES',
  cartoon: 'FILM',
  'cartoon-serial': 'TV_SERIES',
  'tv-show': 'TV_SHOW',
  show: 'TV_SHOW',
};

export const getAllohaFilmEntity = (filmRaw: IFilmRaw): IFilmEntity | null => {
  const token = typeof filmRaw.token === 'string' ? filmRaw.token.trim() : '';
  if (!token) return null;

  const name =
    allohaText(filmRaw.name) ||
    allohaText(filmRaw.original_name) ||
    allohaText(filmRaw.alternative_name);
  const poster = typeof filmRaw.poster === 'string' ? filmRaw.poster : '';
  const iframe = allohaIframe(filmRaw.iframe);
  const kp = Number(filmRaw.ids?.kp);
  const hasKp = Number.isInteger(kp) && kp > 0;
  const ratingKp = filmRaw.rating?.kp;
  const slug =
    typeof filmRaw.category?.slug === 'string' ? filmRaw.category.slug : '';

  return {
    ...getFilmEntity({
      name,
      year: filmRaw.year ? String(filmRaw.year) : '',
      posterUrl: poster,
      rating: typeof ratingKp === 'number' ? ratingKp : undefined,
      type: ALLOHA_TYPES[slug] || '',
      countries: allohaList(filmRaw.country),
      genres: allohaList(filmRaw.genre),
    }),
    id: token,
    kinopoiskId: hasKp ? kp : undefined,
    allohaToken: token,
    source: 'alloha',
    iframe: iframe || undefined,
  };
};

export const getFilmType = (type: string) => {
  switch (type) {
    case 'FILM':
      return FILM_TYPE_LABELS.FILM;
    case 'TV_SERIES':
      return FILM_TYPE_LABELS.TV_SERIES;
    case 'MINI_SERIES':
      return FILM_TYPE_LABELS.MINI_SERIES;
    case 'TV_SHOW':
      return FILM_TYPE_LABELS.TV_SHOW;
    default:
      return type;
  }
};

export const getFilmEntity = (filmRaw: IFilmRaw): IFilmEntity => {
  return {
    id: Number(filmRaw.kinopoiskId || filmRaw.filmId || filmRaw.id),
    name: getName(filmRaw),
    description: filmRaw?.description || 'Без описания',
    year: filmRaw?.year || '',
    image: filmRaw.posterUrlPreview || filmRaw.posterUrl || filmRaw.image || '',
    rating: getFilmRating(filmRaw),
    countries: getCountryList(filmRaw?.countries || []),
    genres: getGenreList(filmRaw?.genres || []),
    type: getFilmType(filmRaw.type),
    startYear: filmRaw.startYear,
    endYear: filmRaw.endYear,
  };
};

export const getFilmEntityList = (filmRawList: Record<string, any>[]) => {
  return filmRawList.map(getFilmEntity);
};

export const filterGenres = (list: any[]) => {
  if (!list.length) return [];

  return list.filter((x) => !GENRES_IGNORED.includes(x.genre));
};

export const initUserData = (data: IFirebaseUserData | null | undefined) => {
  const defaultData: IInitializedUserData = {
    name: '',
    email: '',
    apiKey: '',
    favorites: [],
    watchingList: [],
    watchList: [],
    waitingList: [],
    lastSearchList: [],
    lastViews: [],
    skippedIds: new Set<number>(),
  };

  if (!data) {
    return defaultData;
  }

  const sortByTime = (a: IFilmEntity, b: IFilmEntity) =>
    (b?.sortTime ?? 0) - (a?.sortTime ?? 0);

  const favorites = getFilmEntityList(data.favorites ?? []).sort(sortByTime);
  const watchingList = getFilmEntityList(data.watchingList ?? []).sort(
    sortByTime
  );
  const watchList = getFilmEntityList(data.watchList ?? []).sort(sortByTime);
  const waitingList = getFilmEntityList(data.waitingList ?? []).sort(
    sortByTime
  );
  const lastViews = getFilmEntityList(data.lastViews ?? [])
    .sort(sortByTime)
    .slice(0, 40);

  return {
    name: data.name || defaultData.name,
    email: data.email || defaultData.email,
    // TODO потом удалить api_key
    apiKey: data.api_key || data.apiKey || defaultData.apiKey,
    favorites,
    watchingList,
    watchList,
    waitingList,
    lastSearchList: (data.lastSearchList || []).slice(0, 30),
    lastViews,
    skippedIds: new Set<number>((data.skippedIds || []).slice(0, 100)),
  };
};

export async function safeUpdateUserData(
  fieldName: string,
  updateCallback: Function
) {
  const authStore = useAuthStore();

  if (!authStore.firebaseUser) {
    console.warn('Необходимо авторизоваться');
    return null;
  }

  try {
    const userData = await userDataGet(authStore.firebaseUser.uid);
    const currentData = userData?.[fieldName] || [];
    const updatedData = updateCallback(currentData);

    const docRef = doc(firebaseDb, 'users', authStore.firebaseUser.uid);
    await updateDoc(docRef, { [fieldName]: updatedData });

    return updatedData;
  } catch (e) {
    console.error(`Ошибка обновления ${fieldName}:`, e);
    throw e;
  }
}
