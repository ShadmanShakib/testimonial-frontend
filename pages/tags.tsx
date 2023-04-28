import React from "react";
import { Sidebar } from "@/components/common";
import { DashHeader } from "@/features/dashboard/component";

function Tags() {
  return (
    <main className="flex">
      <Sidebar />
      <DashHeader
        title="Your tags"
        description="Tags help you organize your testimonials."
        onCreateNew={() => {}}
      />
    </main>
  );
}

export default Tags;
