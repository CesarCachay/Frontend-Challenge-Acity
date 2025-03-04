// vendors
import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

// types
export type PaginationProps = {
  page: number;
  numberOfPages: number | undefined;
  setPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, numberOfPages, setPage }) => {
  return (
    <footer className="flex flex-col items-center text-lg mt-5">
      <div className="grid grid-cols-2 gap-4 w-[200px] mb-2">
        <Link href={`/pokemons?page=${page - 1}`} onClick={() => setPage(page - 1)}>
          <button
            className={`flex items-center justify-center w-[100px] h-[35px] rounded-md bg-gray-800 text-white transition 
                        ${
                          page === 1
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-700 active:bg-gray-700"
                        }`}
            disabled={page === 1}
            data-cy="prev-button-option"
          >
            Prev
          </button>
        </Link>

        <Link href={`/pokemons?page=${page + 1}`} onClick={() => setPage(page + 1)}>
          <button
            className={`flex items-center justify-center w-[100px] h-[35px] rounded-md bg-gray-800 text-white transition 
                        ${
                          page === numberOfPages
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-700 active:bg-gray-700"
                        }`}
            disabled={page === numberOfPages}
            data-cy="next-button-option"
          >
            Next
          </button>
        </Link>
      </div>

      <Typography fontWeight={700} margin="10px 0 20px 0">
        <span>{`Page ${page}`}</span>
        {numberOfPages && <span>{`/${numberOfPages}`}</span>}
      </Typography>
    </footer>
  );
};

export default Pagination;
