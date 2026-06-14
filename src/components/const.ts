import type { IFilmStoreState } from '@/stores/types';
import type { IPlayerLabel } from '@/types';

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

export const PLAYER_LABELS = {
  Alloha: 'Alloha',
  Bugall: 'Bugall',
  Collaps: 'Collaps',
  Collaps2: 'Collaps2',
  VeoVeo: 'VeoVeo',
  VideoSeeD: 'VideoSeeD',
  Tobaco: 'Tobaco',
  Coll: 'Coll',
  Kodi: 'Kodi',
  HDVB: 'HDVB',
  Kodik: 'Kodik',
  trailer: 'Трейлер',
} as const;

export const PLAYER_NAMES = Object.values(PLAYER_LABELS);

export const players: Record<
  IPlayerLabel,
  (id: number, api: string) => string
> = {
  [PLAYER_LABELS.Alloha]: (id: number, api: string) =>
    `https://harald-as.newplayjj.com/?kp=${id}&token=${api}`,
  [PLAYER_LABELS.Bugall]: (id: number, api?: string) =>
    `https://api.apbugall.org/?kp=${id}&token=${api}`,
  [PLAYER_LABELS.Collaps]: (id: number) =>
    `https://api.atomics.ws/embed/kp/${id}`,
  [PLAYER_LABELS.Collaps2]: (id: number) =>
    `https://api.namy.ws/embed/kp/${id}`,
  [PLAYER_LABELS.VeoVeo]: (id: number, api?: string) =>
    `https://api.rstprgapipt.com/balancer-api/iframe?kp=${id}&token=${api}`,
  [PLAYER_LABELS.VideoSeeD]: (id: number, api: string) =>
    `https://tv-2-kinoserial.net/embed_auto/${id}/?token=${api}`,
  [PLAYER_LABELS.Tobaco]: (id: number) =>
    `https://api.tobaco.ws/embed/kp/${id}`,
  [PLAYER_LABELS.Coll]: (id: number, api: string) =>
    `https://api.bhcesh.me/list?kinopoisk_id=${id}&token=${api}`,
  [PLAYER_LABELS.Kodi]: (id: number, api: string) =>
    `https://kodikapi.com/search?kinopoisk_id=${id}&token=${api}`,
  [PLAYER_LABELS.HDVB]: (id: number, api: string) =>
    `https://apivb.com/api/videos.json?id_kp=${id}&token=${api}`,
  [PLAYER_LABELS.Kodik]: (id: number) =>
    `https://kodik.cc/find-player?kinopoiskID=${id}`,
  [PLAYER_LABELS.trailer]: (id: number) =>
    `https://api.atomics.ws/embed/trailer-kp/${id}`,
};

// Игроки, для которых URL — это API (нужно сходить и достать iframe из ответа)

export const API_PLAYERS = new Set<string>([
  PLAYER_LABELS.Bugall,
  PLAYER_LABELS.Coll,
  PLAYER_LABELS.Kodi,
  PLAYER_LABELS.HDVB,
]);

export const API_KEY_MAP: Partial<Record<IPlayerLabel, keyof IFilmStoreState>> =
  {
    [PLAYER_LABELS.Alloha]: 'apiAloha',
    [PLAYER_LABELS.HDVB]: 'apiHDBV',
    [PLAYER_LABELS.Bugall]: 'apiBugall',
    [PLAYER_LABELS.VeoVeo]: 'apiVeoVeo',
    [PLAYER_LABELS.Coll]: 'apiColl',
    [PLAYER_LABELS.VideoSeeD]: 'apiVideoSeed',
    [PLAYER_LABELS.Kodi]: 'apiKodi',
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
