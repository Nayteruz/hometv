import { defineStore } from 'pinia';
import { removeData, addFirstAndExcludeCopy, getFilmEntityList } from './utils';
import { useAuthStore } from './authStore';
import { safeUpdateUserData } from './utils';
import type { IFilmEntity } from '@/types';
import type {
  ISearchListItem,
  IInitializedUserData,
  AppUser,
  IUserListsStoreState,
} from './types';

export const useUserListsStore = defineStore('userListsStore', {
  state: (): IUserListsStoreState => ({
    favorites: [],
    lastSearchList: [],
    lastViews: [],
    watchingList: [],
    watchList: [],
    waitingList: [],
    skippedIds: new Set(),
  }),

  getters: {
    user(): AppUser | null {
      return useAuthStore().user as AppUser | null;
    },
  },

  actions: {
    hydrate(data: IInitializedUserData) {
      this.favorites = data.favorites;
      this.watchingList = data.watchingList;
      this.watchList = data.watchList;
      this.waitingList = data.waitingList;
      this.lastSearchList = data.lastSearchList;
      this.lastViews = data.lastViews;
      this.skippedIds = data.skippedIds;
    },

    reset() {
      this.favorites = [];
      this.watchingList = [];
      this.watchList = [];
      this.waitingList = [];
      this.lastSearchList = [];
      this.lastViews = [];
      this.skippedIds = new Set();
    },

    // --- Favorites ---
    async addFavorite(itemFilm: IFilmEntity) {
      if (!this.user || !itemFilm) return;
      try {
        const updated = await safeUpdateUserData(
          'favorites',
          (cur: IFilmEntity[]) => addFirstAndExcludeCopy(cur, itemFilm)
        );
        if (updated) this.favorites = getFilmEntityList(updated);
      } catch (e) {
        console.warn('Ошибка добавления в избранное: ' + e);
      }
    },

    async removeFavorite(filmId: number) {
      if (!this.user || !filmId) return;
      try {
        const updated = await safeUpdateUserData(
          'favorites',
          (cur: IFilmEntity[]) => removeData(cur, filmId)
        );
        if (updated) this.favorites = getFilmEntityList(updated);
      } catch (e) {
        console.warn('Ошибка удаления из избранного: ' + e);
      }
    },

    // --- Last Search ---
    async addLastSearchList(searchValue: string) {
      if (!searchValue || !this.user) return;
      try {
        const updated = await safeUpdateUserData(
          'lastSearchList',
          (cur: ISearchListItem[]) => {
            const filtered = cur.filter(
              (item) => item.value.toLowerCase() !== searchValue.toLowerCase()
            );
            return [{ id: Date.now(), value: searchValue }, ...filtered].slice(
              0,
              30
            );
          }
        );
        if (updated) this.lastSearchList = updated;
      } catch (e) {
        console.error('Ошибка добавления в поиск: ' + e);
      }
    },

    // --- Last Views ---
    async addLastViews(itemFilm?: IFilmEntity) {
      if (!itemFilm || !this.user) return;
      try {
        const updated = await safeUpdateUserData(
          'lastViews',
          (cur: IFilmEntity[]) => addFirstAndExcludeCopy(cur, itemFilm)
        );
        if (updated) this.lastViews = getFilmEntityList(updated.slice(0, 40));
      } catch (e) {
        console.error('Ошибка добавления в последнее просмотренное: ' + e);
      }
    },

    // --- Watching ---
    async addWatching(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) return;
      try {
        const updated = await safeUpdateUserData(
          'watchingList',
          (cur: IFilmEntity[]) => addFirstAndExcludeCopy(cur, itemFilm)
        );
        if (updated) this.watchingList = updated;
      } catch (e) {
        console.error('Ошибка добавления в смотрю сейчас: ' + e);
      }
    },

    async removeWatching(filmId: number) {
      if (!this.user || !filmId) return;
      try {
        const updated = await safeUpdateUserData(
          'watchingList',
          (cur: IFilmEntity[]) => removeData(cur, filmId)
        );
        if (updated) this.watchingList = getFilmEntityList(updated);
      } catch (e) {
        console.warn('Ошибка удаления из смотрю сейчас: ' + e);
      }
    },

    // --- WatchList ---
    async addWatchList(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) return;
      try {
        const updated = await safeUpdateUserData(
          'watchList',
          (cur: IFilmEntity[]) => addFirstAndExcludeCopy(cur, itemFilm)
        );
        if (updated) this.watchList = updated;
      } catch (e) {
        console.error('Ошибка добавления в буду смотреть: ' + e);
      }
    },

    async removeWatchList(filmId: number) {
      if (!this.user || !filmId) return;
      try {
        const updated = await safeUpdateUserData(
          'watchList',
          (cur: IFilmEntity[]) => removeData(cur, filmId)
        );
        if (updated) this.watchList = getFilmEntityList(updated);
      } catch (e) {
        console.warn('Ошибка удаления из буду смотреть: ' + e);
      }
    },

    // --- WaitingList ---
    async addWaitList(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) return;
      try {
        const updated = await safeUpdateUserData(
          'waitingList',
          (cur: IFilmEntity[]) => addFirstAndExcludeCopy(cur, itemFilm)
        );
        if (updated) this.waitingList = updated;
      } catch (e) {
        console.error('Ошибка добавления в жду продолжения: ' + e);
      }
    },

    async removeWaitList(filmId: number) {
      if (!this.user || !filmId) return;
      try {
        const updated = await safeUpdateUserData(
          'waitingList',
          (cur: IFilmEntity[]) => removeData(cur, filmId)
        );
        if (updated) this.waitingList = getFilmEntityList(updated);
      } catch (e) {
        console.warn('Ошибка удаления из жду продолжения: ' + e);
      }
    },

    // --- Skipped ---
    async addSkip(itemId: number) {
      if (!this.user || !itemId) return;
      try {
        const updated = await safeUpdateUserData(
          'skippedIds',
          (cur: number[]) => {
            const s = new Set(cur);
            s.add(itemId);
            return Array.from(s).slice(0, 100);
          }
        );
        if (updated) this.skippedIds = new Set(updated);
      } catch (e) {
        console.error('Ошибка добавления в непросматриваемое: ' + e);
      }
    },

    async removeSkip(itemId: number) {
      if (!this.user || !itemId) return;
      try {
        const updated = await safeUpdateUserData(
          'skippedIds',
          (cur: number[]) => {
            const s = new Set(cur);
            s.delete(itemId);
            return Array.from(s);
          }
        );
        if (updated) this.skippedIds = new Set(updated);
      } catch (e) {
        console.error('Ошибка удаления из непросматриваемого: ' + e);
      }
    },

    isSkipped(itemId: number) {
      return this.skippedIds.has(itemId);
    },
  },
});
