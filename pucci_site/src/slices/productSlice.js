import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/product.service";

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = productService.getAllProducts()
		return response
	}
)

const initialState = {
	products: [],
	loading: 'idle'
}



const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				if (state.loading === 'idle') {
					console.log('fetching')
					state.loading = 'pending'
				}
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = (action.payload)
				if (state.loading==='pending') {
					state.loading = 'idle'
					console.log('retrieved')
				}
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				if (
					state.loading === 'pending'
				) {
					console.log('rejected')
					state.loading = 'idle'
				}
			})
	}
})


export default productSlice.reducer