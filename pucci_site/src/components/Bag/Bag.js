import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../../slices/cartSlice";
import RemoveIcon from "./../../assets/images/icons/litter-box-icon-for-remove-buttons.png";
import "./Bag.css";

export default function Bag(props) {
  const cart = useSelector((state) => state.cart.cart);
  var subtotal = 0;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const removeProductFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(e.target.product));
  };

  // used to clear the cart
  const emptyCart = (e) => {
    e.preventDefault();
    dispatch(clearCart());
  };

  const displayCart = cart.map((product, index) => {
    subtotal += parseInt(product.price, 10);
    return (
      <div className="bag-product bag-item-grid-template" key={index}>
        <span className="bag-product-title grid-col-span-3 justify-text-start-left pucci-border-box-dark">
          {product.title}
        </span>

        <span className="bag-product-qty justify-text-center pucci-border-box-dark">
          1
          <a
            className="remove-item-from-bag"
            onClick={(product) => removeProductFromCart(product)}
          >
            <img className="remove-icon" src={RemoveIcon} alt=""></img>
          </a>
        </span>

        <span className="bag-product-price justify-text-end-right pucci-border-box-dark">
          Price: ${product.price || "$0.00"}
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="bag-container pucci-background-color-light">
        <div className="bag-title bag-item-grid-template">
          <h4 className="cart-header justify-text-center grid-col-span-5">
            Your Pucci Bag
          </h4>
          <span className="column-title-header grid-col-span-3 justify-text-start-left pucci-border-box-dark">
            PRODUCT
          </span>
          <span className="column-title-header justify-text-end-right pucci-border-box-dark">
            QTY
          </span>
          <span className="column-title-header justify-text-end-right pucci-border-box-dark">
            PRICE
          </span>
        </div>
        <>{displayCart}</>
        <div className="bag-subtotal bag-item-grid-template">
          <span className="subtotal-title grid-col-span-4 justify-text-end-right pucci-border-box-dark">
            Subtotal
          </span>
          <span className="subtotal-amount justify-text-end-right pucci-border-box-dark">
            ${subtotal}
          </span>
        </div>
        <button
          className="grid-col-start-8"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
