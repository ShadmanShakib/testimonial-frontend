import React from "react";
import Link from "next/link";
import {
  Link2Icon,
  CopyIcon,
  TrashIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
interface CardProps {
  name: string;
}
function Card(props: CardProps) {
  const { name } = props;
  return (
    <div className="block rounded-lg hover:bg-gray-50">
      <div className="group flex items-center gap-4 px-4 py-2.5 ">
        <div className="flex items-center gap-2">
          <input
            name=""
            id=""
            type="checkbox"
            className="hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm checked:bg-brand focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-brand disabled:cursor-not-allowed"
          />
        </div>
        <Link
          className="flex flex-grow items-center gap-4 overflow-x-hidden"
          href="/forms/faas"
        >
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
            <div className="text-lg font-medium">{name}</div>
            <div className="flex items-center gap-1 truncate">
              0 responses. Created on Feb 4, 2023
            </div>
          </div>
        </Link>
        {/* hidden icon buttons show on hover */}
        <div className="hidden  items-center text-gray-500 group-hover:flex">
          <button className="rounded-md p-1.5 hover:bg-gray-100">
            <Link2Icon height={18} width={18} />
          </button>
          <button className="rounded-md p-1.5 hover:bg-gray-100">
            <Pencil2Icon height={18} width={18} />
          </button>
          <button className="rounded-md p-1.5 hover:bg-gray-100">
            <CopyIcon height={18} width={18} />
          </button>
          <button className="rounded-md p-1.5 hover:bg-gray-100">
            <TrashIcon
              fill="currentColor"
              className="text-red-500"
              height={18}
              width={18}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
