import { getAllohaFilmEntity } from '@/stores/utils';
import type { IFilmEntity } from '@/types';

export const ALLOHA_SOURCE = 'alloha';

const allohaFilms = new Map<string, IFilmEntity>();

export const findAllohaFilm = (token: string): IFilmEntity | undefined =>
  allohaFilms.get(token);

export async function searchAllohaByName(
  name: string,
  apiToken: string,
): Promise<IFilmEntity[]> {
  const url = new URL('https://apbugall.org/v2/movies/name/list');
  url.searchParams.set('name', name);

  let response: Response;
  try {
    response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        Accept: 'application/json',
      },
    });
  } catch {
    throw new Error('Не удалось связаться с Alloha');
  }

  if (!response.ok) {
    throw new Error('Не удалось связаться с Alloha');
  }

  let payload: { data?: unknown };
  try {
    payload = (await response.json()) as { data?: unknown };
  } catch {
    throw new Error('Не удалось связаться с Alloha');
  }

  if (!Array.isArray(payload.data)) return [];

  const unique = new Map<string, IFilmEntity>();
  for (const row of payload.data) {
    if (!row || typeof row !== 'object') continue;
    const film = getAllohaFilmEntity(row);
    if (!film?.allohaToken || unique.has(film.allohaToken)) continue;
    unique.set(film.allohaToken, film);
    allohaFilms.set(film.allohaToken, film);
  }

  return [...unique.values()];
}

export async function loadAllohaFilmByToken(
  name: string,
  token: string,
  apiToken: string,
): Promise<IFilmEntity> {
  const items = await searchAllohaByName(name, apiToken);
  const film = items.find(
    (item) => (item.allohaToken || String(item.id)) === token,
  );
  if (!film) {
    throw new Error('В Alloha нет фильма с этим token');
  }
  return film;
}
