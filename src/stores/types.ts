import type { IFilmEntity } from '@/types';
import { getAuth, type User as FirebaseUser } from 'firebase/auth';

interface AppUser extends FirebaseUser {
  name?: string;
  email: string | null;
}

export interface Genre {
  id: number;
  genre: string;
}

interface FocusIds {
  [href: string]: number;
}

export interface ISearchListItem {
  id: number;
  value: string;
}

export interface IFiltersData {
  genres: Genre[];
}

export interface IAuthData {
  email: string;
  password: string;
}

export interface ICreateAuthData extends IAuthData {
  userName?: string;
  apiKey?: string;
}

export interface IEditAuthData {
  userName: string;
  apiKey: string;
}

export interface IFilmStoreState {
  user: AppUser | null;
  apiKey: string;
  apiAloha: string;
  apiHDBV: string;
  auth: ReturnType<typeof getAuth>;
  errorMessage: string;
  pageNum: number;
  limit: number;
  genreIdStore: number | null;
  genreListStore: Genre[];
  searchQueryStore: string;
  filters: IFiltersData;
  filmPageId: number;
  favorites: IFilmEntity[];
  currentFocusIndex: number;
  films: IFilmEntity[];
  focusIds: FocusIds;
  isShowLastSearchList: boolean;
  lastSearchList: ISearchListItem[];
  lastViews: IFilmEntity[];
  watchingList: IFilmEntity[];
  watchList: IFilmEntity[];
  waitingList: IFilmEntity[];
  skippedIds: Set<number>;
}
