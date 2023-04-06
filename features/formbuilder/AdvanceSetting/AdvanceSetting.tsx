import { AdvanceSvg } from "@/components/icons";
import { Switch } from "@/components/ui";
import React from "react";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";

function AdvanceSetting() {
  const { sidebarIsActive, setSidebarExpand } = useUiContext();
  const show = sidebarIsActive === "advance";
  const handleClick = () => {
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("advance");
    }
  };
  return (
    <div>
      <ExpandBtn
        handleClick={handleClick}
        title="Advanced"
        icon={<AdvanceSvg />}
        show={show}
      />
      {show && (
        <div>
          <Switch label="Auto approve testimonials" />
          <Switch label="Prefer Landscape Recording on Mobile" />
        </div>
      )}
    </div>
  );
}

export default AdvanceSetting;
