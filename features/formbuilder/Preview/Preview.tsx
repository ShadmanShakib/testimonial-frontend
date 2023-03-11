import React from "react";
import { LaptopSvg, PhoneSvg } from "@/components/icons";
import PreviewBox from "./PreviewBox";
function Preview() {
  return (
    <div className="h-screen flex-grow bg-gray-200 md:block">
      <div className="flex rounded-lg bg-gray-300 p-1">
        <button>
          <LaptopSvg />
        </button>
        <button>
          <PhoneSvg />
        </button>
      </div>
      <PreviewBox />
    </div>
  );
}

export default Preview;
