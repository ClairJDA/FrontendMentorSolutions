"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./desktop-menu.module.css";
import { aboutProduct, aboutCompany, aboutConnect } from "../menuList";
import arrowIcon from "@/asset/icons/icon-arrow-light.svg";
import DropDownMenu from "./dropdown-menu";

function DesktopMenu() {
  const [isActive, setIsActive] = useState(false);

  function onOver() {
    setIsActive(true);
  }
  function onOut() {
    setIsActive(false);
  }

  return (
    <>
      <div>
        <ul className={styles.menuList}>
          <li onMouseOver={onOver} onMouseOut={onOut}>
            Product
            {isActive ? (
              <>
                <Image
                  className={styles.arrowUp}
                  src={arrowIcon}
                  width={10}
                  height={7}
                  alt="arrow icon"
                />
                <DropDownMenu listItem={aboutProduct} />
              </>
            ) : (
              <Image
                className={styles.arrowIcon}
                src={arrowIcon}
                width={10}
                height={7}
                alt="arrow icon"
              />
            )}
          </li>

          <li onMouseOver={onOver} onMouseOut={onOut}>
            Company
            <Image
              className={styles.arrowIcon}
              src={arrowIcon}
              width={10}
              height={7}
              alt="arrow icon"
            />
            {isActive && <DropDownMenu listItem={aboutCompany} />}
          </li>

          <li onMouseOver={onOver} onMouseOut={onOut}>
            Connect
            <Image
              className={styles.arrowIcon}
              src={arrowIcon}
              width={10}
              height={7}
              alt="arrow icon"
            />
            {isActive && <DropDownMenu listItem={aboutConnect} />}
          </li>
        </ul>
      </div>
      <div>
        <Link className={styles.loginBtn} href="#">
          Login
        </Link>
        <Link className={styles.signupBtn} href="#">
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default DesktopMenu;
