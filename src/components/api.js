const films = '404dc583-7efc-4c93-8f21-a782f977b9e7';
const BASE_API_URL = 'https://kinopoiskapiunofficial.tech/api/';
const BASE_TYPE = 'TOP_POPULAR_ALL';
export const BASE_API_URL_FILMS2v2 = `${BASE_API_URL}v2.2/films`;
export const BASE_API_URL_FILMS2v1 = `${BASE_API_URL}v2.1/films`;

export const getFilters = async () => {
  const response = await fetch(`${BASE_API_URL_FILMS2v2}/filters`, {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

export const getFilmInfo = async (id) => {
  const response = await fetch(`${BASE_API_URL_FILMS2v2}/${id}`, {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error load film info');
  }

  return await response.json();
};

export const getSimilars = async (id) => {
  const response = await fetch(`${BASE_API_URL_FILMS2v2}/${id}/similars`, {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Not found');
  }

  return await response.json();
};

export const getSequelsAndPrequels = async (id) => {
  const response = await fetch(
    `${BASE_API_URL_FILMS2v1}/${id}/sequels_and_prequels`,
    {
      headers: {
        'X-API-KEY': films,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Not found');
  }

  return await response.json();
};

export const getCollections = async (page = 1) => {
  const url = new URL(`${BASE_API_URL_FILMS2v2}/collections`);
  url.searchParams.set('type', BASE_TYPE);
  url.searchParams.set('page', page);

  const response = await fetch(url.toString(), {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error load collections');
  }

  return response.json();
};

export const getSearchFilms = async (params) => {
  const url = new URL(BASE_API_URL_FILMS2v2);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString(), {
    headers: {
      'X-API-KEY': films,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
