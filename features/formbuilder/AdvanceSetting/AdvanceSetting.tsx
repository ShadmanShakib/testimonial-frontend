import { AdvanceSvg } from "@/components/icons";
import React from "react";
import ExpandBtn from "../ExpandBtn";
function AdvanceSetting() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <ExpandBtn
        handleClick={() => setShow(!show)}
        title="Response"
        icon={<AdvanceSvg />}
        show={show}
      />
    </div>
  );
}

export default AdvanceSetting;
