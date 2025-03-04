import { PokemonResults } from "@/types/pokemonTypes";

// types
interface PokemonListProps {
  pokemons: PokemonResults[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  console.log("pokemons", pokemons);
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}
