import React from "react";
import Image from "next/image";

import logo from "@/public/images/logo-footer.svg";
import socials from "@/lib/socials-data";

function Footer() {
  return (
    <div className="py-12 flex flex-col justify-around items-center gap-8 bg-cyan-200">
      <Image src={logo} width={150} height={20} alt="logo" />
      <div className="w-72 flex justify-center gap-8 text-cyan-100 ">
        <a className="hover:cursor-pointer hover:text-white">About</a>
        <a className="hover:cursor-pointer hover:text-white">Services</a>
        <a className="hover:cursor-pointer hover:text-white">Projects</a>
      </div>
      <div className="w-72 flex justify-center gap-8">
        {socials.map((social) => (
          <a key={social.id} href={social.url} className="hover:cursor-pointer hover:text-white">
            <Image src={social.icon} width={24} height={24} alt="social" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
