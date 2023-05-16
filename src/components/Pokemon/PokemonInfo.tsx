import { useParams } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
import { useGetPokemonQuery } from "../../store/pokemonApi";

const PokemonInfo: React.FC = () => {
  const { name } = useParams();
  const pokemon = useGetPokemonQuery(name as string);

  return (
    <AppLayout>
      <section className="bg-white p-5 m-5 shadow-lg shadow-slate-200 rounded-lg flex flex-col xl:flex-row gap-5">
        <img
          src={
            pokemon.data?.sprites?.other?.dream_world?.front_default ||
            pokemon?.data?.sprites?.front_default
          }
          alt="pokemon"
          loading="lazy"
          className="p-5 w-80 h-80"
        />

        <main>
          <h1 className="xl:text-3xl text-xl font-montserrat-bold text-pokedex capitalize">
            {pokemon.data?.name}
          </h1>

          <table className="w-full mt-5">
            <tbody>
              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Species:</strong>
                </td>
                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                  {pokemon.data?.species?.name}
                </td>
              </tr>

              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Types:</strong>
                </td>

                <td className="flex gap-2 rounded-tr-lg rounded-br-lg">
                  {pokemon.data?.types?.map((singleType, i) => (
                    <td
                      key={i}
                      className={"rounded px-2 mt-1.5 " + singleType.type?.name}
                    >
                      {singleType.type?.name}
                    </td>
                  ))}
                </td>
              </tr>

              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Abilities:</strong>
                </td>

                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                  {pokemon.data?.abilities
                    ?.map((singleAbility) => singleAbility.ability?.name)
                    .join(", ")}
                </td>
              </tr>

              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Moves:</strong>
                </td>

                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                  {pokemon.data?.moves
                    ?.map((singleMove) => singleMove.move?.name)
                    .slice(0, 3)
                    .join(", ") || "Unknown"}
                </td>
              </tr>

              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Height:</strong>
                </td>
                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                  {Number(pokemon.data?.height) / 10}m,
                </td>
              </tr>

              <tr className="odd:bg-slate-100">
                <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg">
                  <strong className="text-gray-400">Weight:</strong>
                </td>
                <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
                  {Number(pokemon.data?.weight) / 10}kg
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </AppLayout>
  );
};

export default PokemonInfo;
