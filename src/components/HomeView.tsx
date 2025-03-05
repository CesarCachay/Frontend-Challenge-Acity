"use client";
import { useState } from "react";
import { Typography } from "@mui/material";

// components
import PokemonList from "./ui/PokemonList";
import Pagination from "./ui/Pagination";
import Spinner from "./ui/Spinner";

// utils
import { formatPokemonList } from "@/utils/functions";

// services
import { getPokemons } from "@/services";

interface HomeClientProps {
  initialPage: number;
  numberOfPages: number;
  initialPokemonList: any[];
}

export default function HomeView({
  initialPage,
  numberOfPages,
  initialPokemonList,
}: HomeClientProps) {
  const [page, setPage] = useState(initialPage);
  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePageChange = async (newPage: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getPokemons(newPage);
      if (res && res.results) {
        setPokemonList(formatPokemonList(res.results));
        setPage(newPage);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (err) {
      setError("Failed to fetch Pokémon.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-6">
      {error && <Typography className="text-red-500">{error}</Typography>}
      {isLoading ? <Spinner /> : <PokemonList pokemons={pokemonList} />}
      <Pagination page={page} numberOfPages={numberOfPages} setPage={handlePageChange} />
    </div>
  );
}
