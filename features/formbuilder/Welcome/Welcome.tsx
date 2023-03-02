import React from "react";
import ExpandBtn from "../ExpandBtn";
import { WelcomeSvg } from "@/components/icons";
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
    </div>
  );
}

export default Welcome;
