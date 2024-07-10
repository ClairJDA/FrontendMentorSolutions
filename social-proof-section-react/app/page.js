import styles from "./page.module.css";
import MainHeader from "@/components/main-header";
import RateItem from "@/components/rate-item";
import ReviewCard from "@/components/review-card";

import { rateList } from "../lib/rate";
import { testimonials } from "../lib/testimonial";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.introSection}>
          <div className={styles.headline}>
            <MainHeader />
          </div>
          <div className={styles.ratedStar}>
            {rateList.map((item) => (
              <div>
                <RateItem key={item.msg} desc={item.msg} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.reviewSection}>
          {testimonials.map((item) => (
            <div>
              <ReviewCard
                immgUrl={item.profile}
                user={item.user}
                desc={item.desc}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
