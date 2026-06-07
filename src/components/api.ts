// src/components/api.ts
// Centralised API client and helper utilities

import type { IFiltersData } from '@/stores/types';
import { getFilmEntity, getFilmEntityList } from '@/stores/utils';
import type { IFilmEntity } from '@/types';

// ---------- Configuration ----------
const API_KEY = import.meta.env.VITE_API_FILM_LIST_KEY;
const BASE = 'https://kinopoiskapiunofficial.tech/api/';

const defaultHeaders = {
  'X-API-KEY': API_KEY,
  'Content-Type': 'application/json',
};

// ---------- Custom error type ----------
export class ApiError extends Error {
  status: number;
  url: string;
  constructor(message: string, status: number, url: string) {
    super(message);
    this.status = status;
    this.url = url;
    this.name = 'ApiError';
  }
}

// ---------- Generic fetch helper ----------
const fetchJson = async (url: string, signal?: AbortSignal): Promise<any> => {
  const response = await fetch(url, { headers: defaultHeaders, signal });
  if (!response.ok) {
    throw new ApiError(
      `Request failed: ${response.statusText}`,
      response.status,
      url,
    );
  }
  return response.json();
};

// ---------- Endpoints ----------
const ENDPOINTS = {
  filters: `${BASE}v2.2/films/filters`,
  filmInfo: (id: number) => `${BASE}v2.2/films/${id}`,
  similars: (id: number) => `${BASE}v2.2/films/${id}/similars`,
  relations: (id: number) => `${BASE}v2.2/films/${id}/relations`,
  sequelsPrequels: (id: number) =>
    `${BASE}v2.1/films/${id}/sequels_and_prequels`,
  collections: `${BASE}v2.2/films/collections`,
  search: `${BASE}v2.2/films`,
} as const;

// ---------- Helper for list responses ----------
const wrapList = <T>(data: any, mapper: (item: any) => T): T[] => {
  const items = data?.items ?? [];
  return items.map(mapper);
};

// ---------- Public API object ----------
export const api = {
  async getFilters(): Promise<IFiltersData> {
    return fetchJson(ENDPOINTS.filters);
  },

  async getFilmInfo(id: number): Promise<IFilmEntity> {
    const data = await fetchJson(ENDPOINTS.filmInfo(id));
    return getFilmEntity(data);
  },

  async getSimilars(id: number): Promise<IFilmEntity[]> {
    const data = await fetchJson(ENDPOINTS.similars(id));
    return wrapList(data, getFilmEntity);
  },

  async getRelations(id: number): Promise<IFilmEntity[]> {
    const data = await fetchJson(ENDPOINTS.relations(id));
    return wrapList(data, getFilmEntity);
  },

  async getSequelsAndPrequels(id: number): Promise<IFilmEntity[]> {
    const data = await fetchJson(ENDPOINTS.sequelsPrequels(id));
    return getFilmEntityList(data) ?? [];
  },

  async getCollections(
    page = 1,
  ): Promise<{ items: IFilmEntity[]; total: number; totalPages: number }> {
    const url = new URL(ENDPOINTS.collections);
    url.searchParams.set('type', 'TOP_POPULAR_ALL');
    url.searchParams.set('page', String(page));
    const data = await fetchJson(url.toString());
    return {
      ...data,
      items: wrapList(data, getFilmEntity),
    };
  },

  async getSearchFilms<T = any>(params: Record<string, string>): Promise<T> {
    const url = new URL(ENDPOINTS.search);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    const data = await fetchJson(url.toString());
    return { ...data, items: wrapList(data, getFilmEntity) } as T;
  },
};
