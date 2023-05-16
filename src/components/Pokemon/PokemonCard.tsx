import { NavLink } from "react-router-dom";
import { useGetPokemonQuery } from "../../store/pokemonApi";
import { Variants, motion } from "framer-motion";

type PokemonCardType = {
  name: string;
};

const PokemonCard: React.FC<PokemonCardType> = ({ name }) => {
  const { pokemon } = useGetPokemonQuery(name, {
    selectFromResult: ({ data }) => ({ pokemon: data }),
  });

  const style = `col-span-12 lg:col-span-3 xl:col-span-2 p-3 rounded-lg flex flex-col items-center ${pokemon?.types[0]?.type?.name} bg-slate-200`;

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0, y: "10%", scale: 0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardsContainerVariants}
      initial="hidden"
      whileInView="show"
      className={style}
    >
      <NavLink to={`pokemon/${name}`}>
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt={pokemon?.name}
          className="h-32"
        />

        <h1 className="text-xl capitalize font-montserrat-bold mt-3">
          {pokemon?.name}
        </h1>
        <p>#{pokemon?.id}</p>
      </NavLink>
    </motion.div>
  );
};

export default PokemonCard;
