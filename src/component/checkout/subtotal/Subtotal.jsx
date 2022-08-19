import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../utils/reducer";
import { useStateValue } from "../../../utils/StateProvider";
import "./subtotal.css";

export const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="gift" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh. "}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};
