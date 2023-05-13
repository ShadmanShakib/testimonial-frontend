import React from "react";
import { Input } from "@/components/ui";

type Props = {
  name: string;
  details: string;
};

export default function FormItem({ name, details }: Props) {
  return (
    <div className="block rounded-lg hover:bg-gray-50">
      <div className="group flex items-center gap-4 px-4 py-2.5">
        <div>
          <div className="flex items-center gap-2">
            <Input type="checkbox" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1>{name}</h1>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}
