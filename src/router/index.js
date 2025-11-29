import { createRouter, createWebHistory } from 'vue-router';
import MainList from '@/views/MainList.vue';
import FilmPage from '@/views/FilmPage.vue';
import SearchPage from '@/views/SearchPage.vue';
import NotFound from '@/components/NotFound.vue';
import FavoritePage from '@/views/FavoritePage.vue';
import LastViews from '@/views/LastViews.vue';
import WatchingPage from '@/views/WatchingPage.vue';
import WatchListPage from '@/views/WatchListPage.vue';
import WaitListPage from '@/views/WaitListPage.vue';
import { ROUTER_PAGES } from '@/components/const';

const router = createRouter({
  history: createWebHistory('/hometv'),
  routes: [
    {
      path: ROUTER_PAGES.HOME.path,
      name: ROUTER_PAGES.HOME.name,
      component: MainList,
    },
    {
      path: ROUTER_PAGES.FILM_PAGE.path,
      name: ROUTER_PAGES.FILM_PAGE.name,
      component: FilmPage,
    },
    {
      path: ROUTER_PAGES.SEARCH.path,
      name: ROUTER_PAGES.SEARCH.name,
      component: SearchPage,
    },
    {
      path: ROUTER_PAGES.FAVORITES.path,
      name: ROUTER_PAGES.FAVORITES.name,
      component: FavoritePage,
    },
    {
      path: ROUTER_PAGES.LAST_VIEWS.path,
      name: ROUTER_PAGES.LAST_VIEWS.name,
      component: LastViews,
    },
    {
      path: ROUTER_PAGES.WATCHING.path,
      name: ROUTER_PAGES.WATCHING.name,
      component: WatchingPage,
    },
    {
      path: ROUTER_PAGES.WATCH_LIST.path,
      name: ROUTER_PAGES.WATCH_LIST.name,
      component: WatchListPage,
    },
    {
      path: ROUTER_PAGES.WAITING_LIST.path,
      name: ROUTER_PAGES.WAITING_LIST.name,
      component: WaitListPage,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;
