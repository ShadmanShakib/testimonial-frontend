import React from "react";

function SidebarBtn({ children, title }: ISidebarBtn) {
  return (
    <button className="relative mb-[1px]  flex items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm text-sm">
      {children}
      <div>{title}</div>
      <div className="felx-grow"></div>
    </button>
  );
}

export default SidebarBtn;

interface ISidebarBtn {
  children: React.ReactNode;
  title: string;
}
