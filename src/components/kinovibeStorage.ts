const STORAGE_KEY = 'kinovibe:last-watched';

export interface ILastWatched {
  season: number;
  episode: number;
}

const readStore = (): Record<string, ILastWatched> => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

export const getLastWatched = (filmId: number): ILastWatched | undefined =>
  readStore()[filmId];

export const setLastWatched = (filmId: number, value: ILastWatched) => {
  const store = readStore();
  store[filmId] = value;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Storage can be full or disabled; playback must keep working without it.
  }
};
