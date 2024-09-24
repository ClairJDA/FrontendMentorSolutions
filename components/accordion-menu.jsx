'use client';
import React, {useState} from "react";
import Image from "next/image";

function AccordionMenu({ mainMenu, subMenuList }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="font-semibold"
      >
        {mainMenu}
        <Image
          src="/images/icon-arrow-dark.svg"
          alt="icon-arrow-dark"
          width={10}
          height={10}
          className={`inline ml-2 ${isOpen && "rotate-180"}`}
        />
      </div>
      {isOpen && (
        <div className="w-full py-4 flex flex-col items-center gap-2 bg-slate-100 rounded-md">
          {subMenuList.map((item) =>           
            <a key={item.id} href={item.url}>{item.label}</a>
          )}
        </div>
      )}
    </>
  );
}

export default AccordionMenu;
