export interface IFilmEntity {
  id: number;
  name: string;
  description: string;
  year: string;
  image: string;
  rating: string | number;
  countries: string[];
  genres: string[];
  type: string;
}

export type IFilmRaw = Record<string, any>;

export type IFilmRawList = IFilmRaw[];
