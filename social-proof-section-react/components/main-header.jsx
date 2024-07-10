import React from "react";

import styles from "./main-header.module.css";

function MainHeader() {
  return (
    <>
      <h1 className={styles.heading}>10,000+ of our users love our products.</h1>
      <p className={styles.desc}>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </>
  );
}

export default MainHeader;
