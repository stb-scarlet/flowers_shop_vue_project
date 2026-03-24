import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginRegisterStore = defineStore("loginRegister", () => {
	const usersData = ref(JSON.parse(localStorage.getItem("usersData")) || []);
	const registerVerification = (data) => {
		const exists = usersData.value.find(
			(u) =>
				u.username === data.username ||
				u.email === data.email ||
				u.phone === data.phone
		);

		if (exists) {
			return {
				status: false,
				message: "User already exists"
			};
		}

		const newUser = {
			username: data.username,
			email: data.email,
			phone: data.phone,
			password: data.password,
			token:
				Math.random().toString(36).substring(2, 15) +
				Math.random().toString(36).substring(2, 15)
		};

		usersData.value.push(newUser);

		localStorage.setItem("usersData", JSON.stringify(usersData.value));

		return {
			status: true,
			message: "Registration successful"
		};
	};

	const loginVerification = (data) => {
		const user = usersData.value.find((u) => ((u.email === data?.email) || (u.username === data?.username)) && u.password === data?.password)
		if (user) {
			localStorage.setItem("currentUser", JSON.stringify(user));
			return {
				status: true,
				message: "Login successful"
			}
		} else {
			return {
				status: false,
				message: "Invalid username or password"
			}
		}
	};

	return { usersData, registerVerification, loginVerification };
});