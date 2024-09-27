import React from "react";
import Image from "next/image";

import mobileIntro from "@/public/images/bg-intro-mobile.svg";


function IntroHeroImage() {
  return (
    <div className="relative h-3/5 md:h-1/2 md:w-1/2 overflow-clip">
      <picture className="inline-block w-full h-full md:h-[500px] object-cover">
        <source
          srcSet="/images/bg-intro-desktop.svg"
          media="(min-width: 768px)"
          className="w-full md:h-[500px] object-cover"
        />
        <Image
          className="w-full h-full object-cover"
          src={mobileIntro}
          width={500}
          height={300}
          alt="bg-intro"
        />
      </picture>

      <Image
        src={"/images/image-mockups.png"}
        width={500}
        height={200}
        priority
        alt="mobile mockup"
        className="absolute z-100 -top-40 left-0 md:top-0 lg:-top-20 object-cover"
      />
    </div>
  );
}

export default IntroHeroImage;
