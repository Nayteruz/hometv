import type { IFilmEntity } from '@/types';

export const getFilmPageTitle = (filmInfo?: IFilmEntity): string => {
  const name = filmInfo?.name || '';
  const year = filmInfo?.year || '';
  return `${name} ${year ? `(${year})` : ''}`;
};

export const getFilmRating = (
  filmInfo: IFilmEntity & { ratingKinopoisk?: number; ratingImdb?: number }
) => {
  const rating =
    filmInfo?.rating || filmInfo?.ratingKinopoisk || filmInfo?.ratingImdb;

  if (typeof rating === 'number') {
    return rating?.toFixed(1);
  }

  return '∞';
};

export const hasId = (list: IFilmEntity[], id: number) => {
  if (!Array.isArray(list) || list.length === 0 || !id) {
    return false;
  }

  const listMap = new Map(
    list.map(
      (film: IFilmEntity & { kinopoiskId?: number; filmId?: number }) => [
        Number(film?.kinopoiskId || film?.filmId || film?.id),
        film,
      ]
    )
  );

  return listMap.has(Number(id));
};
