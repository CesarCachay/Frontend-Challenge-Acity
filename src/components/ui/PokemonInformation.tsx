// types
export type PokemonInformationProps = {
  height: number;
  weight: number;
  abilities: Array<AbilityType>;
  moves: Array<any>;
};

type AbilityType = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

const PokemonInformation: React.FC<PokemonInformationProps> = ({
  height,
  weight,
  abilities,
  moves,
}) => {
  const weightFormatter = (weight: number) => `${weight / 10} Kg`;
  const heightFormatter = (height: number) => `${height / 10} Mts`;

  return (
    <div className="flex flex-wrap justify-between bg-gray-700 border border-gray-800 rounded-xl p-6 mt-5 w-full max-w-2xl">
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold text-center mb-3">Height</h2>
        <p className="text-white text-lg">{heightFormatter(height)}</p>
        <h2 className="text-white text-2xl font-bold text-center mt-8 mb-3">Weight</h2>
        <p className="text-white text-lg">{weightFormatter(weight)}</p>
      </div>

      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold text-center mb-3">Abilities</h2>
        <ul className="list-none p-0 m-0">
          {abilities.map((data) => (
            <li key={data.ability.name} className="text-white text-lg my-1">
              {data.ability.name}
            </li>
          ))}
        </ul>
        <h2
          className="text-white text-2xl font-bold text-center mt-6 mb-3"
          data-test-id="pokemon-moves-text"
        >
          Moves
        </h2>
        <ul className="list-none p-0 m-0">
          {moves.slice(0, 4).map((data) => (
            <li key={data.move.name} className="text-white text-lg my-1">
              {data.move.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonInformation;
