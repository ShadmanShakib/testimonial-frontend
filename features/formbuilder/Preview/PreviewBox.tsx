import React from "react";
import PreviewCard from "./PreviewCard";
export default function PreviewBox() {
  return (
    <div className="flex h-full flex-col items-center overflow-y-scroll px-8 pt-8 pb-12">
      <div className="flex h-[90%] w-full flex-none flex-col overflow-hidden rounded-md bg-gray-50 shadow-xl  ring-4 ring-gray-800">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-12 pb-8">
          <PreviewCard />
        </div>
      </div>
    </div>
  );
}
