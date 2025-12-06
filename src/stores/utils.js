export const addDataLastAndExcludeCopy = (list, item) => {
  const filmId = Number(item?.kinopoiskId || item?.filmId || item?.id);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const excludedList = list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== filmId
  );

  return [...excludedList, itemWithTime];
};

export const addDataFirst = (list, item) => {
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

export const addFirstAndExcludeCopy = (list, item) => {
  const filmId = Number(item?.kinopoiskId || item?.filmId || item?.id);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const excludedList = list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== filmId
  );

  return [itemWithTime, ...excludedList];
};

export const removeData = (list, itemId) => {
  const id = Number(itemId);

  return list.filter(
    (film) => Number(film?.kinopoiskId || film?.filmId || film?.id) !== id
  );
};

const getCountryList = (countries) => {
  return countries.map((country) => country?.country || country || '');
};

const getName = (filmRaw) => {
  return (
    filmRaw.nameRu ||
    filmRaw.nameEn ||
    filmRaw.nameOriginal ||
    filmRaw?.name ||
    'Без названия'
  );
};

const getGenreList = (genres) => {
  return genres.map((genre) => genre?.genre || genre || '');
};

export const getFilmRating = (filmRaw) => {
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

export const getFilmType = (filmRaw) => {
  switch (filmRaw.type) {
    case 'FILM':
      return 'Фильм';
    case 'TV_SERIES':
      return 'Сериал';
    case 'MINI_SERIES':
      return 'Мини-сериал';
    case 'TV_SHOW':
      return 'ТВ-шоу';
    default:
      return filmRaw.type;
  }
};

export const getFilmEntity = (filmRaw) => {
  return {
    id: Number(filmRaw.kinopoiskId || filmRaw.filmId || filmRaw.id),
    name: getName(filmRaw),
    description: filmRaw?.description || 'Без описания',
    year: filmRaw?.year || '',
    image: filmRaw.posterUrlPreview || filmRaw.posterUrl || filmRaw.image || '',
    rating: getFilmRating(filmRaw),
    countries: getCountryList(filmRaw?.countries || []),
    genres: getGenreList(filmRaw?.genres || []),
    type: getFilmType(filmRaw),
  };
};

export const getFilmEntityList = (filmRawList) => {
  return filmRawList.map(getFilmEntity);
};
