import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginRegisterStore = defineStore("loginRegister", () => {
	const usersDate = ref(JSON.parse(localStorage.getItem("usersDate")) || []);
	const isLoginActive = ref(false);
	const isUpdateProfile = ref(false);
	const isAuthenticated = ref(JSON.parse(localStorage.getItem("token") || null));

	const toggleLogin = () => {
		isLoginActive.value = !isLoginActive.value;
	};

	const toggleUpdateProfile = () => {
		isUpdateProfile.value = !isUpdateProfile.value;
	}

	const closeLogin = () => {
		isLoginActive.value = false;
		isUpdateProfile.value = false;
	};

	const registerVerification = (date) => {
		const exists = usersDate.value.find(
			(u) =>
				u.username === date.username ||
				u.email === date.email ||
				u.phone === date.phone
		);
		if (exists) {
			return {
				status: false,
				message: "User already exists"
			};
		}

		const newUser = {
			username: date.username,
			email: date.email,
			phone: date.phone,
			password: date.password,
		};

		usersDate.value.push(newUser);
		localStorage.setItem("usersDate", JSON.stringify(usersDate.value));

		return {
			status: true,
			message: "Registration successful"
		};
	};

	const loginVerification = (date) => {
		const user = usersDate.value.find((u) => ((u.email === date?.username) || (u.username === date?.username)) && u.password === date?.password)
		if (user) {
			localStorage.setItem("currentUser", JSON.stringify(user));
			return {
				status: true,
				message: "Login successful"
			}
		} else {
			const token = Math.random().toString(36).substring(2, 15);
			localStorage.setItem("token", token);
			return {
				status: false,
				message: "Invalid username or password"
			}
		}
	};

	const updateVerification = (date) => {
		const currentUser = JSON.parse(localStorage.getItem("currentUser"));
		const oldUser = usersDate.value.find(u => u.email === currentUser.email);
		if (currentUser.email === date.email && oldUser.email !== date.email) {
			return {
				status: false,
				message: "Email already exists"
			}
		} else if (currentUser.username === date.username && oldUser.username !== date.username) {
			return {
				status: false,
				message: "Username already exists"
			}
		} else if (currentUser.phone === date.phone && oldUser.phone !== date.phone) {
			return {
				status: false,
				message: "Phone already exists"
			}
		} else {
			const index = usersDate.value.findIndex(u => u.email === currentUser.email);
			usersDate.value[index] = date;
			localStorage.setItem("usersDate", JSON.stringify(usersDate.value));
			localStorage.setItem("currentUser", JSON.stringify(date));
			return {
				status: true,
				message: "Update successful"
			}
		}
	}

	const currentUser = JSON.parse(localStorage.getItem("currentUser"));

	return { isAuthenticated, usersDate, registerVerification, loginVerification, isLoginActive, toggleLogin, currentUser, isUpdateProfile, toggleUpdateProfile, closeLogin, updateVerification };
});