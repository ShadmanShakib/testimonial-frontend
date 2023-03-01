import React from "react";
import { DownSvg, DesignSvg } from "@/components/icons";

function DesignBtn() {
  return (
    <div className="border-b">
      <button className="flex w-full items-center gap-4 py-4 duration-100 ">
        <DownSvg />
        <DesignSvg />
        <div className="">Design</div>
        <div className="flex-grow"></div>
      </button>
    </div>
  );
}

export default DesignBtn;
