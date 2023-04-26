/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SidebarBtn } from "@/components/ui";
import { DownSvg } from "@/components/icons";
import {
  FormIcon,
  LoveIcon,
  SearchIcon,
  TagIcon,
  TeamIcon,
} from "@/components/icons";
import { useUiContext } from "@/lib/context";
import AccountDropDown from "./AccountDropDown";
import { logOut } from "@/utils/services/auth";
import { useRouter } from "next/navigation";
export default function Sidebar() {
  const { isAccountDropDown, toggleAccountDropDown } = useUiContext();
  const router = useRouter();
  const handleLogout = () => {
    logOut();
    router.push("/login");
  };
  return (
    <aside className="hidden min-h-screen w-64 flex-none sm:block">
      <div className="h-full w-full flex-grow flex-col overflow-hidden border-r border-gray-200 bg-gray-50 px-4 pt-4">
        <div className="flex-grow overflow-y-auto pb-4">
          <div className="relative pb-4">
            <button onClick={toggleAccountDropDown} className="relative">
              <div className="flex items-center gap-2">
                <img
                  src="https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1657796891741"
                  alt="John Cena avatar"
                  className="h-7 w-7 rounded-full"
                />
                <p>John Cena</p>
                <DownSvg show={false} />
              </div>
            </button>
            {isAccountDropDown && <AccountDropDown onClick={handleLogout} />}
          </div>
          <div className="mb-4">
            <div className="font-heading mb-2 px-2 text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
              Collect
            </div>
            <SidebarBtn href="/forms" title="Forms">
              <FormIcon />
            </SidebarBtn>
          </div>

          <div>
            <div className="font-heading mb-2  text-[0.7rem] font-extrabold uppercase tracking-wider text-zinc-400">
              Manage
            </div>
            <SidebarBtn href="/app" title="Testimonials">
              <LoveIcon />
            </SidebarBtn>
            <SidebarBtn href="/app/search" title="Search">
              <SearchIcon />
            </SidebarBtn>
            <SidebarBtn href="/app/tags" title="Tags">
              <TagIcon />
            </SidebarBtn>
            <SidebarBtn href="/app/team" title="Team">
              <TeamIcon />
            </SidebarBtn>
          </div>
        </div>
      </div>
    </aside>
  );
}
