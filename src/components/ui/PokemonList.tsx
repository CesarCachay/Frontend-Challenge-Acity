// components
import PokemonCard from "./PokemonCard";

// utils
import { formatPokemonList } from "@/utils/functions";

// types
import { PokemonResults } from "@/types/pokemonTypes";

interface PokemonListProps {
  pokemons: PokemonResults[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const formattedPokemons = formatPokemonList(pokemons);
  return (
    <div className="pt-5 bg-white grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {formattedPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          id={pokemon.id}
          picture={pokemon.picture}
        />
      ))}
    </div>
  );
}
