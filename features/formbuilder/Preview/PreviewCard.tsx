import { VideoSvg, PenSvg } from "@/components/icons";
import React from "react";
import { useTestimonidal } from "@/lib/context/Testimonial";
function PreviewCard() {
  const { title } = useTestimonidal();
  return (
    <div className="relativew-full max-w-lg shadow-md">
      <div className="showdow-xl flex flex-col justify-items-stretch rounded-xl bg-white px-2 py-4">
        <h1 className="text-xl font-medium ">{title}</h1>
        <div className=" mt-4">
          <p>Do you love using our product? We do love to hear about it!</p>
          <ul>
            <li>
              Share your experience with a quick video or text testimonial
            </li>
            <li>Recording a video? Dont forget to smile 😊</li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button className="w-full rounded-md bg-purple-600 py-2 px-4 text-white">
            <span className="flex items-center justify-center gap-2">
              <VideoSvg />
              <span className="block">Record a video</span>
            </span>
          </button>
          <button className="secondary-btn w-full">
            <span className="flex items-center justify-center gap-2">
              <PenSvg />
              <span className="block">Write a review</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
