import React from "react";

import styles from "./footer.module.css";
import logoImg from "@/asset/icons/logo.svg";
import Image from "next/image";

import { aboutCompany, aboutProduct, aboutConnect } from "../menuList";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <Image src={logoImg} width={100} height="auto" alt="logo immage" />
      </div>

      <div className={styles.column}>
        <h4>Product</h4>
        {aboutProduct.map((item) => (
          <Link className={styles.link} href={item.link}>{item.label}</Link>
        ))}
      </div>

      <div className={styles.column}>
        <h4>Company</h4>
        {aboutCompany.map((item) => (
          <Link className={styles.link} href={item.link}>{item.label}</Link>
        ))}
      </div>

      <div className={styles.column}>
        <h4>Connect</h4>
        {aboutConnect.map((item) => (
          <Link className={styles.link} href={item.link}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
}

export default Footer;
