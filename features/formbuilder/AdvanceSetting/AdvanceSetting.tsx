import { AdvanceSvg } from "@/components/icons";
import { Switch } from "@/components/ui";
import React from "react";
import ExpandBtn from "../ExpandBtn";
import { useUiContext } from "@/lib/context";

function AdvanceSetting() {
  const { sidebarIsActive, setSidebarIsActive } = useUiContext();
  const show = sidebarIsActive === "advanced";
  const handleClick = () => {
    if (show) {
      setSidebarIsActive(null);
    } else {
      setSidebarIsActive("advanced");
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
        <div className="py-4">
          <div className="flex flex-col gap-2">
            <Switch label="Auto approve testimonials" />
            <Switch label="Prefer Landscape Recording on Mobile" />
          </div>
          <hr className="my-4"></hr>
        </div>
      )}
    </div>
  );
}

export default AdvanceSetting;
