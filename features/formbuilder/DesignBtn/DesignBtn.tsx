import React from "react";
import { DownSvg, DesignSvg } from "@/components/icons";
import Content from "./Content";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";
function DesignBtn() {
  const { sidebarIsExpanded, setSidebarExpand } = useUiContext();
  const show = sidebarIsExpanded === "design";
  const handleClick = () => {
    const show = sidebarIsExpanded === "design";
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("design");
    }
  };
  return (
    <div className="">
      <ExpandBtn
        handleClick={handleClick}
        show={sidebarIsExpanded === "design"}
        title="Design"
        icon={<DesignSvg />}
      />
      {show && <Content />}
    </div>
  );
}

export default DesignBtn;
