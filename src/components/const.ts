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
  Bugall: (id: number, api: string) =>
    `https://api.apbugall.org/?token=${api}&kp=${id}`,
  Collaps: (id: number) => `https://api.atomics.ws/embed/kp/${id}`,
  Collaps2: (id: number) => `https://api.namy.ws/embed/kp/${id}`,
  VeoVeo: (id: number, api: string) =>
    `https://api.rstprgapipt.com/balancer-api/iframe?kp=${id}&token=${api}`,
  VideoSeeD: (id: number, api: string) =>
    `https://tv-2-kinoserial.net/embed_auto/${id}/?token=${api}`,
  // VideoCDN: (id: number) => // Пока что не работает
  //`https://p.lumex.space/LDSZJq4uCNvY?kp_id=${id}&domain=nayteruz.github.io`,
  Tobaco: (id: string) => `https://api.tobaco.ws/embed/kp/${id}`,
  Coll: (id: number, api: string) =>
    `https://api.bhcesh.me/list?token=${api}&kinopoisk_id=${id}`,
  kodi: (id: number) =>
    `https://kodikapi.com/search?token=41dd95f84c21719b09d6c71182237a25&kinopoisk_id=${id}`,
  HDVB: (id: number, api: string) =>
    `https://apivb.com/api/videos.json?id_kp=${id}&token=${api}`,
  Kodik: (id: number) => `https://kodik.cc/find-player?kinopoiskID=${id}`,
  Трейлер: (id: number) => `https://api.atomics.ws/embed/trailer-kp/${id}`,
} as const;

// Игроки, для которых URL — это API (нужно сходить и достать iframe из ответа)
export const API_PLAYERS = ['Bugall', 'Coll', 'kodi', 'HDVB'] as const;

export const extractIframeSrc = (name: string, data: any): string | null => {
  switch (name) {
    case 'Bugall':
      return data.status === 'success' && data.data?.iframe
        ? data.data.iframe
        : null;
    case 'Coll':
      return data.results?.[0]?.iframe_url || null;
    case 'kodi':
      return data.results?.[0]?.link || null;
    case 'HDVB':
      return data[0]?.iframe_url || null;
    default:
      return null;
  }
};

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

export const IMAGE_PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300"><rect width="200" height="300" fill="%23374151"/><text x="50%" y="50%" fill="%236b7280" text-anchor="middle" dy=".3em" font-size="14">No image</text></svg>';
