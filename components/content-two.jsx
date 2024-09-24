import Image from "next/image";
import React from "react";

function ContentTwo() {
  return (
    <div className="relative mt-[40%] md:mt-[15%] h-[450px] rounded-tr-[80px] rounded-bl-[80px] md:h-[290px] text-white" style={{backgroundImage: 'var(--body-bg)'}}>
      <Image
        src="/images/illustration-phones.svg"
        alt="illustration-phones"
        width={375}
        height={300}
        className=" absolute -top-40 left-1/2 -translate-x-1/2 mt-30 mx-auto max-w-sm md:w-1/2 md:-top-20 md:left-0 md:translate-x-0 "
      />
      <div className="w-[90%] mx-auto md:w-[48%] md:mr-8">
        <h2 className="pt-[60%] mb-4 font-overpass text-white text-3xl md:pt-10">State of the Art Infrastructure</h2>
        <p className="overpass-p">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}

export default ContentTwo;
