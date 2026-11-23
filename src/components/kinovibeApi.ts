const API_URL = import.meta.env.VITE_KINOVIBE_API;

export interface IKinovibeEpisode {
  comment: string;
  file: string;
}

export interface IKinovibeSeason {
  season: number;
  episodes: IKinovibeEpisode[];
}

export type IKinovibeResult =
  | { type: 'movie'; file: string }
  | { type: 'tv'; seasons: IKinovibeSeason[] };

export const fetchKinovibe = async (
  kpId: number
): Promise<IKinovibeResult | null> => {
  if (!API_URL) throw new Error('VITE_KINOVIBE_API is not set');

  const res = await fetch(`${API_URL}?kp=${kpId}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Kinovibe API: ${res.status}`);

  return res.json();
};

export const episodeTitle = (comment: string): string =>
  comment
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
