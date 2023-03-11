import React from "react";
import { DownSvg } from "@/components/icons";
function ExpandBtn(props: IExpandBtn) {
  return (
    <div className="border-b">
      <button
        onClick={props.handleClick}
        className="flex w-full items-center gap-4 py-4 duration-100 "
      >
        <DownSvg show={props.show} />
        {props.icon}
        <div className="">{props.title}</div>
        <div className="flex-grow"></div>
      </button>
    </div>
  );
}

export default ExpandBtn;

interface IExpandBtn {
  icon: React.ReactNode;
  title: string;
  show: boolean;
  handleClick: () => void;
}
