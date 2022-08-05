import axios from "axios";
import { useDispatch } from 'react-redux'
import { addUser } from '../slices/authSlice'

const API_URL = "http://localhost:8080/api/auth/"
class AuthService {

	login(username, password) {
		return axios
			.post(API_URL + "signin", { username, password })
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data))
				}
				return response.data
			}).catch((error) => {
				console.log("Error: Unauthorized credentials", error);
			});
	}

	logout() {
		localStorage.removeItem("user")
		window.location.reload()
	}

	register(username, email, password, name, phone) {
		let role = ['user']
		return axios.post(API_URL + "signup", {
			username,
			email,
			password,
			signInType: "user", //Admin accounts should be populated through other means
			name,
			phone,
			role
		});
	}
}

export default new AuthService();