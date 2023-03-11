import React from "react";
import { EditorSidebar, Preview } from "@/features/formbuilder";

export default function FormId() {
  return (
    <div className="flex h-full w-full">
      <EditorSidebar />
      <Preview />
    </div>
  );
}
