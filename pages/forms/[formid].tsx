import React from "react";
import { EditorSidebar, Preview } from "@/features/formbuilder";
import { Modal } from "@/components/ui";
import { useFormContext, useUiContext } from "@/lib/context";
export default function FormId() {
  const { closeModal, modalIsOpen } = useUiContext();
  const { setLogo } = useFormContext();

  return (
    <div className="flex h-full w-full">
      <Modal
        setLogo={setLogo}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <EditorSidebar />
      <Preview />
    </div>
  );
}
