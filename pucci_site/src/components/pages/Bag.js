import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/Bag.css";

import BagProductCard from "../bag/BagProductCard.jsx";

export default function Bag(props) {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  return (
    <>
      <div className="bag-container pucci-background-color-light">
        <h4 className="cart-header justify-text-center grid-col-span-4">
          Your Pucci Bag
        </h4>
        <h4 className="checkout-header justify-text-center grid-col-span-3">
          Checkout
        </h4>
        <div className="cart-item-container grid-col-span-4">
          <BagProductCard cart={cart} />
        </div>

        <div className="bag-subtotal bag-item-grid-template">
          <span className="subtotal-title grid-col-span-4 justify-text-end-right">
            Subtotal
          </span>
          <span className="subtotal-amount justify-text-end-right">
            ${subtotal}
          </span>
        </div>
        <button
          className="checkout-button grid-col-start-8"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
