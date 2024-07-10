import React from "react";

import styles from "./key-feature.module.css";
import phoneImg from "@/asset/illustration-phones.svg";
import Image from "next/image";

function KeyFeature() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={phoneImg} className={styles.imageStyle} alt="phone image" />
      </div>
      <div className={styles.describe}>
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}

export default KeyFeature;
