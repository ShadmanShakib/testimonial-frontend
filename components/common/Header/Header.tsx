import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@/components/icons";
function Header() {
  return (
    <header className="mx-auto max-w-screen-xl">
      <nav className="flex h-16 items-center justify-between border-b border-gray-100/0 bg-white/90 px-4 py-2 backdrop-blur-lg backdrop-filter duration-300 sm:px-8">
        <Image src="/next.svg" height={30} width={60} alt="logo" />
        <ul className="hidden items-center justify-center gap-6 lg:flex">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>Features</li>
          <li>Blog</li>
          <li>Widgets</li>
          <li>Wall of Love</li>
        </ul>
        <div>
          <Link href="/login">Sign in</Link>
          <Link
            className="ml-3 rounded-md bg-slate-800 py-2 px-3 text-slate-200"
            href="/signup"
          >
            Sign up for free
          </Link>
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
