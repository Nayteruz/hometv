import { FILM_TYPE_LABELS } from '@/stores/const';
import type { IFilmEntity, IPlayerLabel } from '@/types';
import { PLAYER_LABELS } from './const';

export const getFilmPageTitle = (filmInfo?: IFilmEntity): string => {
  const name = filmInfo?.name || '';
  const year = filmInfo?.year || '';
  const startYear = filmInfo?.startYear || '';
  const endYear = filmInfo?.endYear || '...';

  if (filmInfo?.type === FILM_TYPE_LABELS.TV_SERIES) {
    return `${name} ${startYear ? `(сериал ${startYear} - ${endYear})` : ''}`;
  }

  return `${name} ${year ? `(${year})` : ''}`;
};

export const getFilmRating = (
  filmInfo: IFilmEntity & { ratingKinopoisk?: number; ratingImdb?: number },
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
      ],
    ),
  );

  return listMap.has(Number(id));
};

export const extractIframeSrc = (
  name: IPlayerLabel,
  data: any,
): string | null => {
  switch (name) {
    case PLAYER_LABELS.Bugall:
      return data.status === 'success' && data.data?.iframe
        ? data.data.iframe
        : null;
    case PLAYER_LABELS.Coll:
      return data.results?.[0]?.iframe_url || null;
    case PLAYER_LABELS.Kodi:
      return data.results?.[0]?.link || null;
    case PLAYER_LABELS.HDVB:
      return data[0]?.iframe_url || null;
    default:
      return null;
  }
};
