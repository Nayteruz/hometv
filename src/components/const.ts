export const keyboardKeyList = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  Enter: 'Enter',
  NumpadEnter: 'Enter',
};

export const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 480,
};

export const players = {
  Alloha: (id: number, api: string) =>
    `https://harald-as.newplayjj.com/?kp=${id}&token=${api}`,
  Collaps: (id: number) => `https://api.atomics.ws/embed/kp/${id}`,
  VideoCDN: (id: number) =>
    `https://p.lumex.space/j3mqebEPqCLB?domain=nayteruz.github.io&kp_id=${id}`,
  Coll: async (id: number) => {
    const url = `https://api.bhcesh.me/list?token=4c250f7ac0a8c8a658c789186b9a58a5&kinopoisk_id=${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (
        Array.isArray(data.results) &&
        data.results.length > 0 &&
        data.results?.[0].iframe_url
      ) {
        return data.results?.[0].iframe_url;
      }
    } catch (e) {
      console.error('HDVB error:', e);
    }
    return null;
  },
  kodi: async (id: number) => {
    const url = `https://kodikapi.com/search?token=41dd95f84c21719b09d6c71182237a25&kinopoisk_id=${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (
        Array.isArray(data.results) &&
        data.results.length > 0 &&
        data.results?.[0].link
      ) {
        return data.results?.[0].link;
      }
    } catch (e) {
      console.error('HDVB error:', e);
    }
    return null;
  },

  HDVB: async (id: number, api: string) => {
    const url = `https://apivb.com/api/videos.json?id_kp=${id}&token=${api}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0 && data[0].iframe_url) {
        return data[0].iframe_url;
      }
    } catch (e) {
      console.error('HDVB error:', e);
    }
    return null;
  },
  Kodik: (id: number) => `https:////kodik.cc/find-player?kinopoiskID=${id}`,
  Трейлер: (id: number) => `https://api.atomics.ws/embed/trailer-kp/${id}`,
} as const;

export const pagesTitle = {
  MAIN: 'Список последних новинок',
  LAST_VIEWS: 'Последние просмотренные',
  FAVORITE: 'Избранные фильмы/мультики и тд',
  WATCHING: 'Смотрю сейчас',
  WATCH_LIST: 'Буду смотреть позже',
  WAIT_LIST: 'Жду продолженния или новые серии',
};

export const ROUTER_PAGES = {
  HOME: {
    path: '/',
    name: 'home',
  },
  FILM_PAGE: {
    path: '/film/:id',
    name: 'filmPage',
  },
  SEARCH: {
    path: '/search',
    name: 'searchPage',
  },
  FAVORITES: {
    path: '/favorites',
    name: 'favorite',
  },
  LAST_VIEWS: {
    path: '/last-views',
    name: 'lastViews',
  },
  WATCHING: {
    path: '/watching',
    name: 'watchingNow',
  },
  WATCH_LIST: {
    path: '/watch-list',
    name: 'watchList',
  },
  WAITING_LIST: {
    path: '/waiting-list',
    name: 'waitingList',
  },
};
