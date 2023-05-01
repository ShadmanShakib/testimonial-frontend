import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import { DashHeaderProps } from "./types";
import { Button } from "@ui/button";

function DashHeader(props: DashHeaderProps) {
  return (
    <header className="mx-4 w-full ">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col  gap-2">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <h4>{props.description}</h4>
        </div>
        <Button onClick={props.onCreateNew}>
          <PlusIcon className=" h-4 w-4" color="white" height={18} width={18} />
          <div className="ml-2"> Create new</div>
        </Button>
      </div>
    </header>
  );
}

export default DashHeader;
