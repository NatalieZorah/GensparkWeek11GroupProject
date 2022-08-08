import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (payload) => {
		const response = authService.login(payload.username, payload.password)
		return response
	}
)

const initialState = {
	user: undefined,
	loading: 'idle'
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// login: (state, action) => {
		// 	authService.login(action.payload.username, action.payload.password)
		// 	console.log("Login attempted")
		// },
		// signUp: (state, action) => {

		// },
		// addUser: (state, action) => {
		// 	state.user = action.payload
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state, action) => {
				if (state.loading === 'idle') {
					console.log('logging in')
					state.loading = 'pending'
				}
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.user = (action.payload)
				window.location.reload();
				if (state.loading === 'pending') {
					state.loading = 'idle'
					console.log('logged in')
				}
			})
			.addCase(loginUser.rejected, (state, action) => {
				if (
					state.loading === 'pending'
				) {
					console.log('rejected')
					state.loading = 'idle'
				}
			})
	}
})

export const {login, signUp, addUser} = authSlice.actions

export default authSlice.reducer