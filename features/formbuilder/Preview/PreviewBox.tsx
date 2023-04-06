import React from "react";
import { useFormContext, useUiContext } from "@/lib/context";
import { DesignPreview, ResponsePreview } from "@/features/formbuilder";
export default function PreviewBox() {
  const { backgroundColor } = useFormContext();
  const { sidebarIsActive } = useUiContext();
  return (
    <div className="flex h-full flex-col items-center overflow-y-scroll px-8 pt-8 pb-12">
      <div
        style={{ backgroundColor: `${backgroundColor}` }}
        className="flex h-[90%] w-full flex-none flex-col  overflow-hidden rounded-md shadow-xl  ring-4 ring-gray-800"
      >
        <div className="flex h-full flex-col items-center justify-center  px-4 pt-12 pb-8">
          {sidebarIsActive === "response" ? (
            <ResponsePreview />
          ) : (
            <DesignPreview />
          )}
        </div>
      </div>
    </div>
  );
}
