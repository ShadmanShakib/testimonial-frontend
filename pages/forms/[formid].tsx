import React from "react";
import { EditorSidebar, Preview } from "@/features/formbuilder";
import { Modal } from "@/components/ui";
import { useUiContext } from "@/lib/context";
export default function FormId() {
  const { setIsModal } = useUiContext();

  return (
    <div className="flex h-full w-full">
      <Modal onClick={setIsModal} />
      <EditorSidebar />
      <Preview />
    </div>
  );
}
