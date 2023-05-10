"use client";
import React from "react";
import DropDown from "./DropDown";
import { useUiContext } from "@/lib/context/ui";
type Props = {};

export default function Sidebar({}: Props) {
  const { isDropdown, setIsDropdown } = useUiContext();

  return (
    <aside className="hidden min-h-screen w-64 flex-none sm:block bg-gray-50">
      <div className="px-4 pb-4 relative">
        <DropDown isOpen={isDropdown} onOpenChage={setIsDropdown} />
      </div>
    </aside>
  );
}
