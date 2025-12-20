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
  genreId: number | null;
  genres: Genre[];
  searchInputText: string;
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

export interface IFirebaseUserData {
  name?: string;
  email?: string;
  api_key?: string;
  apiKey?: string;
  favorites?: any[];
  watchingList?: any[];
  watchList?: any[];
  waitingList?: any[];
  lastSearchList?: Array<{ id: number; value: string }>;
  lastViews?: any[];
  skippedIds?: number[];
}

export interface IInitializedUserData {
  name: string;
  email: string;
  apiKey: string;
  favorites: IFilmEntity[];
  watchingList: IFilmEntity[];
  watchList: IFilmEntity[];
  waitingList: IFilmEntity[];
  lastSearchList: Array<{ id: number; value: string }>;
  lastViews: IFilmEntity[];
  skippedIds: Set<number>;
}
