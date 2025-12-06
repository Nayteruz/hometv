export const getFilmPageTitle = (filmInfo) => {
  const name = filmInfo?.name || '';
  const year = filmInfo?.year || '';
  return `${name} ${year ? `(${year})` : ''}`;
};

export const getFilmRating = (filmInfo) => {
  const rating =
    filmInfo?.rating || filmInfo?.ratingKinopoisk || filmInfo?.ratingImdb;

  if (typeof rating === 'number') {
    return rating.toFixed(1);
  }

  return '∞';
};

export const hasId = (list, id) => {
  if (!Array.isArray(list) || list.length === 0 || !id) {
    return false;
  }

  const listMap = new Map(
    list.map((film) => [
      Number(film?.kinopoiskId || film?.filmId || film?.id),
      film,
    ])
  );

  return listMap.has(Number(id));
};
