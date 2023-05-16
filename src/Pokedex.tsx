import AppLayout from "./layouts/AppLayout";
import { IPokemonList } from "./common/interfaces/IPokemon";
import PokemonCard from "./components/Pokemon/PokemonCard";
import { useGetPokemonListQuery } from "./store/pokemonApi";
import React, { useState } from "react";
import Loader from "./components/Loader/Loader";
import Pagination from "./components/Pagination/Pagination";
import Header from "./components/Header/Header";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Pokedex: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [perPage, setPerPage] = useState<string>(
    searchParams.get("perPage") ?? "10"
  );
  const [offset, setOffset] = useState<number>(0);
  const pokemons = useGetPokemonListQuery({ perPage, offset });

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setPerPage(e.target.value);
    setSearchParams({ perPage: e.target.value });
  };

  const handlePrevBtn = () => {
    offset >= parseInt(perPage) &&
      setOffset((prev) => prev - parseInt(perPage));
  };

  const handleNextBtn = () => {
    offset + parseInt(perPage) <= (pokemons?.data?.count as number) &&
      setOffset((prev) => prev + parseInt(perPage));
  };

  if (pokemons.isFetching) {
    return (
      <AppLayout>
        <Loader />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <section className="p-5 xl:mx-10">
        <Header handleSelect={handleSelect} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-12 gap-4"
        >
          {pokemons?.data?.results?.map(
            (pokemon: IPokemonList, index: number) => {
              return <PokemonCard key={index} name={pokemon?.name} />;
            }
          )}
        </motion.main>

        <Pagination
          offset={offset}
          perPage={perPage}
          count={pokemons?.data?.count}
          handlePrevBtn={handlePrevBtn}
          handleNextBtn={handleNextBtn}
        />
      </section>
    </AppLayout>
  );
};

export default Pokedex;
