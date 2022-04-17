import { createRouter, createWebHistory } from 'vue-router'
import MainList from "@/views/MainList.vue";
import FilmPage from "@/views/FilmPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory('/hometv'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainList
    },
    {
      path:'/film/:id',
      name:'filmName',
      component:FilmPage,
    },
    {
      path:'/film-search',
      name:'search',
      component:SearchPage,
    },
    {
      path:'/:pathMatch(.*)*',
      component:NotFound
    }

  ]
})

export default router
