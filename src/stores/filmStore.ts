import { defineStore } from 'pinia';
import { firebaseDb } from '@/plugins';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import {
  userDataGet,
  userDataSet,
  translateErrorCode,
  ignore_genre,
} from '@/plugins/firebaseActions';
import { getFilters } from '@/components/api';
import { removeData, addFirstAndExcludeCopy, getFilmEntityList } from './utils';
import type { IFilmEntity } from '@/types';
import type {
  IAuthData,
  ICreateAuthData,
  IEditAuthData,
  IFilmStoreState,
  ISearchListItem,
} from './types';
import type { FirebaseError } from 'firebase/app';

export const useFilmStore = defineStore('filmStore', {
  state: (): IFilmStoreState => ({
    user: null,
    apiKey: '404dc583-7efc-4c93-8f21-a782f977b9e7',
    apiAloha: 'e7b61f129f4a392ac4bf6726a9dd6a',
    apiHDBV: '8a22f8e7684404c3815e3ffa940f00a0',
    auth: getAuth(),
    errorMessage: '',
    pageNum: 1,
    limit: 20,
    genreIdStore: null,
    genreListStore: [],
    searchQueryStore: '',
    filters: { genres: [] },
    filmPageId: 0,
    favorites: [],
    currentFocusIndex: -1,
    films: [],
    focusIds: {},
    isShowLastSearchList: false,
    lastSearchList: [],
    lastViews: [],
    watchingList: [],
    watchList: [],
    waitingList: [],
    skippedIds: new Set(),
  }),
  getters: {
    filterGenres() {
      if (!this.genreListStore.length) return [];
      this.genreListStore = this.genreListStore.filter((x) => {
        if (ignore_genre.indexOf(x.genre) === -1) {
          return x;
        }
      });
    },
  },
  actions: {
    setGenreId(genreId: number | null) {
      this.genreIdStore = genreId;
    },
    setFilmPageId(id: number) {
      this.filmPageId = id;
    },
    setShowLastSearchList(value: boolean) {
      this.isShowLastSearchList = value;
    },
    async getGenreList() {
      if (localStorage.getItem('genres')) {
        this.genreListStore = JSON.parse(localStorage.getItem('genres') || '');
        return this.genreListStore;
      } else {
        try {
          const data = await getFilters();
          this.filters = data;
          this.genreListStore = data.genres;
          this.filterGenres;
          localStorage.setItem('genres', JSON.stringify(this.genreListStore));

          return this.genreListStore;
        } catch (error) {
          console.error('Error load genres', error);
        }
      }
    },

    async addFavorite(itemFilm: IFilmEntity) {
      if (!this.user || !itemFilm) {
        return;
      }

      try {
        const updatedFavorites = await this.safeUpdateUserData(
          'favorites',
          (currentFavorites: IFilmEntity[]) =>
            addFirstAndExcludeCopy(currentFavorites, itemFilm)
        );

        if (updatedFavorites) {
          this.favorites = getFilmEntityList(updatedFavorites || []);
        }
      } catch (e) {
        console.warn('Ошибка добавления в избранное: ' + e);
      }
    },
    async removeFavorite(filmId: number) {
      if (!this.user || !filmId) {
        return;
      }

      try {
        const updatedFavorites = await this.safeUpdateUserData(
          'favorites',
          (currentFavorites: IFilmEntity[]) =>
            removeData(currentFavorites, filmId)
        );

        if (updatedFavorites) {
          this.favorites = getFilmEntityList(updatedFavorites || []);
        }
      } catch (e) {
        console.warn('Ошибка удаления из избранного: ' + e);
      }
    },

    async addLastSearchList(searchValue: string) {
      if (!searchValue || !this.user) {
        return;
      }

      try {
        const updatedSearchList = await this.safeUpdateUserData(
          'lastSearchList',
          (currentSearchList: ISearchListItem[]) => {
            const filtered = currentSearchList.filter(
              (item) => item.value.toLowerCase() !== searchValue.toLowerCase()
            );

            return [{ id: Date.now(), value: searchValue }, ...filtered].slice(
              0,
              30
            );
          }
        );

        if (updatedSearchList) {
          this.lastSearchList = updatedSearchList;
        }
      } catch (e) {
        console.error('Ошибка добавления в поиск: ' + e);
      }
    },

    async addLastViews(itemFilm?: IFilmEntity) {
      if (!itemFilm || !this.user) {
        return;
      }

      try {
        const updatedLastViews = await this.safeUpdateUserData(
          'lastViews',
          (currentLastViews: IFilmEntity[]) =>
            addFirstAndExcludeCopy(currentLastViews, itemFilm)
        );

        if (updatedLastViews) {
          this.lastViews = getFilmEntityList(updatedLastViews.slice(0, 40));
        }
      } catch (e) {
        console.error('Ошибка добавления в последнее просмотренное: ' + e);
      }
    },

    async addSkip(itemId: number) {
      if (!this.user || !itemId) {
        return;
      }

      try {
        const updatedSkippedIds = await this.safeUpdateUserData(
          'skippedIds',
          (currentSkippedIds: number[]) => {
            const skippedSet = new Set(currentSkippedIds);
            skippedSet.add(itemId);
            return Array.from(skippedSet).slice(0, 100);
          }
        );

        if (updatedSkippedIds) {
          this.skippedIds = new Set(updatedSkippedIds);
        }
      } catch (e) {
        console.error('Ошибка добавления в непросматриваемое: ' + e);
      }
    },

    async removeSkip(itemId: number) {
      if (!this.user || !itemId) {
        return;
      }

      try {
        const updatedSkippedIds = await this.safeUpdateUserData(
          'skippedIds',
          (currentSkippedIds: number[]) => {
            const skippedSet = new Set(currentSkippedIds);
            skippedSet.delete(itemId);
            return Array.from(skippedSet);
          }
        );

        if (updatedSkippedIds) {
          this.skippedIds = new Set(updatedSkippedIds);
        }
      } catch (e) {
        console.error('Ошибка удаления из непросматриваемого: ' + e);
      }
    },

    async addWatching(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) {
        return;
      }

      try {
        const updatedWatching = await this.safeUpdateUserData(
          'watchingList',
          (currentWatching: IFilmEntity[]) =>
            addFirstAndExcludeCopy(currentWatching, itemFilm)
        );

        if (updatedWatching) {
          this.watchingList = updatedWatching;
        }
      } catch (e) {
        console.error('Ошибка добавления в смотрю сейчас: ' + e);
      }
    },

    async removeWatching(filmId: number) {
      if (!this.user || !filmId) {
        return;
      }

      try {
        const updatedWatching = await this.safeUpdateUserData(
          'watchingList',
          (currentWatching: IFilmEntity[]) =>
            removeData(currentWatching, filmId)
        );

        if (updatedWatching) {
          this.watchingList = getFilmEntityList(updatedWatching || []);
        }
      } catch (e) {
        console.warn('Ошибка удаления из смотрю сейчас: ' + e);
      }
    },

    async addWatchList(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) {
        return;
      }

      try {
        const updatedWatchList = await this.safeUpdateUserData(
          'watchList',
          (currentWatchList: IFilmEntity[]) =>
            addFirstAndExcludeCopy(currentWatchList, itemFilm)
        );

        if (updatedWatchList) {
          this.watchList = updatedWatchList;
        }
      } catch (e) {
        console.error('Ошибка добавления в буду смотреть: ' + e);
      }
    },

    async removeWatchList(filmId: number) {
      if (!this.user || !filmId) {
        return;
      }

      try {
        const updatedWatchList = await this.safeUpdateUserData(
          'watchList',
          (currentWatching: IFilmEntity[]) =>
            removeData(currentWatching, filmId)
        );

        if (updatedWatchList) {
          this.watchList = getFilmEntityList(updatedWatchList || []);
        }
      } catch (e) {
        console.warn('Ошибка удаления из буду смотреть: ' + e);
      }
    },

    async addWaitList(itemFilm: IFilmEntity) {
      if (!itemFilm || !this.user) {
        return;
      }

      try {
        const updatedWaitList = await this.safeUpdateUserData(
          'waitingList',
          (currentWatchList: IFilmEntity[]) =>
            addFirstAndExcludeCopy(currentWatchList, itemFilm)
        );

        if (updatedWaitList) {
          this.waitingList = updatedWaitList;
        }
      } catch (e) {
        console.error('Ошибка добавления в жду продолжения: ' + e);
      }
    },

    async removeWaitList(filmId: number) {
      if (!this.user || !filmId) {
        return;
      }

      try {
        const updatedWaitList = await this.safeUpdateUserData(
          'waitingList',
          (currentWatching: IFilmEntity[]) =>
            removeData(currentWatching, filmId)
        );

        if (updatedWaitList) {
          this.waitingList = getFilmEntityList(updatedWaitList || []);
        }
      } catch (e) {
        console.warn('Ошибка удаления из жду продолжения: ' + e);
      }
    },

    isSkipped(itemId: number) {
      return this.skippedIds.has(itemId);
    },

    async authWithEmailAndPassword(data: IAuthData) {
      await signInWithEmailAndPassword(this.auth, data.email, data.password)
        .then(() => {
          this.getUserData();
        })
        .catch((error) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },
    async createAuthWithEmailAndPassword(data: ICreateAuthData) {
      await createUserWithEmailAndPassword(this.auth, data.email, data.password)
        .then(async (userCredential) => {
          this.user = await userCredential.user;
          await userDataSet(data, this.user!.uid);
          await this.getUserData();
        })
        .catch((error) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },

    async editAuthNameOrApiKey(data: IEditAuthData) {
      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          await updateDoc(docRef, {
            name: data.userName || '',
            api_key: data.apiKey || this.apiKey,
          });
        }
        await this.getUserData();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    async authLogout() {
      signOut(this.auth)
        .then(async () => {
          this.removeUserData();
        })
        .catch((error) => {
          alert('Ошибка logout: ' + error);
        });
    },
    async authChange(callback?: () => void) {
      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          this.user = user;
          this.getUserData(callback);
        } else {
          this.removeUserData(callback);
        }
      });
    },
    async getUserData(callback?: () => void) {
      if (!this.user) {
        return;
      }

      let data = await userDataGet(this.user!.uid);
      this.user.name = data?.name || '';
      this.user.email = data?.email ?? '';

      this.favorites = getFilmEntityList(data?.favorites ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );

      this.watchingList = getFilmEntityList(data?.watchingList ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );

      this.watchList = getFilmEntityList(data?.watchList ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );

      this.waitingList = getFilmEntityList(data?.waitingList ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );

      this.lastSearchList = (data?.lastSearchList || []).slice(0, 30);
      this.lastViews = getFilmEntityList(data?.lastViews ?? [])
        .slice(0, 40)
        .sort((a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0));

      this.skippedIds = new Set((data?.skippedIds ?? []).slice(0, 100));

      if (data?.api_key) {
        this.apiKey = data.api_key;
      }

      typeof callback === 'function' ? callback() : '';
    },
    removeUserData(callback?: () => void) {
      this.user = null;
      this.favorites = [];
      typeof callback === 'function' ? callback() : '';
    },
    searchQueryWithGenre() {
      let qr: { q?: string; genres?: number } = {};
      if (this.searchQueryStore) {
        qr.q = this.searchQueryStore;
      }
      if (this.genreIdStore) {
        qr.genres = this.genreIdStore;
      }
      return qr;
    },
    setCurrentFocus(index: number) {
      this.currentFocusIndex = index;
    },
    // setFocusIds(href) {
    //   this.focusIds = {
    //     ...this.focusIds,
    //     [href]: this.currentFocusIndex,
    //   };
    // },
    setMountedCurrentFocus(href: string) {
      this.setCurrentFocus(this.focusIds[href] || 0);
    },
    async searchPageTitle() {
      const genres = this.genreListStore || [];

      let genre_name = this.genreIdStore
        ? genres.filter(
            (genre) => Number(genre.id) === Number(this.genreIdStore || 0)
          )?.[0]?.genre
        : null;
      if (this.searchQueryStore && this.genreIdStore) {
        return `Поиск по слову "${this.searchQueryStore}", жанр "${genre_name}"`;
      } else if (this.searchQueryStore && !this.genreIdStore) {
        return `Поиск по слову "${this.searchQueryStore}"`;
      } else if (this.genreIdStore && !this.searchQueryStore) {
        return `Поиск по жанру "${genre_name}"`;
      } else {
        return 'Ничего не указано для поиска';
      }
    },
    async safeUpdateUserData(fieldName: string, updateCallback: Function) {
      if (!this.user) {
        console.warn('Необходимо авторизоваться');
        return null;
      }

      try {
        const userData = await userDataGet(this.user.uid);
        const currentData = userData?.[fieldName] || [];

        const updatedData = updateCallback(currentData);

        const docRef = doc(firebaseDb, 'users', this.user.uid);
        await updateDoc(docRef, { [fieldName]: updatedData });

        return updatedData;
      } catch (e) {
        console.error(`Ошибка обновления ${fieldName}:`, e);
        throw e;
      }
    },
  },
});
