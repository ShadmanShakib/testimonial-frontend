import React from "react";
import { IFormHeader } from "./types";
import { PlusIcon } from "@radix-ui/react-icons";
export default function FormHeader(props: IFormHeader) {
  return (
    <div className="flex  items-center gap-2 ">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-semibold">Your Forms</h1>
        <button
          onClick={props.onCreateNew}
          className="flex items-center overflow-hidden rounded bg-purple-600 p-2 text-white "
        >
          <PlusIcon color="white" className="fill-current text-white" />
          <span className="ml-1">Create new</span>
        </button>
      </div>
    </div>
  );
}
