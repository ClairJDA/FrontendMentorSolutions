import React from "react";
import Image from "next/image";

import styles from "./feature-desktop.module.css";
import editorDesktop from "@/asset/illustration-editor-desktop.svg";
import editorMobile from "@/asset/illustration-editor-mobile.svg";

function DesktopFeature() {
  return (
    <div className={styles.container}>
      <h2>Designed for the future</h2>
      <picture>
        <source media={`(min-width: 900px)`} srcSet={editorDesktop} />
        <Image src={editorMobile} className={styles.imgStyle} alt="desktop image" />
      </picture>
      
      <div className={styles.describe}>
        <div className={styles.item}>
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Robust content management</h3>
          <p>
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

export default DesktopFeature;
