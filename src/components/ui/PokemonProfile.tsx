// vendors
import Image from "next/image";
import {
  pokemonIdFormatter,
  formatPokemonName,
  getColorPokemonType,
} from "@/utils/functions";

// types
export type PokemonProfileProps = {
  name: string;
  id: string;
  pokemonPicture: string;
  types: Array<PokemonDataTypes>;
};

export type PokemonDataTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const PokemonProfile: React.FC<PokemonProfileProps> = ({
  name,
  id,
  pokemonPicture,
  types,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-700 border border-gray-800 rounded-xl p-4 mt-5 w-full max-w-lg sm:max-w-xl">
      <div className="flex flex-col items-center">
        <h2
          className="text-white text-2xl font-bold text-center my-2"
          data-cy="pokemon-name-text"
        >
          Name: {formatPokemonName(name)}
        </h2>
        <h3 className="text-white text-xl font-bold text-center my-2">
          ID: {pokemonIdFormatter(id)}
        </h3>
      </div>

      <Image
        src={pokemonPicture}
        alt={name}
        width={400}
        height={400}
        className="w-64 h-64 sm:w-96 sm:h-96"
      />

      <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
        {types.map((pokemonType: PokemonDataTypes) => (
          <div
            key={pokemonType.slot}
            className={`w-40 flex items-center justify-center rounded-lg text-white p-2 text-lg font-bold ${getColorPokemonType(
              pokemonType.type.name
            )}`}
          >
            {pokemonType.type.name.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonProfile;
