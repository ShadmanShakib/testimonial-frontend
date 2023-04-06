import React, { useState } from "react";
import ExpandBtn from "../ExpandBtn";
import { AttributeSvg } from "@/components/icons";
import { useUiContext } from "@/lib/context";
import AttributeExpanded from "./AttributeExpanded";
function AttributeSidebar() {
  const { sidebarIsActive, setSidebarExpand } = useUiContext();
  const show = sidebarIsActive === "attribute";
  const handleClick = () => {
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("attribute");
    }
  };

  return (
    <div>
      <ExpandBtn
        icon={<AttributeSvg />}
        handleClick={handleClick}
        title="Attribute Page"
        show={show}
      />
      {show && <AttributeExpanded />}
    </div>
  );
}

export default AttributeSidebar;
