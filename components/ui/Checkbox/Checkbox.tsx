import React from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  checked,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <div className="flex items-center gap-2 ">
      <input
        type="checkbox"
        className="checked:bg-primary checked:focus:bg-primary-400 hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <div className="flex-grow">
        <div className="block text-sm font-medium text-gray-800">
          <div className="flex items-center gap-2">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
