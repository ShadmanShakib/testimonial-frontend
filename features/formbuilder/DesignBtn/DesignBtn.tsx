import React from "react";
import { DownSvg, DesignSvg } from "@/components/icons";
import Content from "./Content";
import ExpandBtn from "../ExpandBtn";
function DesignBtn() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="">
      <ExpandBtn
        handleClick={() => setShow(!show)}
        show={show}
        title="Design"
        icon={<DesignSvg />}
      />
      {show && <Content />}
    </div>
  );
}

export default DesignBtn;
