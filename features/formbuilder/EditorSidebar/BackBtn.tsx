import React from "react";

export default function BackBtn() {
  return (
    <div className="flex justify-between">
      <a className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50">
        <span className="pr-2">←</span>
        Forms
      </a>
      <button className="flex h-8 w-8 flex-none items-center justify-center rounded-full border bg-white text-gray-600 shadow-sm">
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
          className="-ml-0.5"
        >
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
    </div>
  );
}
