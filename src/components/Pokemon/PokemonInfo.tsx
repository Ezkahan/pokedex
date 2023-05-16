import { useParams } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
import { useGetPokemonQuery } from "../../store/pokemonApi";

const PokemonInfo: React.FC = () => {
  const { name } = useParams();
  const pokemon = useGetPokemonQuery(name as string);

  return (
    <AppLayout>
      <div className="bg-white p-5 m-5 shadow-lg shadow-slate-200 rounded-lg flex flex-col xl:flex-row gap-5">
        <img
          src={
            pokemon.data?.sprites?.other?.dream_world?.front_default ||
            pokemon?.data?.sprites?.front_default
          }
          alt="pokemon"
          loading="lazy"
          className="p-5"
        />
        <div className="w-full space-y-2">
          <p className="xl:text-2xl text-xl font-montserrat-bold text-pokedex">
            <strong>Name:</strong> <span>{pokemon.data?.name}</span>
          </p>
          <p>
            <strong>Species:</strong> {pokemon.data?.species?.name}
          </p>
          <p>
            <strong>Types:</strong>
            {pokemon.data?.types?.map((singleType, i) => (
              <span key={i} className={"poke-types " + singleType.type?.name}>
                {singleType.type?.name}
              </span>
            ))}
          </p>
          <p>
            <strong>Abilities:</strong>
            {pokemon.data?.abilities
              ?.map((singleAbility) => singleAbility.ability?.name)
              .join(", ")}
          </p>
          <p>
            <strong>Moves:</strong>
            {pokemon.data?.moves
              ?.map((singleMove) => singleMove.move?.name)
              .slice(0, 3)
              .join(", ") || "Unknown"}
          </p>
          <p>
            <strong>Height:</strong> {Number(pokemon.data?.height) / 10}m,
            <strong>Weight:</strong> {Number(pokemon.data?.weight) / 10}kg
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default PokemonInfo;
