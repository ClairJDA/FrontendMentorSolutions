"use client";
import Image from "next/image";
import React, { useState } from "react";

import productMenu from "@/mockup/productMenu";
import companyMenu from "@/mockup/companyMenu";
import connectMenu from "@/mockup/connectMenu";
import AccordionMenu from "./accordion-menu";

function PopupMenuMobile() {
  return (
    <div
      className="absolute bg-white p-4 w-[80%] flex flex-col gap-4 items-center justify-evenly top-16 right-12 rounded-md md:hidden"
      style={{ color: "var(--very-dark-grayish-blue-body-copy)" }}
    >
      <AccordionMenu mainMenu={"Product"} subMenuList={productMenu} />
      <AccordionMenu mainMenu={"Company"} subMenuList={companyMenu} />
      <AccordionMenu mainMenu={"Connect"} subMenuList={connectMenu} />

      <div className="mt-2 pt-4 w-full flex flex-col items-center gap-2 border-t-2">
        <a className="font-bold">Login</a>
        <a
          className="px-4 py-2 text-white font-bold rounded-full"
          style={{ backgroundImage: "var(--header-bg)" }}
        >
          Sing Up
        </a>
      </div>
    </div>
  );
}

export default PopupMenuMobile;
