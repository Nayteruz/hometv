import {defineStore} from 'pinia'
import axios from "axios";
import {doc, updateDoc} from "firebase/firestore";
import {firebaseDb} from "@/plugins";

export const useFilmStore = defineStore({
	id: 'filmStore',
	state: () => ({
		user: {},
		apiKey: '404dc583-7efc-4c93-8f21-a782f977b9e7',
		pageNum: 1,
		limit: 20,
		genreIdStore: null,
		genreListStore:[],
		searchQueryStore: '',
		favorites: []
	}),
	getters: {
		filterGenres(genres){
			if (!genres.length) return [];
			return genres.filter(x=> {
				if (
					x.genre !== ''
					&& x.genre !== 'для взрослых'
					&& x.genre !== 'мюзикл'
					&& x.genre !== 'спорт'
					&& x.genre !== 'церемония'
					&& x.genre !== 'фильм-нуар'
					&& x.genre !== 'биография'
					&& x.genre !== 'вестерн'
					&& x.genre !== 'короткометражка'
					&& x.genre !== 'документальный'
					&& x.genre !== 'реальное ТВ'
					&& x.genre !== 'ток-шоу'
					&& x.genre !== 'концерт'
					&& x.genre !== 'игра'
					&& x.genre !== 'новости'
				){
					return x;
				}
			})
		}

	},
	actions: {
		async getGenreList(){
			if(localStorage.getItem('genres')) {
				this.genreListStore = JSON.parse(localStorage.getItem('genres'));
				return this.genreListStore;
			} else {
				const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
					headers: {
						'X-API-KEY': this.apiKey,
						'Content-Type': 'application/json',
					}
				});
				this.genreListStore = await this.filterGenres(await response.data.genres);
				localStorage.setItem('genres', JSON.stringify(this.genreListStore))
				return this.genreListStore;
			}
		},
		setPageNum(num = 1) {
			this.pageNum = num;
		},
		checkFavoriteStore(itemFilm){
			let check = this.favorites.filter(film => {
				let filterFilmId = film?.kinopoiskId ?? film?.filmId;
				let itemFilmId = itemFilm?.kinopoiskId ?? itemFilm?.filmId;
				if (filterFilmId === itemFilmId){
					return film;
				}
			})
			return !!check.length;
		},
		async addFavorite(itemFilm){
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, {favorites: [...this.favorites, itemFilm]});
			} catch (e) {
				alert("Ошибка добавления в избранное: " + e);
			}
			this.favorites = [...this.favorites, itemFilm];
		},
		async removeFavorite(itemFilm){
			let check = this.favorites.filter(film => {
				let filterFilmId = film?.kinopoiskId ?? film?.filmId;
				let itemFilmId = itemFilm?.kinopoiskId ?? itemFilm?.filmId;
				if (filterFilmId !== itemFilmId){
					return film;
				}
			})
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, {favorites: [...check]});
			} catch (e) {
				alert("Ошибка добавления в избранное: " + e);
			}
			this.favorites = [...check];
		}

	}
})
