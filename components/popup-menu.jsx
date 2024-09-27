import React from "react";

function PopupMenu() {
  return (
    <div className="absolute h-full w-full top-30 popup-menu md:hidden"
    style={{ zIndex: 199}}>
      <div
        style={{ zIndex: 200, left: "50%", transform: "translateX(-50%)" }}
        className="w-[80%] absolute py-8  top-5 text-center font-bold flex flex-col gap-2 rounded-md bg-white"
      >
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Blog</a>
        <a>Careers</a>
      </div>
    </div>
  );
}

export default PopupMenu;
