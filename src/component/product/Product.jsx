import React from "react";
import "./product.css";

export const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The learn startup</p>
        <p className="product_price">
          <small>Ksh. </small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
            <p>🌟</p>
            <p>🌟</p>
            <p>🌟</p>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};
