import React from "react";
import ExpandBtn from "../ExpandBtn";
import { ResponseSvg } from "@/components/icons";
import ResponseEditor from "./ResponseEditor";
import { useUiContext } from "@/lib/context";

function Response() {
  const { sidebarIsActive, setSidebarIsActive, setActivePreview } =
    useUiContext();
  const show = sidebarIsActive === "response";
  const handleClick = () => {
    if (show) {
      setSidebarIsActive(null);
    } else {
      setSidebarIsActive("response");
      setActivePreview("response");
    }
  };
  return (
    <div>
      <ExpandBtn
        handleClick={handleClick}
        title="Response"
        icon={<ResponseSvg />}
        show={show}
      />
      {show && <ResponseEditor />}
    </div>
  );
}

export default Response;
