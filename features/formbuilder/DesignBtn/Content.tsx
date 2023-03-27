import React from "react";
import { useFormContext } from "@/lib/context";
function Content() {
  const { backgroundColor, setBgColor } = useFormContext();
  return (
    <div className="py-4">
      <div className="flex flex-col gap-4">
        <h1>Logo</h1>
        <button className="mt-2 text-left duration-100 hover:opacity-80">
          <div className="flex h-20 min-w-[156px] flex-col items-center justify-center rounded-md border bg-white px-4 py-2"></div>
        </button>
      </div>
      <div className="flex w-full gap-4">
        {/* Button color picker */}
        <div className="w-full">
          <div>
            <div className="block text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                Primary Color <div></div>
              </div>
            </div>
            {/* Input */}
            <div className=" mt-2 flex items-center rounded-md border bg-white px-2 duration-100 focus-within:border-purple-600 focus-within:ring-4 focus-within:ring-purple-600/10">
              <div className="relative">
                <button
                  type="button"
                  className="mt-1 h-6 w-6 rounded-full border"
                ></button>
                <div className="absolute top-0">
                  <input
                    tabIndex={-1}
                    type="color"
                    className="h-6 w-6 opacity-0"
                  />
                </div>
              </div>
              {/* background color input */}
              <input
                type="text"
                className="w-full border-none focus:ring-0 "
                placeholder="#4e46e5"
                name=""
                id=""
                value={backgroundColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Background Color Picker */}
        <div className="w-full">
          <div className="">
            <div className="block text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                Background Color <div></div>
              </div>
            </div>
          </div>
          <div className="focus-within:border-primary-base focus-within:ring-primary-light/10 mt-2 flex w-full items-center rounded-md border bg-white px-2 duration-100 focus-within:ring-4">
            <div className="relative">
              <button
                type="button"
                className="mt-1 h-6 w-6 rounded-full border"
              ></button>
              <div className="absolute top-0">
                <input
                  tabIndex={-1}
                  type="color"
                  className="h-0 w-0 opacity-0"
                  name=""
                  id=""
                />
              </div>
            </div>
            <input
              type="text"
              className=" w-full border-none focus:ring-0"
              placeholder="#4e46e5"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
