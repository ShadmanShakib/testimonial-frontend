import React from "react";

type Props = {
  onClick: () => void;
  icon?: React.ReactNode;
  name: string;
};

const SidebarButton = (props: Props) => {
  const { icon, name } = props;
  return (
    <button
      className="relative flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70 bg-zinc-200/70"
      onClick={props.onClick}
    >
      {icon}
      <div>{name}</div>
      <div className="flex-grow"></div>
    </button>
  );
};
export default SidebarButton;
