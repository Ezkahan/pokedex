import { useSearchParams } from "react-router-dom";
import { IOption } from "../../common/interfaces/IOption";

type SelectType = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
};

const Select: React.FC<SelectType> = ({ name, options, onChange }) => {
  const [searchParams] = useSearchParams();

  return (
    <select
      onChange={onChange}
      name={name}
      className="bg-white py-3 rounded-lg outline-none"
    >
      {options.map((option, index) => {
        return (
          <option
            key={index}
            value={option.value}
            selected={
              option.value === parseInt(searchParams.get("perPage") as string)
            }
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
