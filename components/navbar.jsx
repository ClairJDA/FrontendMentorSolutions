"use client";
import React, { useState } from "react";
import Image from "next/image";

import PopupMenuMobile from "./popup-menu-mobile";
import DropdownMenu from "./dropdown-menu";

import productMenu from "@/mockup/productMenu";
import companyMenu from "@/mockup/companyMenu";
import connectMenu from "@/mockup/connectMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 p-6 md:pt-8 md:px-16 w-full flex justify-between items-center">
      <div className="flex gap-16">
        <Image src="/images/logo.svg" alt="logo" width={80} height={35} />
        <div className="hidden md:flex gap-8 text-white">
          <DropdownMenu mainMenu={"Product"} subMenuList={productMenu} />
          <DropdownMenu mainMenu={"Company"} subMenuList={companyMenu} />
          <DropdownMenu mainMenu={"Connect"} subMenuList={connectMenu} />
        </div>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <a className="text-white hover:cursor-pointer">Login</a>
        <a className="white-btn rounded-full hover:cursor-pointer">Sign Up</a>
      </div>

      <div className="md:hidden">
        <Image
          src="/images/icon-hamburger.svg"
          alt="icon-hamburger"
          width={24}
          height={24}
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && <PopupMenuMobile />}
      </div>
    </div>
  );
}

export default Navbar;
