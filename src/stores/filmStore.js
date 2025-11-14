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

export const useFilmStore = defineStore('filmStore', {
  state: () => ({
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
    filters: null,
    filmPageId: 0,
    favorites: [],
    currentFocusIndex: -1,
    films: [],
    focusIds: {},
    isShowLastSearchList: false,
    lastSearchList: [],
    lastViews: [],
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
    favoriteList() {
      return this.favorites;
    },
  },
  actions: {
    setGenreId(genreId) {
      this.genreIdStore = genreId;
    },
    setFilmPageId(value) {
      this.filmPageId = value;
    },
    setShowLastSearchList(value) {
      this.isShowLastSearchList = value;
    },
    async getGenreList() {
      if (localStorage.getItem('genres')) {
        this.genreListStore = JSON.parse(localStorage.getItem('genres'));
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
    checkIsFavorite(filmId) {
      const favoriteMap = new Map(
        this.favorites.map((film) => [
          Number(film?.kinopoiskId ?? film?.filmId),
          film,
        ])
      );

      return favoriteMap.has(filmId);
    },
    async addFavorite(itemFilm) {
      if (!this.user || !itemFilm) {
        return;
      }

      try {
        const updatedFavorites = await this.safeUpdateUserData(
          'favorites',
          (currentFavorites) => {
            const filmId = Number(itemFilm?.kinopoiskId ?? itemFilm?.filmId);
            const itemWithTime = { ...itemFilm, sortTime: Date.now() };

            const alreadyExists = currentFavorites.some(
              (film) => Number(film?.kinopoiskId ?? film?.filmId) === filmId
            );

            if (alreadyExists) {
              return currentFavorites;
            }

            return [...currentFavorites, itemWithTime];
          }
        );

        if (updatedFavorites) {
          this.favorites = updatedFavorites;
        }
      } catch (e) {
        console.warn('Ошибка добавления в избранное: ' + e);
      }
    },
    async removeFavorite(filmId) {
      if (!this.user || !filmId) {
        return;
      }

      try {
        const updatedFavorites = await this.safeUpdateUserData(
          'favorites',
          (currentFavorites) => {
            const numericFilmId = Number(filmId);

            return currentFavorites.filter(
              (film) =>
                Number(film?.kinopoiskId ?? film?.filmId) !== numericFilmId
            );
          }
        );

        if (updatedFavorites) {
          this.favorites = updatedFavorites;
        }
      } catch (e) {
        console.warn('Ошибка удаления из избранного: ' + e);
      }
    },

    async addLastSearchList(searchValue) {
      if (!searchValue || !this.user) {
        return;
      }

      try {
        const updatedSearchList = await this.safeUpdateUserData(
          'lastSearchList',
          (currentSearchList) => {
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

    async addLastViews(itemFilm) {
      if (!itemFilm || !this.user) {
        return;
      }

      try {
        const updatedLastViews = await this.safeUpdateUserData(
          'lastViews',
          (currentLastViews) => {
            const filmId = Number(itemFilm?.kinopoiskId ?? itemFilm?.filmId);
            const itemWithTime = { ...itemFilm, sortTime: Date.now() };

            const filtered = currentLastViews.filter(
              (item) => Number(item?.kinopoiskId ?? item?.filmId) !== filmId
            );

            return [itemWithTime, ...filtered].slice(0, 40);
          }
        );

        if (updatedLastViews) {
          this.lastViews = updatedLastViews;
        }
      } catch (e) {
        console.error('Ошибка добавления в последнее просмотренное: ' + e);
      }
    },

    async addSkip(itemId) {
      if (!this.user || !itemId) {
        return;
      }

      try {
        const updatedSkippedIds = await this.safeUpdateUserData(
          'skippedIds',
          (currentSkippedIds) => {
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

    async removeSkip(itemId) {
      if (!this.user || !itemId) {
        return;
      }

      try {
        const updatedSkippedIds = await this.safeUpdateUserData(
          'skippedIds',
          (currentSkippedIds) => {
            const skippedSet = new Set(currentSkippedIds);
            skippedSet.delete(itemId);
            return Array.from(skippedSet);
          }
        );

        // Обновляем локальное состояние
        if (updatedSkippedIds) {
          this.skippedIds = new Set(updatedSkippedIds);
        }
      } catch (e) {
        console.error('Ошибка удаления из непросматриваемого: ' + e);
      }
    },

    isSkipped(itemId) {
      return this.skippedIds.has(itemId);
    },

    async authWithEmailAndPassword(data) {
      await signInWithEmailAndPassword(this.auth, data.email, data.password)
        .then(() => {
          this.getUserData();
        })
        .catch((error) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },
    async createAuthWithEmailAndPassword(data) {
      await createUserWithEmailAndPassword(this.auth, data.email, data.password)
        .then(async (userCredential) => {
          this.user = await userCredential.user;
          await userDataSet(data, this.user.uid);
          await this.getUserData();
        })
        .catch((error) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },

    async editAuthNameOrApiKey(data) {
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
        this.errorMessage = translateErrorCode(error.code);
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
    async authChange(callback) {
      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          this.user = user;
          this.getUserData(callback);
        } else {
          this.removeUserData(callback);
        }
      });
    },
    async getUserData(callback) {
      let data = await userDataGet(this.user.uid);
      this.user.name = data?.name || '';
      this.user.email = data?.email ?? '';

      this.favorites = (data?.favorites ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );

      this.lastSearchList = (data?.lastSearchList || []).slice(0, 30);
      this.lastViews = (data?.lastViews ?? [])
        .slice(0, 40)
        .sort((a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0));

      this.skippedIds = new Set((data?.skippedIds ?? []).slice(0, 100));

      if (data?.api_key) {
        this.apiKey = data.api_key;
      }

      typeof callback === 'function' ? callback() : '';
    },
    removeUserData(callback) {
      this.user = null;
      this.favorites = [];
      typeof callback === 'function' ? callback() : '';
    },
    searchQueryWithGenre() {
      let qr = {};
      if (this.searchQueryStore) {
        qr.q = this.searchQueryStore;
      }
      if (this.genreIdStore) {
        qr.genres = this.genreIdStore;
      }
      return qr;
    },
    setCurrentFocus(index) {
      this.currentFocusIndex = index;
    },
    setFocusIds(href) {
      this.focusIds = {
        ...this.focusIds,
        [href]: this.currentFocusIndex,
      };
    },
    setMountedCurrentFocus(href) {
      this.setCurrentFocus(this.focusIds[href]);
    },
    async searchPageTitle() {
      let genre_name = this.genreIdStore
        ? await this.genreListStore.filter(
            (genre) => +genre.id === +this.genreIdStore
          )[0].genre
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
    async safeUpdateUserData(fieldName, updateCallback) {
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
