import React from "react";
import { Sidebar } from "@/features/dashboard/components";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="relative h-full flex-grow overflow-y-scroll px-6 sm:px-10">
        <div className="pb-16 pt-8 sm:pt-10 h-full">{children}</div>
      </div>
    </section>
  );
}
