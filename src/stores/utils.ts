import type { IFilmEntity, IFilmRaw, IFilmRawList } from '@/types';

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

export const removeData = (list: IFilmRawList, itemId: string) => {
  const id = Number(itemId);

  return list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== id
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
