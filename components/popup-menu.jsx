import React from 'react'
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: "900",
  });

function PopupMenu() {
  return (
    <div className=" absolute z-50 top-20 left-16 w-3/4 flex flex-col gap-4 items-center p-8 bg-white text-gray-400 md:hidden">
        <a>About</a>
        <a>Services</a>
        <a>Projects</a>
        <a className={`${fraunces.className} p-2 px-4 rounded-full text-gray-100 bg-yellow` }>Contact</a>
    </div>
  )
}

export default PopupMenu