import axios from "axios";

const BASE_URL = process.env.POKEMON_API_URL;

export const getPokemons = async (page: number) => {
  try {
    const offset = (page - 1) * 20;
    const response = await axios.get(`${BASE_URL}/?offset=${offset}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error fetching pokemons: ${error}`);
  }
};

export const getPokemonDetail = async (pokemonId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${pokemonId}/`);
    const pokemonData = response.data;
    return pokemonData;
  } catch (error) {
    console.error(`Error fetching pokemon defailt: ${error}`);
  }
};

export const getPokemonDetailData = async (id: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch Pokémon data", error);
    return null;
  }
};
