// vendors
import Link from "next/link";
import { Typography } from "@mui/material";

// utils
import { formatPokemonName, pokemonIdFormatter } from "@/utils/functions";

// types
import { PokemonResults } from "@/types/pokemonTypes";
import Image from "next/image";

const PokemonCard: React.FC<PokemonResults> = ({ name, id, picture }) => {
  return (
    <Link href={`/pokemon/${id}`} className="group">
      <div
        className="bg-white border border-gray-300 rounded-md p-2 h-[140px] w-[300px] flex flex-col justify-between items-center shadow-sm 
        transition duration-500 group-hover:shadow-lg max-w-[250px] sm:max-w-[300px]"
      >
        <Image src={picture} alt={name} width={100} height={100} className="w-24 h-24" />
        <div className="w-full flex justify-around px-4 ">
          <Typography>{pokemonIdFormatter(id)}</Typography>
          <Typography>{formatPokemonName(name)}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
