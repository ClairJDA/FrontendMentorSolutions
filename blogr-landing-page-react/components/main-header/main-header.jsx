import React from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopMenu from "./desktop-menu";

import styles from "./main-header.module.css";
import logoImg from "@/asset/icons/logo.svg";
import menuIcon from "@/asset/icons/icon-hamburger.svg";

function MainHeader() {
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <Image src={logoImg} width={80} height="auto" alt="logo image" />

        <div className={styles.hamburgerMenu}>
          <Image src={menuIcon} width={30} height={20} alt="hamburger menu" />
        </div>

        <div className={styles.desktopMenu}>
          <DesktopMenu />
        </div>
      </nav>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className={styles.ctaContainer}>
          <Link className={styles.linkBtn} href="#">
            Start for Free
          </Link>
          <Link className={`${styles.linkBtn} ${styles.learnBtn}`} href="#">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
