import React from "react";
import { useFormContext } from "@/lib/context";
import Image from "next/image";
import { useUiContext } from "@/lib/context";
function Content() {
  const { backgroundColor, setBgColor, primaryColor, setPrimaryColor, logo } =
    useFormContext();
  const { setIsModal } = useUiContext();

  return (
    <div className="py-4">
      <div className="flex flex-col items-start gap-4">
        <h1>Logo</h1>
        <button
          onClick={() => setIsModal()}
          className="mt-2 text-left duration-100 hover:opacity-80"
        >
          <div className="flex h-20 w-48 min-w-[156px] flex-col items-center justify-center rounded-md border bg-white px-4 py-2">
            <Image
              width={100}
              height={40}
              alt=""
              src={logo ? logo : "/next.svg"}
            />
          </div>
        </button>
      </div>
      <div className="flex w-full gap-4">
        {/* Primary color picker */}
        <div className="w-full">
          <div>
            <div className="block text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                Primary Color
                <div></div>
              </div>
            </div>
            {/* Input */}
            <div className=" mt-2 flex items-center rounded-md border bg-white px-2 duration-100 focus-within:border-purple-600 focus-within:ring-4 focus-within:ring-purple-600/10">
              <div className="relative">
                <button
                  type="button"
                  style={{ backgroundColor: `${primaryColor}` }}
                  className={`mt-1 h-6 w-6 rounded-full border `}
                ></button>
                <div className="absolute top-0">
                  <input
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    tabIndex={-1}
                    type="color"
                    className="h-6 w-6 opacity-0"
                  />
                </div>
              </div>
              {/* primary color input */}
              <input
                type="text"
                className="w-full border-none focus:ring-0 "
                defaultValue={primaryColor}
                placeholder="#3b10b1"
                value={primaryColor}
                name=""
                id=""
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
          <div className="mt-2 flex w-full items-center rounded-md border bg-white px-2 duration-100 focus-within:border-purple-600 focus-within:ring-4 focus-within:ring-purple-600/10">
            <div className="relative">
              <button
                style={{ backgroundColor: `${backgroundColor}` }}
                type="button"
                className="mt-1 h-6 w-6 rounded-full border"
              ></button>
              <div className="absolute top-0">
                <input
                  onChange={(e) => setBgColor(e.target.value)}
                  tabIndex={-1}
                  type="color"
                  className="h-6 w-6 opacity-0"
                />
              </div>
            </div>
            <input
              type="text"
              className=" w-full border-none focus:ring-0"
              placeholder="#4e46e5"
              name=""
              id=""
              value={backgroundColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
