import React from "react";
import { SidebarBtn } from "@/components/ui";
import {
  FormIcon,
  LoveIcon,
  SearchIcon,
  TagIcon,
  TeamIcon,
} from "@/components/icons";
export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-gray-50 pt-4">
      <div className="">
        <button className="">
          <div className="flex items-center">
            <p>John Cena</p>
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
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>
        <SidebarBtn title="form">
          <FormIcon />
        </SidebarBtn>
        <div>
          <div className="font-heading mb-2 px-2 text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
            Manage
          </div>
          <SidebarBtn title="Testimonials">
            <LoveIcon />
          </SidebarBtn>
          <SidebarBtn title="Search">
            <SearchIcon />
          </SidebarBtn>
          <SidebarBtn title="Tags">
            <TagIcon />
          </SidebarBtn>
          <SidebarBtn title="Team">
            <TeamIcon />
          </SidebarBtn>
        </div>
      </div>
    </aside>
  );
}
