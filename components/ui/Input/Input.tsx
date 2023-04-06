import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends UseFormRegisterReturn {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  disabled,
  ...register
}) => {
  return (
    <div className="flex flex-col gap-2 ">
      {label && (
        <label className="text-sm font-medium text-gray-600">{label}</label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="block flex-grow rounded-md rounded-r-md border border-gray-300 py-2.5 px-2 text-sm focus:border-purple-500 focus:ring-purple-600 disabled:opacity-60"
        disabled={disabled}
        {...register}
      />
    </div>
  );
};

export default Input;
