import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../slices/cartSlice";
import "../../styles/bag/BagProductCard.css";

const BagProductCard = ({ cart }) => {
  var subtotal = 0;

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

  return (
    <>
      {cart.map((product, index) => {
        subtotal += parseInt(product.price, 10);
        return (
          <div className="bag-product" key={index}>
            <span className="bag-product-title grid-col-span-7 justify-text-start-left pucci-border-box-dark">
              {product.title}
            </span>

            <span className="bag-product-qty grid-col-span-2 justify-text-center pucci-border-box-dark">
              1
              <button
                className="remove-item-button justify-text-center"
                onClick={(product) => removeProductFromCart(product)}
              >
                -
              </button>
            </span>

            <span className="bag-product-price grid-col-span-3 justify-text-end-right pucci-border-box-dark">
              ${product.price || "$0.00"}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default BagProductCard;
