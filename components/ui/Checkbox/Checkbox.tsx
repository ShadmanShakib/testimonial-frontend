import React from "react";

export default function Checkbox(props: ICheckbox) {
  return (
    <div className="flex items-center gap-2 ">
      <input
        checked={props.checked}
        type="checkbox"
        className="block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm checked:bg-purple-600 hover:checked:bg-purple-400 focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-purple-400 disabled:cursor-not-allowed"
      />
      <div className="flex-grow">
        <label className="block text-sm font-medium text-gray-800">
          <div className="flex items-center gap-2">
            {props.label} <div></div>
          </div>
        </label>
      </div>
    </div>
  );
}

interface ICheckbox extends HTMLInputElement {
  label: string;
}
