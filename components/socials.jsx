import React from "react";
import Image from "next/image";

function Socials() {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <Image
        src="/images/icon-facebook.svg"
        width={14}
        height={14}
        alt="facebook"
        className="inline-block fill-green"
      />
      <Image
        src="/images/icon-youtube.svg"
        width={14}
        height={14}
        alt="youtube"
        className="inline-block fill-green"
      />
      <Image
        src="/images/icon-twitter.svg"
        width={14}
        height={14}
        alt="twitter"
        className="inline-block fill-green"
      />
      <Image
        src="/images/icon-pinterest.svg"
        width={14}
        height={14}
        alt="pinterest"
        className="inline-block fill-green"
      />
      <Image
        src="/images/icon-instagram.svg"
        width={14}
        height={14}
        alt="instagram"
        className="inline-block fill-green"
      />
    </div>
  );
}

export default Socials;
