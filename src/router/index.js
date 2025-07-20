import { createRouter, createWebHistory } from "vue-router";
import MainList from "@/views/MainList.vue";
import FilmPage from "@/views/FilmPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import NotFound from "@/components/NotFound.vue";
import FavoritePage from "@/views/FavoritePage.vue";

const router = createRouter({
	history: createWebHistory("/hometv"),
	routes: [
		{
			path: "/",
			name: "home",
			component: MainList,
		},
		{
			path: "/film/:id",
			name: "filmPage",
			component: FilmPage,
		},
		{
			path: "/search",
			name: "searchPage",
			component: SearchPage,
		},
		{
			path: "/favorites",
			name: "favorite",
			component: FavoritePage,
		},
		{
			path: "/:pathMatch(.*)*",
			component: NotFound,
		},
	],
});

export default router;
