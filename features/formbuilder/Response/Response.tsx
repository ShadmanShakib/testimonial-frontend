import React from "react";
import ExpandBtn from "../ExpandBtn";
import { ResponseSvg } from "@/components/icons";
import ResponseEditor from "./ResponseEditor";

function Response() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <ExpandBtn
        handleClick={() => setShow(!show)}
        title="Response"
        icon={<ResponseSvg />}
        show={show}
      />
      {show && <ResponseEditor />}
    </div>
  );
}

export default Response;
