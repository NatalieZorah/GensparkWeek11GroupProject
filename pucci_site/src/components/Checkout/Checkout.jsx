import React, { useState } from 'react'
import './Checkout.css'

const Checkout = () => {
	const [address, setAddress] = useState("")
	const [state, setState] = useState("")
	const [city, setCity] = useState("");
	const [zip, setZip] = useState("")
	const [addressSaved, setAddressSaved] = useState(false)
	const [cardNumber, setCardNumber] = useState("")
	const [expiration, setExpiration] = useState("");
	const [cvc, setCvc] = useState("")
	const [nameOnCard, setNameOnCard] = useState("");

	const placeOrder = (e) => {
		e.preventDefault()
		console.log(address)
	}

  return (
	<div>
		<h1>Shipping information</h1>
			{!addressSaved ? (
				<form>
				<label>
					Address
					<input value={address} placeholder="Address" onChange={e => setAddress(e.target.value)} />
				</label>
				<label>
					City
					<input value={city} placeholder="City" onChange={e => setCity(e.target.value)}/>
				</label>
				<label>
					State
					<input value={state} placeholder="State" onChange={e => setState(e.target.value)}/>
				</label>
				<label>
					Zip Code
					<input value={zip} placeholder="Zip Code" onChange={e => setZip(e.target.value)}/>
				</label>
				<button>Save Address and Select Shipping</button>
			</form>
			) : (
				<p>Select Shipping!</p>
			)}
			
			
		<h1>Billing information</h1>
		<form>
			<label>
				Name on Card
				<input value={nameOnCard} placeholder="Name" onChange={e => setNameOnCard(e.target.value)} />
			</label>
			<label>
				Card Number
				<input value={cardNumber} placeholder="Card Number" onChange={e => setCardNumber(e.target.value)} />
			</label>
			<label>
				Expiration Date
				<input value={expiration} placeholder="Expiration Date" onChange={e => setExpiration(e.target.value)} />
			</label>
			<label>
				Security Code
				<input value={cvc} placeholder="Security Code" onChange={e => setCvc(e.target.value)} />
			</label>
		</form>
		<button onClick={placeOrder}>Place Order</button>
		<h1>Order Details</h1>
		<div>
			This is where order details will be placed including taxes and prices/totals
		</div>
	</div>
  )
}

export default Checkout