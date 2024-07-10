import React from "react";
import Link from "next/link";

import styles from "./dropdown-menu.module.css";

function DropDownMenu({ listItem}) {
  return (
    <div className={`${styles.container}`}>
      <ul className={styles.menuList}>
        {listItem.map((item) => (
          <Link key={item.label} href={item.link}>{item.label}</Link>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
