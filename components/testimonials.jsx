import React from "react";
import { Fraunces } from "next/font/google";

import clients from "@/clients";
import Image from "next/image";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "900",
});

function Testimonials() {
  return (
    <section className="p-8 md:p-24 bg-orange-50">
      <h2 className={`${fraunces.className} mb-12 uppercase tracking-widest text-lg text-center}`} style={{color: "var(--grayish-blue)", textAlign: "center" }}>Client Testimonials</h2>
      <div className="flex flex-col gap-8 md:flex-row">
        {clients.map((client) => (
          <div key={client.id} className="flex flex-col gap-4 items-center">
            <Image src={client.imgUrl} width={50} height={50} alt="client" className="rounded-full" />
            <p className=" md:my-6 text-center text-gray-200">{client.content}</p>
            <div>
              <p className={`${fraunces.className} text-center text-gray-100`}>{client.name}</p>
              <p className="text-sm text-gray-400 font-[0.6rem] text-center">{client.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
