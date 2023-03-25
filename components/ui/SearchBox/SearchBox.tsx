import React from "react";

function SearchBox() {
  return (
    <div className="flex flex-grow items-center gap-2 rounded-md border bg-white px-2.5 py-2 text-zinc-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-500"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        className="w-full border-none bg-transparent px-0 py-0 text-sm focus:ring-0"
        placeholder="Search for a testimonial, a name or an email..."
      />
      <div className="relative flex h-full items-center">
        <button
          id="headlessui-popover-button-25"
          type="button"
          aria-expanded="false"
          className="flex h-full items-center rounded p-0.5 text-gray-500"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="transparent"></rect>
            <line
              x1="64"
              y1="128"
              x2="192"
              y2="128"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="24"
              y1="80"
              x2="232"
              y2="80"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="104"
              y1="176"
              x2="152"
              y2="176"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg>
        </button>{" "}
      </div>
    </div>
  );
}

export default SearchBox;
