import React from "react";
import { IoSearchOutline } from "react-icons/io5";

type InputType = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputType> = ({
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg w-full">
      <IoSearchOutline size={24} className="text-slate-500" />

      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className="placeholder:text-gray-300 w-full outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
