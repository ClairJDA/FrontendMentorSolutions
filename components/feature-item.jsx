import Image from "next/image";
import React from "react";

function FeatureItem({ id, icon, title, description }) {
  return (
    <div key={id} className="mb-6 text-center md:w-1/2 md:text-left lg:w-1/4">
      <Image
        className="mx-auto md:ml-0"
        src={icon}
        width={50}
        height={50}
        alt={`${title}-icon`}
      />
      <h3 className="mt-4 mb-2 text-xl text-heading">{title}</h3>
      <p className="text-sm text-paragraph">{description}</p>
    </div>
  );
}

export default FeatureItem;
