import React from 'react'
import { useSelector } from 'react-redux'

import './Bag.css'

export default function Bag(props) {
	const cart = useSelector(state => state.cart.cart);
	console.log(cart)
	var subtotal = 0;

	const displayCart = cart.map((product, index) => {
		subtotal += parseInt(product.price, 10)
		return <div className='bag-product' key={index}>
			<div>
				{product.title}
			</div>
			<div>
				Price: ${product.price}
			</div>
		</div>
	})

	return (
		<>
			<div className="bag-container">

				<div className='bag-title'>
					<div className="hero-image">
						<div className="hero-text">
							<h1 className="cart-text">Shopping Bag</h1>
						</div>
					</div>
				</div>
				<div className='bag-cart'>{displayCart}</div>
				<div className='bag-subtotal'>Subtotal ${subtotal}</div>
				<button className='btn btn-success'>Checkout</button>
			</div>
		</>
	)
}

