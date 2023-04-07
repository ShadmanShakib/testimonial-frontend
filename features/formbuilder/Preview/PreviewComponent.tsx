import React from "react";
import { useFormContext, useUiContext } from "@/lib/context";
import {
  DesignPreview,
  ResponsePreview,
  AttributePreview,
  TnxPreview,
} from "@/features/formbuilder";

interface PreviewBoxProps {
  backgroundColor: string;
}

export default function PreviewBox({ backgroundColor }: PreviewBoxProps) {
  const { activePreview } = useUiContext();
  let previewComponent;

  switch (activePreview) {
    case "response":
      previewComponent = <ResponsePreview />;
      break;
    case "attribute":
      previewComponent = <AttributePreview />;
      break;
    case "thanks":
      previewComponent = <TnxPreview />;
      break;
    default:
      previewComponent = <DesignPreview />;
  }

  return (
    <div className="flex h-full flex-col items-center overflow-y-scroll px-8 pt-8 pb-12">
      <div
        style={{ backgroundColor }}
        className="flex h-[90%] w-full flex-none flex-col  overflow-hidden rounded-md shadow-xl  ring-4 ring-gray-800"
      >
        <div className="flex h-full flex-col items-center justify-center  px-4 pt-12 pb-8">
          {previewComponent}
        </div>
      </div>
    </div>
  );
}
