import FooterMenu from "@/components/footer-menu";
import Socials from "@/components/socials";
import Image from "next/image";
import React from "react";

function FooterSection() {
  return (
    <div
      className="w-full p-6  md:flex justify-between items-start"
      style={{ backgroundColor: "var(--dark-blue)" }}
    >
      <div className="md:flex">
        <div>
          <Image
            src="/images/logo-white.svg"
            width={139}
            height={20}
            alt="logo"
            priority
            className="mx-auto md:mb-6"
          />
          <Socials />
        </div>

        <FooterMenu />
      </div>

      <div className="text-center md:inline-block ">
        <a href="/request" className="request-btn">
          Request Invite
        </a>
        <p className="mt-4 text-sm">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default FooterSection;
