'use client';
import React, {useState} from "react";
import Image from "next/image";

function DropdownMenu({mainMenu, subMenuList}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a className="ubuntu hover:cursor-pointer">
        {mainMenu}
        <Image
          src="/images/icon-arrow-light.svg"
          alt="icon-arrow-dark"
          width={10}
          height={10}
          className={`inline ml-2 ${isOpen && "rotate-180"}`}
        />
      </a>
      {isOpen && (
        <div className="font-ubuntu absolute top-16 p-4 flex flex-col gap-2 text-black bg-white rounded-md hover:cursor-pointer">
          {subMenuList.map((item) =>           
            <a key={item.id} href={item.url}>{item.label}</a>
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
