import { defineStore } from 'pinia';
import { api } from '@/components/api';
import { filterGenres } from './utils';
import type { IFilmStoreState } from './types';

export const useFilmStore = defineStore('filmStore', {
  state: (): IFilmStoreState => ({
    apiKey: import.meta.env.VITE_API_FILM_LIST_KEY,
    apiAloha: import.meta.env.VITE_API_ALOHA_KEY,
    apiHDBV: import.meta.env.VITE_API_HDTV_KEY,
    apiBugall: import.meta.env.VITE_API_BUGALL,
    apiVeoVeo: import.meta.env.VITE_API_VEOVEO,
    apiColl: import.meta.env.VITE_API_COLL,
    apiVideoSeed: import.meta.env.VITE_API_VIDEOSEED,
    apiKodi: import.meta.env.VITE_API_KODI,
    pageNum: 1,
    limit: 20,
    genreId: null,
    genres: [],
    searchInputText: '',
    filmPageId: 0,
    currentFocusIndex: -1,
    films: [],
    focusIds: {},
    isShowLastSearchList: false,
  }),
  getters: {
    selectedGenreName(state): string {
      const selectedGenre = state.genres.find((g) => g.id === state.genreId);
      return selectedGenre ? selectedGenre.genre : '';
    },

    searchHeading(): string {
      if (this.searchInputText && this.genreId) {
        return `Поиск по слову "${this.searchInputText}", жанр "${this.selectedGenreName}"`;
      } else if (this.searchInputText && !this.genreId) {
        return `Поиск по слову "${this.searchInputText}"`;
      } else if (this.genreId && !this.searchInputText) {
        return `Поиск по жанру "${this.selectedGenreName}"`;
      } else {
        return 'Ничего не указано для поиска';
      }
    },
    searchQuery() {
      let qr: { q?: string; genres?: number } = {};
      qr.q = this.searchInputText || '';
      if (this.genreId) {
        qr.genres = this.genreId;
      }
      return qr;
    },
  },
  actions: {
    setGenreId(genreId: number | null) {
      this.genreId = genreId;
    },
    setFilmPageId(id: number) {
      this.filmPageId = id;
    },
    setShowLastSearchList(value: boolean) {
      this.isShowLastSearchList = value;
    },
    async getGenreList() {
      if (this.genres.length) {
        return this.genres;
      }

      const stored = localStorage.getItem('genres');
      if (stored) {
        try {
          this.genres = JSON.parse(stored);
          return this.genres;
        } catch (e) {
          console.warn('Corrupted genres in localStorage, clearing', e);
          localStorage.removeItem('genres');
        }
      }

      try {
        const data = await api.getFilters();
        this.genres = filterGenres(data.genres);
        localStorage.setItem('genres', JSON.stringify(this.genres));
        return this.genres;
      } catch (error) {
        console.error('Error loading genres', error);
        return [];
      }
    },
    setCurrentFocus(index: number) {
      this.currentFocusIndex = index;
    },
    setMountedCurrentFocus(href: string) {
      this.setCurrentFocus(this.focusIds?.[href] || 0);
    },
  },
});
