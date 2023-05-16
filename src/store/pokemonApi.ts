import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPokemon, IPokemonFetch } from "../common/interfaces/IPokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemons",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<IPokemonFetch, any>({
      query: ({ perPage, offset }) =>
        `pokemon?limit=${perPage}&offset=${offset}`,
    }),
    getPokemon: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonListQuery } = pokemonApi;
