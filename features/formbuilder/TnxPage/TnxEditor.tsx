import ThanksSvg from "@/components/icons/ThanksSvg";
import React from "react";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";
function TnxEditor() {
  const { setSidebarExpand, sidebarIsExpanded } = useUiContext();
  const show = sidebarIsExpanded === "thanks";
  const handleClick = () => {
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("thanks");
    }
  };

  return (
    <div>
      <ExpandBtn
        handleClick={handleClick}
        title="Thank You Page"
        icon={<ThanksSvg />}
        show={show}
      />
    </div>
  );
}

export default TnxEditor;
