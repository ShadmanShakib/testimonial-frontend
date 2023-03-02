import React from "react";
import { DownSvg, DesignSvg } from "@/components/icons";
import Content from "./Content";
function DesignBtn() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="">
      <div className="border-b">
        <button
          onClick={() => setShow(!show)}
          className="flex w-full items-center gap-4 py-4 duration-100 "
        >
          <DownSvg show={show} />
          <DesignSvg />
          <div className="">Design</div>
          <div className="flex-grow"></div>
        </button>
      </div>
      {show && <Content />}
    </div>
  );
}

export default DesignBtn;
