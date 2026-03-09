import type { IFilmEntity } from '@/types';
import { getAuth, type User as FirebaseUser } from 'firebase/auth';

export interface AppUser extends FirebaseUser {
  name?: string;
  email: string | null;
}

export interface IAuthStoreState {
  user: AppUser | null;
  auth: ReturnType<typeof getAuth>;
  errorMessage: string;
  apiKey: string;
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
  apiKey: string;
  apiAloha: string;
  apiHDBV: string;
  pageNum: number;
  limit: number;
  genreId: number | null;
  genres: Genre[];
  searchInputText: string;
  filmPageId: number;
  currentFocusIndex: number;
  films: IFilmEntity[];
  focusIds: FocusIds;
  isShowLastSearchList: boolean;
}

export interface IFirebaseUserData {
  name?: string;
  email?: string;
  api_key?: string;
  apiKey?: string;
  favorites?: IFilmEntity[];
  watchingList?: IFilmEntity[];
  watchList?: IFilmEntity[];
  waitingList?: IFilmEntity[];
  lastSearchList?: Array<{ id: number; value: string }>;
  lastViews?: IFilmEntity[];
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

export interface IUserListsStoreState {
  favorites: IFilmEntity[];
  lastSearchList: ISearchListItem[];
  lastViews: IFilmEntity[];
  watchingList: IFilmEntity[];
  watchList: IFilmEntity[];
  waitingList: IFilmEntity[];
  skippedIds: Set<number>;
}
