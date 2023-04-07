import React from "react";
import ExpandBtn from "../ExpandBtn";
import { WelcomeSvg } from "@/components/icons";
import WelcomeEditor from "./WelcomeEditor";
import { useUiContext } from "@/lib/context";
function Welcome() {
  const { sidebarIsActive, setSidebarIsActive, setActivePreview } =
    useUiContext();
  const show = sidebarIsActive === "welcome";
  const handleClick = () => {
    if (show) {
      setSidebarIsActive(null);
    } else {
      setSidebarIsActive("welcome");
      setActivePreview("default");
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
