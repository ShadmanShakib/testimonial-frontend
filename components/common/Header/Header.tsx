import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@/components/icons";
function Header() {
  return (
    <header className=" ">
      <nav className="flex justify-between border-b border-gray-100/0 bg-white/90 px-4 py-2 backdrop-blur-lg backdrop-filter duration-300 sm:px-8">
        <Image src="/next.svg" height={30} width={60} alt="logo" />
        <ul>
          <li>Pricing</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Widgets</li>
          <li>Wall of Love</li>

          <Link href="/signin">Sign in</Link>

          <Link href="/signup">Sign up for free</Link>
        </ul>
        <MenuIcon />
      </nav>
    </header>
  );
}

export default Header;
