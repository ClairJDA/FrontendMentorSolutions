'use client';
import React, {useState} from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

import logo from "@/public/images/logo.svg";
import headerImgMobile from "@/public/images/mobile/image-header.jpg";
import hamburgerIcon from "@/public/images/icon-hamburger.svg";
import arrowDownIcon from "@/public/images/icon-arrow-down.svg";
import PopupMenu from "./popup-menu";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "900",
});

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="relative">
      <picture className="w-full">
        <source
          className="w-full"
          media="(min-width: 768px)"
          srcSet="/images/desktop/image-header.jpg"
        />
        <Image
          className="w-full"
          src={headerImgMobile}
          width="auto"
          height="auto"
          alt="header image"
          
        />
      </picture>

      {showPopup && <PopupMenu />}

      <nav className="absolute top-0 left-0 right-0 text-white flex justify-between items-center p-8">
        <Image src={logo} width="auto" height="auto" alt="logo" />
        <div className="hidden md:flex items-center gap-8">
          <a>About</a>
          <a>Services</a>
          <a>Projects</a>
          <a className={`${fraunces.className} p-2 px-4 rounded-full text-gray-100 bg-white hover:bg-sky-300 hover:text-white hover:cursor-pointer`} >Contact</a>
        </div>
        <div className="md:hidden">
          <Image
            src={hamburgerIcon}
            width="auto"
            height="auto"
            alt="hamburger icon"
            onClick={() => {setShowPopup(!showPopup)}}
          />
        </div>
      </nav>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1
          className={`${fraunces.className} ${fraunces.weight} uppercase text-4xl text-white text-center text-wrap}`}
        >
          We are creatives
        </h1>
        <Image
          src={arrowDownIcon}
          width="auto"
          height="auto"
          alt="arrow down icon"
          className="mt-8 mx-auto"
        />
      </div>
    </header>
  );
}

export default Header;
