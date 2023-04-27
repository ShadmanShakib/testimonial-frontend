import React from "react";
interface DashHeaderProps {
  onCreateNew: () => void;
}
function DashHeader(props: DashHeaderProps) {
  return (
    <header>
      <div className="flex  items-center gap-2 ">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-semibold">Your Forms</h1>
          <button
            onClick={props.onCreateNew}
            className="flex items-center overflow-hidden rounded bg-purple-600 p-2 text-white "
          >
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
            <span className="ml-1">Create new</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashHeader;
