import React from "react";

import styles from "./review-card.module.css";
import Image from "next/image";

function ReviewCard({ immgUrl, user, desc, content }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <Image className={styles.profilePic} src={immgUrl} width={40} height={40} alt="profile picture" />
        <div className={styles.userProfile}>
          <p>{user}</p>
          <p>{desc}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default ReviewCard;
