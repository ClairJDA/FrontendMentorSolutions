import React from "react";
import Image from "next/image";

import styles from "./feature-desktop.module.css";
import laptopImgMobile from "@/asset/illustration-laptop-mobile.svg";
import laptopImgDesktop from "@/asset/illustration-laptop-desktop.svg";

function FeatureLaptop() {
  return (
    <div className={styles.container}>
      <picture>
        <source media={`(min-width: 900px)`} srcSet={laptopImgDesktop} />
        <Image
          src={laptopImgMobile}
          className={styles.imgStyle}
          alt="laptop image"
        />
      </picture>

      <div className={styles.describe}>
        <div className={styles.item}>
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className={styles.item}>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureLaptop;
