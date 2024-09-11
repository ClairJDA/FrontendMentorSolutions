"use client";

import React, { useState } from "react";
import Image from "next/image";

import logo from "../public/images/logo.svg";
import hamburger from "../public/images/icon-hamburger.svg";
import closeMenu from "@/public/images/icon-close-menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full flex flex-col z-10">
      <div className="flex justify-between p-8 ">
        <Image src={logo} width={128} height={20} alt="logo image" priority />
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image
            id="menu-icon"
            src={isOpen ? closeMenu : hamburger}
            width="auto"
            height="auto"
            alt="hamburger menu"
            priority
          />
        </div>
        <div className="hidden text-white md:flex gap-8">
          <a>About</a>
          <a>Discover</a>
          <a>Get Started</a>
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="w-11/12 flex flex-col mx-auto  bg-white rounded-lg">
            <p className="p-4 font-semibold">About</p>
            <p className="p-4 font-semibold border-t border-b border-slate-300">Discover</p>
            <p className="p-4 font-semibold">Get Started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
