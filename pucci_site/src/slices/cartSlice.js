import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload) 
		},
		removeFromCart: (state, action) => {
			var index = state.cart.indexOf(action)
			state.cart.splice(index, 1)
		},
		clearCart: (state) => {
			state.cart = []
		}
	}
})

export const {addToCart, removeFromCart, changeQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer