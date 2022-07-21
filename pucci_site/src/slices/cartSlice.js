import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< refs/remotes/awsaylot/main
	cart: []
=======
>>>>>>> adding cart and redux
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCart: (state, action) => {

		},
		addToCart: (state, action) => {
<<<<<<< refs/remotes/awsaylot/main
			state.cart.push(action.payload) 
=======
			state[action.payload.title] = action.payload
>>>>>>> adding cart and redux
		},
		removeFromCart: (state, action) => {

		},
		changeQuantity: (state, action) => {
			state.user = action.payload
		},
		clearCart: (state, action) => {
			state.user = action.payload
		}
	}
})

export const {addToCart, removeFromCart, changeQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer