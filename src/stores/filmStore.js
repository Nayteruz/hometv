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
    unWatchIds: new Set(),
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
      const itemFilmWithSortTime = { ...itemFilm, sortTime: Date.now() };
      try {
        const docRef = doc(firebaseDb, 'users', this.user.uid);
        await updateDoc(docRef, {
          favorites: [...this.favorites, itemFilmWithSortTime],
        });
      } catch (e) {
        if (!this.user) {
          console.warn('Необходимо авторизоваться');
        } else {
          console.warn('Ошибка добавления в избранное: ' + e);
        }
      }
      this.favorites = [...this.favorites, itemFilmWithSortTime];
    },
    async removeFavorite(filmId) {
      const updatedFavorites = this.favorites.filter(
        (film) => Number(film?.kinopoiskId ?? film?.filmId) !== Number(filmId)
      );

      try {
        const docRef = doc(firebaseDb, 'users', this.user.uid);
        await updateDoc(docRef, { favorites: [...updatedFavorites] });
      } catch (e) {
        if (!this.user) {
          console.warn('Необходимо авторизоваться');
        } else {
          console.warn('Ошибка удаления из избранного: ' + e);
        }
      }
      this.favorites = [...updatedFavorites];
    },

    async addLastSearchList(searchValue) {
      if (!searchValue) {
        return;
      }

      const filtered = this.lastSearchList.filter(
        (item) => item.value.toLowerCase() !== searchValue.toLowerCase()
      );

      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          const list = [{ id: Date.now(), value: searchValue }, ...filtered];
          const trimmedList = list.length > 30 ? list.slice(0, 30) : list;

          this.lastSearchList = trimmedList;
          await updateDoc(docRef, { lastSearchList: trimmedList });
        }
      } catch (e) {
        console.error('Ошибка добавления в поиск: ' + e);
      }
    },

    async addLastViews(itemFilm) {
      if (!itemFilm) {
        return;
      }

      const itemFilmWithSortTime = { ...itemFilm, sortTime: Date.now() };
      const filtered = this.lastViews.filter(
        (item) =>
          Number(item?.kinopoiskId ?? item?.filmId) !==
          Number(itemFilm?.kinopoiskId ?? itemFilm?.filmId)
      );

      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          const list = [itemFilmWithSortTime, ...filtered];
          const trimmedList = list.length > 40 ? list.slice(0, 40) : list;

          this.lastViews = trimmedList;

          await updateDoc(docRef, { lastViews: trimmedList });
        }
      } catch (e) {
        console.error('Ошибка добавления в последнее просмотренное: ' + e);
      }
    },

    async addUnWatch(itemId) {
      if (!itemId) {
        return;
      }

      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          this.unWatchIds.add(itemId);
          const list = [...this.unWatchIds];
          const trimmedList = list.length > 100 ? list.slice(0, 100) : list;

          this.unWatchIds = new Set(trimmedList);

          await updateDoc(docRef, { unWatchIds: trimmedList });
        }
      } catch (e) {
        console.error('Ошибка добавления в непросматриваемое: ' + e);
      }
    },

    async removeUnWatch(itemId) {
      if (!itemId) {
        return;
      }

      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          this.unWatchIds.delete(itemId);
          await updateDoc(docRef, { unWatchIds: [...this.unWatchIds] });
        }
      } catch (e) {
        console.error('Ошибка удаления из непросматриваемого: ' + e);
      }
    },

    isUnWatch(itemId) {
      return this.unWatchIds.has(itemId);
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

      const sortedFavorites = (data?.favorites ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );
      this.favorites = sortedFavorites;

      this.lastSearchList = data?.lastSearchList || [];
      const sortedLastViews = (data?.lastViews ?? []).sort(
        (a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0)
      );
      this.lastViews = sortedLastViews;

      this.unWatchIds = new Set(data?.unWatchIds ?? []);

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
  },
});
