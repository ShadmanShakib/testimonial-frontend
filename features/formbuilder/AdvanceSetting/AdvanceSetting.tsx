import { AdvanceSvg } from "@/components/icons";
import { Switch } from "@/components/ui";
import React from "react";
import ExpandBtn from "../ExpandBtn";

function AdvanceSetting() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <ExpandBtn
        handleClick={() => setShow(!show)}
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
