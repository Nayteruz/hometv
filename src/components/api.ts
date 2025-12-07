import { getFilmEntity, getFilmEntityList } from '@/stores/utils';

const films = '404dc583-7efc-4c93-8f21-a782f977b9e7';
const BASE_API_URL = 'https://kinopoiskapiunofficial.tech/api/';
const BASE_TYPE = 'TOP_POPULAR_ALL';
export const BASE_API_URL_FILMS2v2 = `${BASE_API_URL}v2.2/films`;
export const BASE_API_URL_FILMS2v1 = `${BASE_API_URL}v2.1/films`;

const getDataByUrl = async (
  url: string,
  errorMessage: string = 'Something went wrong'
) => {
  const response = await fetch(url, {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return await response.json();
};

export const getFilters = async () => {
  return await getDataByUrl(`${BASE_API_URL_FILMS2v2}/filters`);
};

export const getFilmInfo = async (id: number) => {
  const data = await getDataByUrl(
    `${BASE_API_URL_FILMS2v2}/${id}`,
    'Error load film info'
  );
  return getFilmEntity(data);
};

export const getSimilars = async (id: number) => {
  const data = await getDataByUrl(`${BASE_API_URL_FILMS2v2}/${id}/similars`);
  return getFilmEntityList(data.items || []) || [];
};

export const getSequelsAndPrequels = async (id: number) => {
  const data = await getDataByUrl(
    `${BASE_API_URL_FILMS2v1}/${id}/sequels_and_prequels`,
    'Not found'
  );
  return getFilmEntityList(data.items || []);
};

export const getCollections = async (page: number = 1) => {
  const url = new URL(`${BASE_API_URL_FILMS2v2}/collections`);
  url.searchParams.set('type', BASE_TYPE);
  url.searchParams.set('page', String(page));

  const data = await getDataByUrl(url.toString(), 'Error load collections');
  return { ...data, items: getFilmEntityList(data.items) || [] };
};

export const getSearchFilms = async (params: Record<string, string>) => {
  const url = new URL(BASE_API_URL_FILMS2v2);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const data = await getDataByUrl(url.toString(), 'Error load search');
  return { ...data, items: getFilmEntityList(data.items) || [] };
};
