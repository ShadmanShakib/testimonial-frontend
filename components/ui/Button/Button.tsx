import React from "react";
import cn from "classnames";
import IButton from "./type";
function Button(props: IButton) {
  return (
    <button
      type="submit"
      className=" block appearance-none rounded-md bg-brand px-3 py-2 text-sm font-medium text-white duration-100 hover:bg-purple-400 focus:bg-purple-400 focus:outline-none disabled:opacity-75"
    >
      <span className="inline-block px-1 py-0.5">{props.title}</span>
    </button>
  );
}

export default Button;
