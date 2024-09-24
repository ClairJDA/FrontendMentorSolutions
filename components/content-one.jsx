import Image from "next/image";
import React from "react";

function ContentOne() {
  return (
    <div className="w-[90%] mx-auto md:flex flex-row-reverse items-center">
      <picture className="mx-auto md:w-1/2">
        <source
          src="/images/illustration-editor-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 768px)"
          className="mx-auto w-full"
        />
        <Image
          src={"/images/illustration-editor-mobile.svg"}
          alt="illustration-editor-mobile"
          width={375}
          height={300}
          className="mx-auto w-full"
        />
      </picture>

      <div className="md:w-1/2">
        <div className="mt-8">
          <h3 className="mb-4 overpass-h3">Introducing an extensible editor</h3>
          <p className="overpass-p">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 overpass-h3">Robust content management</h3>
          <p className="overpass-p">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentOne;
