import React from "react";
import { Sidebar } from "@/components/common";
import { Header, FormList } from "@/features/formbuilder";
function Forms() {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="relative h-full flex-grow pt-8 pb-16 sm:pt-10">
        <div className="relative px-6">
          <Header />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <FormList />
        </div>
      </div>
    </main>
  );
}

export default Forms;
