import React from "react";
import "./card.css";

import desktopImg from "../assets/images/image-header-desktop.jpg";
import mobileImg from "../assets/images/image-header-mobile.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="card-stats">
          <div className="stat-item"> <p><span>10k+</span>companies</p></div>
          <div className="stat-item"> <p><span>314</span>templates</p></div>
          <div className="stat-item"> <p><span>12m+</span>queries</p></div>
        </div>
      </div>
      <div className="card-image">
      <div className="image-filter"></div>
        <picture>
          <source media="(max-width:430px)" srcSet={mobileImg} />
          <img className="image" src={desktopImg} alt="image-header-desktop" />
        </picture>
      </div>
    </div>
  );
}

export default Card;
