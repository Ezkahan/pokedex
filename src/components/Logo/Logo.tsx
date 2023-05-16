import { NavLink } from "react-router-dom";
import Pokemon from "../../assets/logo.png";

const Logo: React.FC = () => {
  return (
    <NavLink
      to="/"
      className="flex items-center justify-center gap-3 py-5 bg-white"
    >
      <img src={Pokemon} alt="Logo" className="w-10" />
      <h1 className="font-pokemon text-3xl text-pokedex tracking-widest">
        Pokedex
      </h1>
    </NavLink>
  );
};

export default Logo;
