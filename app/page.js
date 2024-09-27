'use client';
import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/navbar";
import FeatureSection from "@/sections/feature-section";
import ArticleSection from "@/sections/article-section";
import FooterSection from "@/sections/footer-section";
import HeaderSection from "@/sections/header-section";
import PopupMenu from "@/components/popup-menu";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="h-dvh max-w-screen-xl md:mx-auto">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (<PopupMenu/>)}
      <HeaderSection />
      <FeatureSection />
      <ArticleSection />
      <FooterSection />
      
    </main>
  );
}
