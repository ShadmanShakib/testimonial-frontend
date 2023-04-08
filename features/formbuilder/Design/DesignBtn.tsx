import React from "react";
import { DownSvg, DesignSvg } from "@/components/icons";
import Content from "./Content";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";
function DesignBtn() {
  const { sidebarIsActive, setSidebarIsActive, setActivePreview } =
    useUiContext();
  const show = sidebarIsActive === "design";
  const handleClick = () => {
    const show = sidebarIsActive === "design";
    if (show) {
      setSidebarIsActive(null);
    } else {
      setSidebarIsActive("design");
      setActivePreview("default");
    }
  };
  return (
    <div className="">
      <ExpandBtn
        handleClick={handleClick}
        show={sidebarIsActive === "design"}
        title="Design"
        icon={<DesignSvg />}
      />
      {show && <Content />}
    </div>
  );
}

export default DesignBtn;
