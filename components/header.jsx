import React from "react";
import Navbar from "./navbar";

function Header() {
  return (
    <div className="bg-header-mobile md:bg-header-desktop relative h-2/3 rounded-bl-[80px] md:h-2/5 flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="overpass-h1 mt-20 text-4xl text-center">
        A modern publishing platform
      </h1>
      <p className="overpass-p text-center text-white">
        Grow your audience and build your online brand
      </p>
      <div className="flex gap-4 mt-8">
        <a className="white-btn rounded-full hover:cursor-pointer">Start for Free</a>
        <a className="red-btn rounded-full hover:cursor-pointer hover:bg-white hover:text-[var(--light-red)]">Learn More</a>
      </div>
    </div>
  );
}

export default Header;
