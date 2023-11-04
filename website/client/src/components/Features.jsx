import React from "react";
import img1 from "../assets/features/shipping.webp";
import img2 from "../assets/features/online_ordering.webp";
import img3 from "../assets/features/promotion.webp";
import img4 from "../assets/features/quality.webp";
import "./features.css";

function Features() {
  return (
    <section className="features">
      <div className="card">
        <img src={img1} alt="Shipping" />
        <div className="card__content">
          <p className="card__title">Shipping</p>
          <p className="card__description">We provide shipping at a cost</p>
        </div>
      </div>

      <div className="card">
        <img src={img2} alt="Online Order" />
        <div className="card__content">
          <p className="card__title">Online Order</p>
          <p className="card__description">Order online anywhere</p>
        </div>
      </div>

      <div className="card">
        <img src={img3} alt="Promotion" />
        <div className="card__content">
          <p className="card__title">Promotion</p>
          <p className="card__description">
            Enjoy our variety of promotions and sales
          </p>
        </div>
      </div>

      <div className="card">
        <img src={img4} alt="Quality Assurance" />
        <div className="card__content">
          <p className="card__title">Quality Assurance</p>
          <p className="card__description">
            We promise to deliver quality products
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
