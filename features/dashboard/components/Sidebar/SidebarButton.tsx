import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";

type Props = {
  icon?: React.ReactNode;
  name: string;
  href: string;
};

const SidebarButton = (props: Props) => {
  const { icon, name, href } = props;
  const pathname = usePathname();
  const isActive = pathname.endsWith(href);
  const cln = cn(
    "relative w-full flex mb-[1px] items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm font-medium text-zinc-600 duration-100 hover:bg-zinc-200/70",
    isActive && "bg-zinc-200/70"
  );
  return (
    <Link className="w-full" href={href}>
      <button className={cln}>
        <div>{icon}</div>
        <div>{name}</div>
        <div className="flex-grow"></div>
      </button>
    </Link>
  );
};
export default SidebarButton;
