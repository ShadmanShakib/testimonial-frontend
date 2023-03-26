import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
function SidebarBtn({ children, title, href }: ISidebarBtn) {
  const router = useRouter();
  const cls = cn(
    "relative mb-[1px] w-full hover:bg-gray-200  flex items-center gap-3 rounded-md px-2 py-[5px] text-left text-sm ",
    {
      "bg-gray-200": router.pathname === href,
    }
  );
  return (
    <Link href={href}>
      <button className={cls}>
        {children}
        <div>{title}</div>
        <div className="felx-grow"></div>
      </button>
    </Link>
  );
}

export default SidebarBtn;

interface ISidebarBtn {
  children: React.ReactNode;
  title: string;
  href: string;
}
