export const FILM_TYPE = {
  FILM: 'FILM',
  TV_SERIES: 'TV_SERIES',
  MINI_SERIES: 'MINI_SERIES',
  TV_SHOW: 'TV_SHOW',
} as const;

export const FILM_TYPE_LABELS = {
  [FILM_TYPE.FILM]: 'Фильм',
  [FILM_TYPE.TV_SERIES]: 'Сериал',
  [FILM_TYPE.MINI_SERIES]: 'Мини-сериал',
  [FILM_TYPE.TV_SHOW]: 'ТВ-шоу',
} as const;
