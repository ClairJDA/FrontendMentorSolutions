import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

import services from "@/lib/services";
import data from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "900",
});

function Intro() {
  return (
    <section className="w-full ">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-full flex flex-col md:odd:flex-row-reverse md:flex-row"
        >
          {/* Picture Section */}
          <picture className="w-full object-contain overflow-clip md:w-1/2 ">
            <source
              className="w-full"
              media="(min-width: 768px)"
              srcSet={service.desktopImg}
            />
            <Image
              priority
              className="w-full "
              src={service.mobileImg}
              width={312}
              height={312}
              alt="transform image"
            />
          </picture>

          {/* Content Section */}
          <div className="w-full h-80 md:h-auto bg-orange-50 relative md:w-1/2 ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3">
              <h1
                className={`${fraunces.className} ${fraunces.weight} text-[1.5rem]`}
              >
                {service.title}
              </h1>
              <p className="py-6 text-gray-200">{service.content}</p>

              <a className="relative text-lg hover:cursor-pointer">
                Learn more
                <hr
                  style={{
                    position: "absolute",
                    zIndex: "-1",
                    bottom: "0",
                    border: "none",
                    width: "90px",
                    borderBottom: `8px solid ${service.lineColor}`,
                    textTransform: "uppercase",
                  }}
                />
              </a>
            </div>
          </div>
          {/* Content Section */}
        </div>
      ))}

      <div className="w-full flex flex-col md:flex-row">
        {data.map((item) => (
          <div key={item.id} className="relative h-auto overflow-clip md:w-1/2">
            <picture className="w-full pb-6">
              <source
                className="w-full"
                media="(min-width: 768px)"
                srcSet={item.desktopImg}
              />
              <Image
                priority
                className="w-full object-contain"
                src={item.mobileImg}
                width={312}
                height={312}
                alt="mmobile img"
              />
            </picture>
            <div className="absolute w-4/6 bottom-16 md:bottom-11 left-1/2 -translate-x-1/2  text-center">
              <h2
                className={`${fraunces.className} my-4 text-3xl ${item.text}}`}
              >
                {item.title}
              </h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro;
