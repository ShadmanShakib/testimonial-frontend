import React from "react";
import ExpandBtn from "../ExpandBtn";
import { WelcomeSvg } from "@/components/icons";
import WelcomeEditor from "./WelcomeEditor";
function Welcome() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
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
