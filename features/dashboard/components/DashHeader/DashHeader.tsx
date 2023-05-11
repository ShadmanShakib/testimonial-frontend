import React from "react";
import { Button } from "@ui/button";
import { Plus } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export default function DashHeader({ title, description }: Props) {
  return (
    <div className="flex items-center gap-2">
      {/* Title */}
      <div className="">
        <h1 className="text-lg ">{title}</h1>
        <p className="mt-1 text-zinc-500">{description}</p>
      </div>
      <div className="flex-grow"></div>
      {/* Side button */}
      <div>
        <Button>
          <div>
            <Plus />
          </div>
          <span>Create New</span>
        </Button>
      </div>
    </div>
  );
}