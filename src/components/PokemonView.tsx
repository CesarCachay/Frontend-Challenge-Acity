import { getPokemons } from "@/services";
import PokemonList from "./ui/PokemonList";

export default async function PokemonView() {
  const pokemons = await getPokemons(1);
  return (
    <div>
      <PokemonList pokemons={pokemons.results} />
    </div>
  );
}
