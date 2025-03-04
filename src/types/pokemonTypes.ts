export interface PokemonResults {
  name: string;
  url: string;
  id: string;
  picture: string;
}

export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonResults[];
}

export type PokemonType = {
  id: string;
  parsedId: string;
  name: string;
  url: string;
  picture: string;
};
