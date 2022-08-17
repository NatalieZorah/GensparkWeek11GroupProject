import React from "react";
import { useSelector } from "react-redux";
import "../../styles/bag/BagHover.css";
import BagProductCard from "./BagProductCard.jsx";

const BagHover = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <div className="bag-hover pucci-border-box-dark">
      <h4>Your Bag</h4>

      <BagProductCard cart={cart} />

      {/* {displayCart} */}
    </div>
  );
};

export default BagHover;
