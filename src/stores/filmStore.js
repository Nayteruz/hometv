import {defineStore} from 'pinia'
import axios from "axios";
import {firebaseDb} from "@/plugins";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
//import { setDoc, updateDoc, getDoc, doc } from "registration/firestore";
import { updateDoc, doc } from "firebase/firestore";
import {userDataGet, userDataSet, translateErrorCode, ignore_genre } from "@/plugins/firebaseActions";

export const useFilmStore = defineStore({
	id: 'filmStore',
	state: () => ({
		user: null,
		apiKey: '404dc583-7efc-4c93-8f21-a782f977b9e7',
		auth: getAuth(),
		errorMessage: '',
		pageNum: 1,
		limit: 20,
		genreIdStore: null,
		genreListStore:[],
		searchQueryStore: '',
		filters: null,
		favorites: []
	}),
	getters: {
		filterGenres(){
			if (!this.genreListStore.length) return [];
			this.genreListStore = this.genreListStore.filter(x=> {
				if (ignore_genre.indexOf(x.genre) === -1){
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
				await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
					headers: {
						'X-API-KEY': this.apiKey,
						'Content-Type': 'application/json',
					}
				}).then(req=>{
					this.filters = req.data;
					this.genreListStore = req.data.genres;
					this.filterGenres;
					localStorage.setItem('genres', JSON.stringify(this.genreListStore))
				})
				// this.genreListStore = this.filterGenres(this.filters?.genres);
				// localStorage.setItem('genres', JSON.stringify(this.genreListStore))
				return this.genreListStore;
			}
		},
		checkFavoriteStore(itemFilm){
			let check = this.isCheckFilm(true, itemFilm);
			return !!check.length;
		},
		async addFavorite(itemFilm){
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, {favorites: [...this.favorites, itemFilm]});
			} catch (e) {
				if(!this.user){
					alert("Необходимо авторизоваться");
				} else {
					alert("Ошибка добавления в избранное: " + e);
				}
			}
			this.favorites = [...this.favorites, itemFilm];
		},
		async removeFavorite(itemFilm){
			let check = this.isCheckFilm(false, itemFilm);
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, {favorites: [...check]});
			} catch (e) {
				if(!this.user){
					alert("Необходимо авторизоваться");
				} else {
					alert("Ошибка удаления из избранного: " + e);
				}
			}
			this.favorites = [...check];
		},
		async authWithEmailAndPassword(data){
			await signInWithEmailAndPassword(this.auth, data.email, data.password)
				.then(() => {
					this.getUserData();
				})
				.catch((error) => {
					this.errorMessage = translateErrorCode(error.code);
				});
		},
		async createAuthWithEmailAndPassword(data){
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
		async authLogout(){
			signOut(this.auth).then(async () => {
				this.removeUserData();
			}).catch((error) => {
				alert('Ошибка logout: ' + error);
			});
		},
		async authChange(callback){
			onAuthStateChanged(this.auth, async (user) => {
				if (user) {
					this.user = user;
					this.getUserData(callback);
				} else {
					this.removeUserData(callback);
				}
			});
		},
		async getUserData(callback){
			let data = await userDataGet(this.user.uid);
			this.user.name = data?.name || '';
			this.user.email = data?.email ?? '';
			this.favorites = data?.favorites ?? [];
			if(data?.api_key){
				this.apiKey = data.api_key;
			}
			typeof(callback) === 'function' ? callback() : '';
		},
		removeUserData(callback){
			this.user = null;
			this.favorites = [];
			typeof(callback) === 'function' ? callback() : '';
		},
		isCheckFilm(check, itemFilm){
			return this.favorites.filter(film => {
				let filterFilmId = film?.kinopoiskId ?? film?.filmId;
				let itemFilmId = itemFilm?.kinopoiskId ?? itemFilm?.filmId;
				if (filterFilmId === itemFilmId && check){
					return film;
				} else if (filterFilmId !== itemFilmId && !check){
					return film
				}
			})
		}

	}
})
