import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../../slices/cartSlice";
import CarouselFade from "../Carousel/Carousel";
import "./Bag.css";

export default function Bag(props) {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  var subtotal = 0;

	const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeProduct = (e) => {
		e.preventDefault()
		dispatch(removeFromCart(e.target.product))
	}


  // used to clear the cart
  const clear = (e) => {
    e.preventDefault()
    dispatch(clearCart())
  }



  const displayCart = cart.map((product, index) => {
    subtotal += parseInt(product.price, 10);
    return (
      <div className="bag-product" key={index}>
        <div className="bag-product-title">{product.title}</div>
        <div className="bag-product-price">
          Price: ${product.price || "$0.00"}
        </div>
      </div>
    );
  });

  return (
    <>
      <CarouselFade />
      <div className="bag-container">
        <div className="bag-title grid-col-span-2">
          <h1 className="cart-text">Your Pucci Bag</h1>
        </div>
        <div className="bag-cart grid-col-span-12">{displayCart}</div>
        <div className="bag-subtotal">Subtotal ${subtotal}</div>
        <button className="btn btn-success" onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </>
  );
}
