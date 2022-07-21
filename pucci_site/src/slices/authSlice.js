import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

const initialState = {
	user: undefined,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			authService.login(action.payload.username, action.payload.password)
			console.log("Login attempted")
		},
		signUp: (state, action) => {

		},
		addUser: (state, action) => {
			state.user = action.payload
		}
	}
})

export const {login, signUp, addUser} = authSlice.actions

export default authSlice.reducer