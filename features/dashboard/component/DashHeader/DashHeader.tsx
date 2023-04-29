import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { DashHeaderProps } from "./types";

function DashHeader(props: DashHeaderProps) {
  return (
    <header className="mx-4 w-full ">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col  gap-2">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <h4>{props.description}</h4>
        </div>
        <button
          onClick={props.onCreateNew}
          className="flex items-center overflow-hidden rounded bg-purple-600 p-2 text-white "
        >
          <PlusIcon height={18} width={18} />

          <span className="ml-1">Create new</span>
        </button>
      </div>
    </header>
  );
}

export default DashHeader;
