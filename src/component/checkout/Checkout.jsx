import React from "react";
import "./checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="chekout_Ad"
          className="chekout_ad"
        />
        <div className="">
          <h2 className="checkout_title">Your SHopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>The subtotal</h2>
      </div>
    </div>
  );
};
