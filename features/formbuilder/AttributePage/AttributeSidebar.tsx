import React, { useState } from "react";
import ExpandBtn from "../ExpandBtn";
import { AttributeSvg } from "@/components/icons";
function AttributeSidebar() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <ExpandBtn
        icon={<AttributeSvg />}
        handleClick={handleClick}
        title="Attribute Page"
        show={show}
      />

      <div className="w-full"></div>
    </div>
  );
}

export default AttributeSidebar;
