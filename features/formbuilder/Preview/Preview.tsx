import React from "react";

function Preview() {
  return (
    <div className="h-screen flex-grow bg-gray-200 md:block">
      <div className="flex h-full flex-col items-center overflow-y-scroll px-8 pt-8 pb-12">
        <div className="flex h-[90%] w-full flex-none flex-col overflow-hidden rounded-md bg-gray-50 shadow-xl  ring-4 ring-gray-800">
          This is preveiw box
        </div>
      </div>
    </div>
  );
}

export default Preview;
