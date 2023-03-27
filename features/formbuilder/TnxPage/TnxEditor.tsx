import ThanksSvg from "@/components/icons/ThanksSvg";
import React from "react";
import ExpandBtn from "../ExpandBtn";
function TnxEditor() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <ExpandBtn
        handleClick={() => setShow(!show)}
        title="Thank You Page"
        icon={<ThanksSvg />}
        show={show}
      />
    </div>
  );
}

export default TnxEditor;
