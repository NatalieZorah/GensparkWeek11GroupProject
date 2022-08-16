import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import orderService from '../../services/order.service'
import { clearCart } from '../../slices/cartSlice'
import './Checkout.css'

const Checkout = () => {
	const [fullName, setFullName] = useState("")
	const [address, setAddress] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zip, setZip] = useState("")
	const [cardNumber, setCardNumber] = useState("")
	const [expirationDate, setExpirationDate] = useState("")
	const [cvc, setCvc] = useState("")
	const cart = useSelector(state => state.cart.cart)
	const [shipping, setShipping] = useState(20)
	const dispatch = useDispatch();


	const calculateSubtotal = () => {
		var subtotal = 0;
		for(let i = 0; i < cart.length; i++) {
			subtotal += cart[i].price
		}
		return subtotal
	}

	const subtotal = calculateSubtotal();


	const calculateTax = () => {
		return subtotal * .11
	}

	const tax = calculateTax()

	const calculateTotal = () => {
		return subtotal + shipping + tax
	}

	const total = calculateTotal()

	const placeOrder = (e) => {
		e.preventDefault()
		orderService.createOrder(cart)
		dispatch(clearCart())
		console.log(cart)
	}

  return (
	<div className='checkout'>
		<div className='shipping-payment'>
			<p>Shipping</p>
			<form>
				<input className='name' type="text" placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)}/>
				<input className='address' type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)}/>
				<input className='city' type="text" placeholder='City' value={city} onChange={e => setCity(e.target.value)}/>
				<select className='State' value={state} onChange={e => setState(e.target.value)}>
					<option value="AK">Ak</option>
					<option value="AL">AL</option>
					<option value="AR">AR</option>
					<option value="AS">AS</option>
					<option value="AZ">AZ</option>
					<option value="CM">CM</option>
					<option value="CO">CO</option>
					<option value="CT">CT</option>
					<option value="DC">DC</option>
					<option value="DE">DE</option>
					<option value="FL">FL</option>
					<option value="GA">GA</option>
					<option value="GU">GU</option>
					<option value="HI">HI</option>
					<option value="IA">IA</option>
					<option value="ID">ID</option>
					<option value="IL">IL</option>
					<option value="IN">IN</option>
					<option value="LA">LA</option>
					<option value="MA">KY</option>
					<option value="MD">MD</option>
					<option value="ME">ME</option>
					<option value="MI">MI</option>
					<option value="MN">MN</option>
					<option value="MO">MO</option>
					<option value="MS">MS</option>
					<option value="MT">MT</option>
					<option value="NC">NC</option>
					<option value="ND">ND</option>
					<option value="NE">NE</option>
					<option value="NH">NH</option>
					<option value="NJ">NJ</option>
					<option value="NM">NM</option>
					<option value="NV">NV</option>
					<option value="NY">NY</option>
					<option value="OH">OH</option>					<option value="OH">OH</option>
					<option value="OK">OK</option>
					<option value="OR">OR</option>
					<option value="PA">PA</option>					<option value="PA">PA</option>
					<option value="PR">PR</option>
					<option value="RI">RI</option>
					<option value="SC">SC</option>
					<option value="SD">SD</option>
					<option value="TN">TN</option>
					<option value="TX">TX</option>
					<option value="TT">TT</option>
					<option value="UT">UT</option>
					<option value="VA">VA</option>
					<option value="VI">VI</option>
					<option value="VT">VT</option>
					<option value="WA">WA</option>
					<option value="WV">WV</option>
					<option value="WI">WI</option>
					<option value="WY">WY</option>
				</select>
				<input className='Zip' type="text" size={5} pattern="[0-9]*" placeholder='Zip' value={zip} onChange={e => setZip((v) => (e.target.validity.valid ? e.target.value : v))}/>
			</form>
			<p>Payment info</p>
			<form>
				<input type="text" size={16} pattern="[0-9]*" placeholder='Card Number' maxLength={16} value={cardNumber} onChange={e => setCardNumber((v) => (e.target.validity.valid ? e.target.value : v))}/>
				<input type="text" size={4} pattern="[0-9]*" placeholder='MMYY' maxLength={4} value={expirationDate} onChange={e => setExpirationDate((v) => (e.target.validity.valid ? e.target.value : v))}/>
				<input type="text" size={3} pattern="[0-9]*" placeholder='CVC' maxLength={3} value={cvc} onChange={e => setCvc((v) => (e.target.validity.valid ? e.target.value : v))}/>
			</form>
			<button className='place-order btn-success' onClick={placeOrder}>Place Order</button>
		</div>
		
		<div className='details'>
			<p>Details</p>
			<p>Subtotal: {subtotal}</p>
			<p>Tax: {tax}</p>
			<p>Shipping: {shipping}</p>
			<p>Total: ${total}</p>
		</div>
	</div>
  )
}

export default Checkout