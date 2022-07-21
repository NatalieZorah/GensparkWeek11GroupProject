import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		getCart: (state, action) => {

		},
		addToCart: (state, action) => {
			state[action.payload.title] = action.payload
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