import React from "react";
import Image from "next/image";

import productMenu from "@/mockup/productMenu";
import companyMenu from "@/mockup/companyMenu";
import connectMenu from "@/mockup/connectMenu";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly rounded-tl-[80px] py-8 text-center  md:flex-row md:items-start md:justify-around" style={{backgroundColor: 'var(--very-dark-gray-blue)',color: 'var(--footer-text)'}}>
      <Image src="/images/logo.svg" alt="logo" width={100} height={40} />
      <div className="flex flex-col my-4">
        <p className="mb-2 text-white">Product</p>
        {productMenu.map(item=> <a className="ubuntu font-extralight hover:cursor-pointer">{item.label}</a>)}
      </div>

      <div className="flex flex-col my-4">
        <p className="mb-2 text-white">Company</p>
        {companyMenu.map(item=> <a className="ubuntu font-extralight hover:cursor-pointer">{item.label}</a>)}
        
      </div>

      <div className="flex flex-col my-4">
        <p className="mb-2 text-white">Connect</p>
        {connectMenu.map(item=> <a className="ubuntu font-extralight hover:cursor-pointer">{item.label}</a>)}
      </div>
    </div>
  );
}

export default Footer;
