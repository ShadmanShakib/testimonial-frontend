import React from "react";
import ExpandBtn from "../ExpandBtn";
import { ResponseSvg } from "@/components/icons";
function Response() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <ExpandBtn
        handleClick={() => {}}
        title="Response"
        icon={<ResponseSvg />}
        show={show}
      />
    </div>
  );
}

export default Response;
