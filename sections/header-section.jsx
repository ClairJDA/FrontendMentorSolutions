import IntroHeroImage from "@/components/intro-hero-image";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

function HeaderSection() {
  return (
    <section
      id="intro"
      className="h-fit w-full md:flex items-center"
      style={{ flexDirection: "row-reverse", backgroundColor: "var(--very-light-gray)" }}
    >
      <IntroHeroImage />
      <div className="p-6 text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl text-heading ">
          Next generation digital banking
        </h1>
        <p className="my-4 text-sm text-paragraph">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a href="/request" className="request-btn">
          Request Invite
        </a>
      </div>
    </section>
  );
}

export default HeaderSection;
