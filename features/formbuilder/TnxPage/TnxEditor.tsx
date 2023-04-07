import ThanksSvg from "@/components/icons/ThanksSvg";
import React from "react";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";
import ThankExpanded from "./ThankExpanded";
function TnxEditor() {
  const { setSidebarIsActive, sidebarIsActive, setActivePreview } =
    useUiContext();
  const show = sidebarIsActive === "thanks";
  const handleClick = () => {
    if (show) {
      setSidebarIsActive(null);
    } else {
      setSidebarIsActive("thanks");
      setActivePreview("thanks");
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
      {show && <ThankExpanded />}
    </div>
  );
}

export default TnxEditor;
