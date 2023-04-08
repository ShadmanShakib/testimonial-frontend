import React from "react";
import { ISwitch } from "./types";

function Switch(props: ISwitch) {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="relative">
      <div className="flex">
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="peer h-6 w-11 rounded-full bg-gray-200  after:absolute  after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            {props.label}
          </span>
        </label>
      </div>
    </div>
  );
}

export default Switch;
