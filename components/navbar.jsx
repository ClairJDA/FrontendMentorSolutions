import Image from "next/image";
import React from "react";
import PopupMenu from "./popup-menu";

function Navbar({isOpen, setIsOpen}) {
  
  return (
    <div className="fix z-999 flex justify-between items-center p-6">
      <Image src={"/images/logo.svg"} width={139} height={20} alt="logo" priority />
      <div className="hidden text-sm md:flex gap-4">
        <a className="navmenu-item">Home</a>
        <a className="navmenu-item">About</a>
        <a className="navmenu-item">Contact</a>
        <a className="navmenu-item">Blog</a>
        <a className="navmenu-item">Careers</a>
      </div>
      <a href="/request" className="hidden request-btn md:inline-block">
        Request Invite
      </a>
      {isOpen? (<Image 
        src={"/images/icon-close.svg"}
        width={20}
        height={20}
        alt="close"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)} />)
        :(<Image 
        src={"/images/icon-hamburger.svg"}
        width={25}
        height={25}
        alt="hamburger"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)} />)}
        
    </div>
  );
}

export default Navbar;
