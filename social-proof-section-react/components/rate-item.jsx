import React from "react";
import Image from "next/image";

import styles from "./rate-item.module.css";
import icon from "@/asset/icon-star.svg";

function RateItem({desc}) {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Image className={styles.icon} src={icon} width={15} height="auto" alt="star icon" />
        <Image className={styles.icon} src={icon} width={15} height="auto" alt="star icon" />
        <Image className={styles.icon} src={icon} width={15} height="auto" alt="star icon" />
        <Image className={styles.icon} src={icon} width={15} height="auto" alt="star icon" />
        <Image className={styles.icon} src={icon} width={15} height="auto" alt="star icon" />
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default RateItem;
