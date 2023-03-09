import { VideoSvg } from "@/components/icons";
import React from "react";

function PreviewCard() {
  return (
    <div className="flex items-center">
      <button className="w-full rounded-md bg-purple-600 py-2 px-4 text-white">
        <span className="flex items-center justify-center gap-2">
          <VideoSvg />
          <span className="block">Record a video</span>
        </span>
      </button>
    </div>
  );
}

export default PreviewCard;
