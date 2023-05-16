import { createBrowserRouter } from "react-router-dom";
import Pokedex from "../Pokedex";
import PokemonInfo from "../components/Pokemon/PokemonInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokedex />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonInfo />,
  },
]);

export default router;
