import React from "react";
import "./checkoutProduct.css";

export const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="chekoutProduct_title">{title}</p>
        <p className="checkoutProdcut_price">
          <small>Ksh. </small>
          <strong>{price}</strong>
        </p>
        <div className="chekoutProduct_rating">
            {Array(rating).fill().map((_,i)=>(
            <p key={i}>🌟</p>
            ))}
        </div>
      </div>
    </div>
  );
};
