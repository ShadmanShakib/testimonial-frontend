import React from "react";
import Image from "next/image";
import { StarSvg } from "@/components/icons";
function Card() {
  return (
    <div className="relative h-96 w-72 ">
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/60 to-black/0 "></div>
      <div className="absolute inset-x-0 bottom-0">
        <div className="p-6 text-white">
          <div className="mb-2">
            <div className="flex">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
            </div>
          </div>
          <div className="text-xl font-bold">Alastair Budge</div>
          <div className="text-sm font-medium opacity-80">
            Founder of Leonardo English
          </div>
        </div>
      </div>
      <Image
        className="abosolute rounded-md bg-gray-100"
        fill
        src="/images/swiperimage.webp"
        alt="image"
      />
    </div>
  );
}

export default Card;
