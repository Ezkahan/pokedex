import { NavLink } from "react-router-dom";
import Pokemon from "../../assets/logo.png";

const Logo: React.FC = () => {
  return (
    <NavLink
      to="/"
      className="flex items-center justify-center gap-3 xl:py-5 py-3 bg-white"
    >
      <img src={Pokemon} alt="Logo" className="xl:w-10 w-8" />
      <h1 className="font-pokemon text-2xl xl:text-3xl text-pokedex tracking-widest">
        Pokedex
      </h1>
    </NavLink>
  );
};

export default Logo;
