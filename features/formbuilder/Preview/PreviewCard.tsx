import { VideoSvg, PenSvg } from "@/components/icons";
import React from "react";
import { useTestimonidal } from "@/lib/context/Testimonial";
import { useFormContext } from "@/lib/context";
import Image from "next/image";
function PreviewCard() {
  const { primaryColor, logo } = useFormContext();
  const { title, message } = useTestimonidal();
  return (
    <div className="relative w-full max-w-lg shadow-md">
      <div className="showdow-xl flex flex-col justify-items-stretch rounded-xl bg-white px-2 py-4">
        <div className="flex items-center justify-between ">
          <Image height={48} width={48} alt="logo" src="/next.svg" />
        </div>
        <div className="mt-8 ">
          <h1 className="text-xl font-medium ">{title} </h1>
          <div className=" mt-4">{message}</div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              style={{ backgroundColor: `${primaryColor}` }}
              className="w-full rounded-md py-2 px-4 text-white"
            >
              <span className="flex items-center justify-center gap-2">
                <VideoSvg />
                <span className="block">Record a video</span>
              </span>
            </button>
            <button className="w-full rounded-md bg-gray-200 py-2 px-4 ">
              <span className="flex items-center justify-center gap-2">
                <PenSvg />
                <span className="block">Write a review</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
