import {defineStore} from 'pinia'

export const useFilmStore = defineStore({
	id: 'filmStore',
	state: () => ({
		apiKey: '404dc583-7efc-4c93-8f21-a782f977b9e7',
		pageNum: 1,
		limit:20,
		searchQueryStore:'',
		favorites: []
	}),
	getters: {},
	actions: {
		setPageNum(num = 1){
			this.pageNum = num;
		},
		setSearchQueryStore(str){
			this.searchQueryStore = str;
		},
		setFavorites(listFavorites = []){
			this.favorites = listFavorites;
		}
	}
})
