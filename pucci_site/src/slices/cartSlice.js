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
			localStorage.setItem("cart", JSON.stringify(state.cart))
		},
		removeFromCart: (state, action) => {
			var index = state.cart.indexOf(action)
			state.cart.splice(index, 1)
		},
		clearCart: (state) => {
			state.cart = []
		},
		getCartFromStorage: (state, action) => {
			if(localStorage.getItem("cart") != null) {
				console.log("there is a cart")
				state.cart = (JSON.parse(localStorage.getItem("cart")))
			}
		}
	}
})

export const {addToCart, removeFromCart, changeQuantity, getCartFromStorage, clearCart} = cartSlice.actions

export default cartSlice.reducer