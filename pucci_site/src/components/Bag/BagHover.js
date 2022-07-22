import React from 'react'
import { useSelector } from 'react-redux'
import "./BagHover.css"

const BagHover = (props) => {
	const cart = useSelector(state => state.cart.cart);
	console.log(cart)

	const displayCart = cart.map((product, index) => {
		return <div key={index}>{product.title} {product.price}</div>
	})
	
  return (
	<div className='bag-hover'>
		Your Bag
		{displayCart}
	</div>
  )
}

export default BagHover