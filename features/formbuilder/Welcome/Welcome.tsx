import React from "react";
import ExpandBtn from "../ExpandBtn";
import { WelcomeSvg } from "@/components/icons";
import WelcomeEditor from "./WelcomeEditor";
import { useUiContext } from "@/lib/context";
function Welcome() {
  const { sidebarIsActive, setSidebarExpand } = useUiContext();
  const show = sidebarIsActive === "welcome";
  const handleClick = () => {
    if (show) {
      setSidebarExpand(null);
    } else {
      setSidebarExpand("welcome");
    }
  };

  return (
    <div>
      <ExpandBtn
        show={show}
        title="Welcome Page"
        icon={<WelcomeSvg />}
        handleClick={handleClick}
      />
      {show && <WelcomeEditor />}
    </div>
  );
}

export default Welcome;
