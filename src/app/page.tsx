// services
import { getPokemons } from "@/services";

// component
import HomeView from "@/components/HomeView";

// utils
import { getNumberOfPages, pokemonFormatter } from "@/utils/functions";

export default async function Home() {
  const page = 1;
  const pokemonData = await getPokemons(page);

  if (!pokemonData) {
    return <p className="text-center text-red-500">Failed to load Pokémon</p>;
  }

  const { count, results } = pokemonData;
  const numberOfPages = getNumberOfPages(count);
  const formattedPokemonList = pokemonFormatter(results);

  return (
    <HomeView
      initialPage={page}
      numberOfPages={numberOfPages}
      initialPokemonList={formattedPokemonList}
    />
  );
}
