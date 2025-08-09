import { defineStore } from "pinia";
import { firebaseDb } from "@/plugins";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { userDataGet, userDataSet, translateErrorCode, ignore_genre } from "@/plugins/firebaseActions";

export const useFilmStore = defineStore("filmStore", {
	state: () => ({
		user: null,
		apiKey: "404dc583-7efc-4c93-8f21-a782f977b9e7",
		apiAloha: "e7b61f129f4a392ac4bf6726a9dd6a",
		apiHDBV: "8a22f8e7684404c3815e3ffa940f00a0",
		auth: getAuth(),
		errorMessage: "",
		pageNum: 1,
		limit: 20,
		genreIdStore: null,
		genreListStore: [],
		searchQueryStore: "",
		filters: null,
		filmPageId: 0,
		favorites: [],
		currentFocusIndex: -1,
		films: [],
		focusIds: {},
		isShowLastSearchList: false,
		lastSearchList: [],
		lastViews: [],
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
			if (localStorage.getItem("genres")) {
				this.genreListStore = JSON.parse(localStorage.getItem("genres"));
				return this.genreListStore;
			} else {
				try {
					const response = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters", {
						headers: {
							"X-API-KEY": this.apiKey,
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					this.filters = data;
					this.genreListStore = data.genres;
					this.filterGenres;
					localStorage.setItem("genres", JSON.stringify(this.genreListStore));

					return this.genreListStore;
				} catch (error) {
					console.error("Error load genres", error);
				}
			}
		},
		checkFavoriteStore(itemFilm) {
			let check = this.isCheckFilm(true, itemFilm);
			return !!check.length;
		},
		async addFavorite(itemFilm) {
			const itemFilmWithSortTime = { ...itemFilm, sortTime: Date.now() };
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, { favorites: [...this.favorites, itemFilmWithSortTime] });
			} catch (e) {
				if (!this.user) {
					console.log("Необходимо авторизоваться");
				} else {
					console.log("Ошибка добавления в избранное: " + e);
				}
			}
			this.favorites = [...this.favorites, itemFilmWithSortTime];
		},
		async removeFavorite(itemFilm) {
			let check = this.isCheckFilm(false, itemFilm);
			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				await updateDoc(docRef, { favorites: [...check] });
			} catch (e) {
				if (!this.user) {
					console.log("Необходимо авторизоваться");
				} else {
					console.log("Ошибка удаления из избранного: " + e);
				}
			}
			this.favorites = [...check];
		},

		async addLastSearchList(searchValue) {
			if (!searchValue) {
				return;
			}

			const isValue = this.lastSearchList.find((item) => item.value.toLowerCase() === searchValue.toLowerCase());

			if (isValue) {
				return;
			}

			try {
				if (this.user) {
					const docRef = doc(firebaseDb, "users", this.user.uid);
					const list = [{ id: Date.now(), value: searchValue }, ...this.lastSearchList];
					if (list.length > 30) {
						list.pop();
					}

					this.lastSearchList = list;
					await updateDoc(docRef, { lastSearchList: list });
				}
			} catch (e) {
				console.log("Ошибка добавления в поиск: " + e);
			}
		},

		async addLastViews(itemFilm) {
			if (!itemFilm) {
				return;
			}

			const itemFilmWithSortTime = { ...itemFilm, sortTime: Date.now() };
			const isValue = this.lastViews.some((item) => Number(item?.kinopoiskId) === Number(itemFilm?.kinopoiskId));

			if (isValue) {
				return;
			}

			try {
				const docRef = doc(firebaseDb, "users", this.user.uid);
				const list = [itemFilmWithSortTime, ...this.lastViews];

				if (list.length > 40) {
					list.pop();
				}

				this.lastViews = list;

				await updateDoc(docRef, { lastViews: list });
			} catch (e) {
				console.log("Ошибка добавления в последнее просмотренное: " + e);
			}
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
					alert("Ошибка logout: " + error);
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
			this.user.name = data?.name || "";
			this.user.email = data?.email ?? "";

			const favorites = data?.favorites ?? [];
			const sortedFavorites = favorites.sort((a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0));
			this.favorites = sortedFavorites;

			this.lastSearchList = data?.lastSearchList || [];

			const lastViews = data?.lastViews ?? [];
			const sortedLastViews = lastViews.sort((a, b) => (b?.sortTime ?? 0) - (a?.sortTime ?? 0));
			this.lastViews = sortedLastViews;

			if (data?.api_key) {
				this.apiKey = data.api_key;
			}

			typeof callback === "function" ? callback() : "";
		},
		removeUserData(callback) {
			this.user = null;
			this.favorites = [];
			typeof callback === "function" ? callback() : "";
		},
		isCheckFilm(check, itemFilm) {
			return this.favorites.filter((film) => {
				let filterFilmId = film?.kinopoiskId ?? film?.filmId;
				let itemFilmId = itemFilm?.kinopoiskId ?? itemFilm?.filmId;
				if (filterFilmId === itemFilmId && check) {
					return film;
				} else if (filterFilmId !== itemFilmId && !check) {
					return film;
				}
			});
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
	},
});
