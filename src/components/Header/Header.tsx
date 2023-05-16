import { useNavigate } from "react-router-dom";
import { options } from "../../common/options";
import { useGetPokemonQuery } from "../../store/pokemonApi";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { useState } from "react";

type HeaderType = {
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Header: React.FC<HeaderType> = ({ handleSelect }) => {
  const [name, setName] = useState<string>("");
  const pokemon = useGetPokemonQuery(name);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pokemon.isSuccess && navigate(`/pokemon/${name}`);
  };

  return (
    <header className="flex xl:flex-row flex-col xl:items-center gap-5 mt-5 mb-10">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
        <Input
          id="search"
          name="search"
          placeholder="Name or number"
          value={name}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2.5 rounded-lg"
        >
          Search
        </button>
      </form>

      <div className="flex items-center gap-2 bg-white rounded-lg px-4">
        <p className="text-gray-500">Show:</p>
        <Select name="perPage" onChange={handleSelect} options={options} />
        <p>pokemons</p>
      </div>
    </header>
  );
};

export default Header;
