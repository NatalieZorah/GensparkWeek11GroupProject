import React from 'react'
import { useSelector } from 'react-redux'

import './Bag.css'

export default function Bag(props) {
	const cart = useSelector(state => state.cart.cart);
	console.log(cart)
	var subtotal = 0;

	const displayCart = cart.map((product, index) => {
		subtotal += parseInt(product.price, 10)
		return <div key={index}>{product.title} {product.price}</div>
	})

  return (
	<div>
		<div className="bag-div">
			<div>
				<h1>Shopping Bag</h1>
			</div>
			<div>displayCart {displayCart}</div>
			<div>{subtotal}</div>
			<button>Checkout</button>
		</div>
	</div>
  )
}

