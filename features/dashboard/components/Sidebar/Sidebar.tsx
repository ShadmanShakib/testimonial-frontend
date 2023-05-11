"use client";
import React from "react";
import DropDown from "./DropDown";
import { useUiContext } from "@/lib/context/ui";
import SidebarButton from "./SidebarButton";
import { Heart, Download, Package2, Search, Tag } from "lucide-react";
type Props = {};

export default function Sidebar({}: Props) {
  const { isDropdown, setIsDropdown } = useUiContext();

  return (
    <aside className="hidden min-h-screen w-64 flex-none sm:block bg-gray-50">
      <div className="px-4 pb-4 relative flex flex-col">
        <DropDown isOpen={isDropdown} onOpenChage={setIsDropdown} />
        <div className="flex flex-col  gap-0.5">
          <SidebarButton href="/forms" icon={<Package2 />} name="Forms" />
          <SidebarButton
            href="/import"
            icon={<Download />}
            name="Import Testimonials"
          />
          <SidebarButton href="/" icon={<Heart />} name="Testimonials" />
          <SidebarButton href="/tags" icon={<Tag />} name="Tags" />

          <SidebarButton href="/search" icon={<Search />} name="Search" />
        </div>
      </div>
    </aside>
  );
}
