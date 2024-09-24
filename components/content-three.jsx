import React from "react";
import Image from "next/image";

function ContentThree() {
  return (
    <div className="w-[90%] mx-auto  mt-10 mb-10 md:flex items-center">
      <picture className="md:w-1/2">
        <source
          src="/images/illustration-laptop-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 768px)"
          className="mx-auto w-full"
        />
        <Image
          src={"/images/illustration-laptop-mobile.svg"}
          alt="illustration-laptop-mobile"
          width={375}
          height={300}
          className="mx-auto w-full"
        />
      </picture>

      <div className="md:w-1/2">
        <div className="mt-8">
          <h3 className="mb-4 overpass-h3">Free, open, simple</h3>
          <p className="overpass-p">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 overpass-h3">Powerful tooling</h3>
          <p className="overpass-p">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentThree;
