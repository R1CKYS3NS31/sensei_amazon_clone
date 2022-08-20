import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import { CheckoutProduct } from "../checkout/checkoutProduct/CheckoutProduct";
import "./payment.css";

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
            Checkout (<Link to={'/checkout'}>
                {basket?.length} items</Link>)
        </h1>
        {/* payment and delivery */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Nakuru East</p>
            <p>Bondeni</p>
          </div>
        </div>
        {/* payment section - review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment methon */}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_details">

            </div>
        </div>
      </div>
    </div>
  );
};
