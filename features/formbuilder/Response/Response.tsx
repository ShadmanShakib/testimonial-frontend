import React from "react";
import ExpandBtn from "../ExpandBtn";
import { ResponseSvg } from "@/components/icons";
import ResponseEditor from "./ResponseEditor";
import { useUiContext } from "@/lib/context";

function Response() {
  const { sidebarIsExpanded, setSidebarExpand } = useUiContext();
  const show = sidebarIsExpanded === "response";
  const handleClick = () => {
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("response");
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
