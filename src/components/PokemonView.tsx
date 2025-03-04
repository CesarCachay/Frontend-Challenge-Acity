import { getPokemons } from "@/services";
import PokemonList from "./ui/PokemonList";

export default async function PokemonView() {
  const pokemons = await getPokemons(1);
  return (
    <div>
      <div>Pokemon View</div>
      <PokemonList pokemons={pokemons.results} />
    </div>
  );
}
