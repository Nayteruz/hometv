export const getFilmPageTitle = (filmInfo) => {
  const name =
    filmInfo?.nameRu ||
    filmInfo?.nameEn ||
    filmInfo?.nameOriginal ||
    'Без названия';
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
