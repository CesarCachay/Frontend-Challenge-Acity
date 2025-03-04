// components
import PokemonInformation from "@/components/ui/PokemonInformation";
import PokemonProfile from "@/components/ui/PokemonProfile";

// services
import { getPokemonDetailData } from "@/services";

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
  const pokemonData = await getPokemonDetailData(params.id);

  if (!pokemonData) {
    return <p className="text-center text-red-500">Pokemon not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6">
      <PokemonProfile
        id={pokemonData.id}
        name={pokemonData.name}
        pokemonPicture={pokemonData.sprites.other["official-artwork"].front_default}
        types={pokemonData.types}
      />
      <PokemonInformation
        height={pokemonData.height}
        weight={pokemonData.weight}
        abilities={pokemonData.abilities}
        moves={pokemonData.moves}
      />
    </div>
  );
}
