import { GENRES_IGNORED } from '@/plugins/firebaseActions';
import type { IFilmEntity, IFilmRaw, IFilmRawList } from '@/types';
import type { IFirebaseUserData, IInitializedUserData } from './types';

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

export const getFilmType = (type: string) => {
  switch (type) {
    case 'FILM':
      return 'Фильм';
    case 'TV_SERIES':
      return 'Сериал';
    case 'MINI_SERIES':
      return 'Мини-сериал';
    case 'TV_SHOW':
      return 'ТВ-шоу';
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
