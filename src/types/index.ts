import type { PLAYER_LABELS } from '@/components/const';

export interface IFilmEntity {
  id: number;
  name: string;
  description: string;
  year: string;
  image: string;
  rating: string | number;
  countries: string[];
  genres: string[];
  type: string;
  kinopoiskId?: number;
  filmId?: number;
  sortTime?: number;
  startYear?: number;
  endYear?: number | null;
}

export type IFilmRaw = Record<string, any>;

export type IFilmRawList = IFilmRaw[];

export type EventsEmitter = 'isLoading' | 'clickPage';

export type IPlayerKey = keyof typeof PLAYER_LABELS;
export type IPlayerLabel = (typeof PLAYER_LABELS)[IPlayerKey];

export interface IPlayerData {
  name: IPlayerLabel;
  iframeSrc: string | null;
  loading: boolean;
  loaded: boolean;
  error: boolean;
}
