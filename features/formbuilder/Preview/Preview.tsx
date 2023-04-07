import React from "react";
import { LaptopSvg, PhoneSvg } from "@/components/icons";
import PreviewComponent from "./PreviewComponent";
import { useFormContext } from "@/lib/context";
function Preview() {
  const { backgroundColor } = useFormContext();
  return (
    <div className="h-screen flex-grow bg-gray-200 md:block">
      <div className="flex items-center justify-center">
        <div className="flex  rounded-lg bg-gray-300 p-2 ">
          <button>
            <LaptopSvg />
          </button>
          <button>
            <PhoneSvg />
          </button>
        </div>
      </div>
      <PreviewComponent backgroundColor={backgroundColor} />
    </div>
  );
}

export default Preview;
