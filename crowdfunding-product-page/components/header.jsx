import Image from 'next/image';
import React from 'react'

import mobileImg from "@/public/images/image-hero-mobile.jpg";
import desktopImg from "../public/images/image-hero-desktop.jpg";

function Header() {
  return (
    <div >
      <picture className='w-full' >
        <source className='w-full' media="(min-width: 768px)" srcSet="/images/image-hero-desktop.jpg" />
        <Image className='w-full' src={mobileImg} width="auto" height="auto" alt="image-mobile-desktop" />
      </picture>
        {/* <Image src={mobileImg} width="auto" height="auto" alt="image-header-mobile" /> */}
    </div>
  )
}

export default Header;