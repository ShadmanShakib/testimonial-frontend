import React from "react";

export default function Item() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        <input
          className="appearance-none rounded-md bg-center checked:bg-purple-600 focus:outline-none focus:ring-0 checked:focus:bg-purple-600"
          type="checkbox"
        />
      </div>
      <div className="rounded-md border bg-white px-0.5 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="rgb(239 68 68)" d="M16 6H3"></path>
          <path stroke="rgb(59 130 246)" d="M11 12H3"></path>
          <path stroke="rgb(59 130 246)" d="M21 12h-6"></path>
          <path stroke="rgb(245 158 11)" d="M16 18H3"></path>
        </svg>
      </div>
      <div className=" ml-4">
        <div className="text-lg font-medium">Notion Testimonial Form</div>
        <div className="flex items-center gap-1 truncate">
          0 responses. Created on Feb 4, 2023
        </div>
      </div>
    </div>
  );
}
