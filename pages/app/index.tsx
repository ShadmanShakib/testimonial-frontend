import React from "react";
import { Sidebar } from "@/components/common";
import { Title, SearchBox, Button, Table } from "@/components/ui";
function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="overflow-y-sroll relative h-full flex-grow px-6 sm:px-10">
        <div className="flex min-h-[34px] items-center">
          <Title title="Your Testimonials" />
          <div className="flex-grow"></div>
          <div>
            <button
              id="headlessui-menu-button-23"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 text-gray-600"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <SearchBox />
          <Button title="Search" variant="primary" />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
