import React from "react";

export default function Header() {
  return (
    <div className="flex  items-center gap-2 ">
      <div>
        <h1 className="text-xl font-semibold">Your Forms</h1>
        <p className="mt-1 text-zinc-500">
          Use forms to collect testimonials from your users.
        </p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex ">
        <button className="overflow-hidden rounded bg-purple-600 p-1 text-white">
          <div className="flex h-full items-center">
            <div className="bg-primary-300 flex flex-col justify-center self-stretch rounded-sm px-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <div className="py-1.5 px-2 text-sm font-medium">Create new</div>
          </div>
        </button>
      </div>
    </div>
  );
}
