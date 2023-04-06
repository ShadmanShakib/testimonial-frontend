import React, { useState } from "react";

interface SwitchProps {
  label: string;
  onChange: (isChecked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <div className="flex items-center justify-between">
      <div>{label}</div>
      <label className="group relative flex items-center gap-2 text-sm font-medium text-gray-600">
        <input
          type="checkbox"
          className="peer absolute left-1/2 hidden h-full w-full -translate-x-1/2 rounded-md"
          checked={isChecked}
          onChange={handleSwitchChange}
        />
        <span className="flex h-6 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:bg-purple-600 peer-checked:after:translate-x-6">
          <span className="sr-only"></span>
        </span>
        <span></span>
      </label>
    </div>
  );
};

export default Switch;
