import React from "react";
import Image from "next/image";

import gallery from "@/lib/outro-data";

function Outro() {
  return (
    <section>
      <div className="w-full flex flex-wrap md:flex-nowrap">
        {gallery.map((img) => (
          <picture key={img.id} className="w-1/2 md:w-1/2">
            <source
              className=" md:w-full"
              media="(min-width: 768px)"
              srcSet={img.desktopImgUrl}
            />
            <Image
              className=" md:w-full"
              src={img.mobileImgUrl}
              width={312}
              height={312}
              alt="transform image"
            />
          </picture>
        ))}
      </div>
    </section>
  );
}

export default Outro;
