/* eslint-disable @next/next/no-img-element */
import React from "react";

function Table() {
  return (
    <table className="table:fixed hidden min-w-[600px] divide-y divide-gray-200 sm:table ">
      <thead>
        <tr>
          <th scope="col" className="px-4 pt-3 pb-2 ">
            <div className="flex items-center gap-2 ">
              <input
                name=""
                id=""
                type="checkbox"
                className="checked:bg-primary checked:focus:bg-primary-400 hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed"
              />
              <div className="flex-grow">
                <div className="block text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </th>
          <th scope="col" className="table-header svelte-ff5ash">
            <span className="">Person</span>
          </th>
          <th scope="col" className="table-header svelte-ff5ash">
            Testimonial
          </th>
          <th scope="col" className="table-header svelte-ff5ash">
            <button className="flex items-center gap-1 text-left">
              Date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M11 5h10"></path>
                <path d="M11 9h7"></path>
                <path d="M11 13h4"></path>
                <path d="m3 17 3 3 3-3"></path>
                <path d="M6 18V4"></path>
              </svg>
            </button>
          </th>
          <th scope="col" className="table-header svelte-ff5ash">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr className="cursor-pointer align-top duration-100 hover:bg-gray-50">
          <td className="text-col svelte-ygkm9o">
            <div className="flex items-center gap-2 ">
              <input
                name=""
                id=""
                type="checkbox"
                className="checked:bg-primary checked:focus:bg-primary-400 hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed"
              />
              <div className="flex-grow">
                <div className="block text-sm font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td className="p-4  ">
            <div className="flex min-w-[10rem] max-w-[15rem] gap-2">
              <div className="relative flex-none">
                <div className="relative">
                  <div className="sj-avatar-container  svelte-173satm">
                    <img
                      src="https://senjaio.b-cdn.net/public/media/olly_wOe1Ir2D6.jpeg?width=100&amp;height=100"
                      alt="Oliver Meakings avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-1">
                    <div className="rounded-full bg-white/75 p-1 backdrop-blur-sm">
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center truncate">
                <div className="truncate whitespace-pre-wrap text-gray-900">
                  Oliver Meakings
                </div>
                <div className="truncate whitespace-pre-wrap">
                  Co-founder of Senja
                </div>
              </div>
            </div>
          </td>
          <td className="p-4">
            <div className="h-full min-w-[18rem] max-w-[25rem] ">
              <div className="row-content truncate whitespace-pre-wrap text-gray-600">
                Hey! Its Olly here, co-founder of Senja. This is a dummy review
                thatll show you how a testimonial works 😄.
              </div>
              <div className="mt-2 -ml-1 flex flex-wrap gap-1"></div>
            </div>
          </td>
          <td className="flex-nowrap whitespace-nowrap p-4">
            <div className="flex-none text-xs">Feb 4, 2023</div>
          </td>
          <td className="p-4">
            <div className="flex">
              <button className="rounded-full border-[1.5px] border-emerald-500/0 bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-600 duration-200 hover:border-emerald-500">
                Approved
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
