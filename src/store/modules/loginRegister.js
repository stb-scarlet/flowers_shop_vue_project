import { defineStore } from "pinia";
import { ref, watch } from "vue";
export const useLoginRegisterStore = defineStore("loginRegister", () => {
	const usersData = ref(JSON.parse(localStorage.getItem("usersData")) || []);
	const isLoginActive = ref(false);
	const isUpdateProfile = ref(false);

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
			id: new Date(),
			username: data.username,
			email: data.email,
			phone: data.phone,
			password: data.password,
		};

		usersData.value.push(newUser);
		localStorage.setItem("usersData", JSON.stringify(usersData.value));

		return {
			status: true,
			message: "Registration successful"
		};
	};

	const loginVerification = (data) => {
		const user = usersData.value.find((u) => ((u.email === data?.username) || (u.username === data?.username)) && u.password === data?.password);
		if (user) {
			localStorage.setItem("currentUser", JSON.stringify(user));
			currentUser.value = user;
			return {
				status: true,
				message: "Login successful"
			}
		} else {
			return {
				status: false,
				message: "Invalid username or password"
			};
		}
	};

	const updateVerification = (data) => {
		// const currentUser = JSON.parse(localStorage.getItem("currentUser"));
		// const userId = usersData.value.find(u => u.id === currentUser.id);
		// if (currentUser.email === data.email && userId.email !== data.email) {
		// 	return {
		// 		status: false,
		// 		message: "Email already exists"
		// 	}
		// } else if (currentUser.username === data.username && userId.username !== data.username) {
		// 	return {
		// 		status: false,
		// 		message: "Username already exists"
		// 	}
		// } else if (currentUser.phone === data.phone && userId.phone !== data.phone) {
		// 	return {
		// 		status: false,
		// 		message: "Phone already exists"
		// 	}
		// } else {
		// 	const index = usersData.value.findIndex(u => u.email === currentUser.email);
		// 	usersData.value[index] = data;
		// 	localStorage.setItem("usersData", JSON.stringify(usersData.value));
		// 	localStorage.setItem("currentUser", JSON.stringify(data));
		// 	return {
		// 		status: true,
		// 		message: "Updata successful"
		// 	}
		// }

		const userId = usersData.value.find(data => data.id === data.id)

		if (usersData.value.some(d => d.email === data.email && d.email !== userId.email)) {
			return {
				statsu: false,
				message: "Email is already exists."
			}
		} else if (usersData.value.some(d => d.username === data.username && d.username !== userId.username)) {
			return {
				status: false,
				message: "Username is already exists."
			}
		} else {
			const index = usersData.value.findIndex(i => i.id === userId.id)
			usersData.value[index] = data
			localStorage.setItem("usersData", JSON.stringify(usersData.value));
			localStorage.setItem("currentUser", JSON.stringify(data))
			return {
				status: true,
				message: "You are successfully updated."
			}
		}
	}

	const clearUser = (userEmail) => {
		const index = usersData.value.findIndex(u => u.email === userEmail);
		usersData.value.splice(index, 1);
		localStorage.setItem("usersData", JSON.stringify(usersData.value));
	};

	const currentUser = ref(JSON.parse(localStorage.getItem("currentUser")) || {});

	watch(currentUser, (val) => {
		try {
			if (val) {
				localStorage.setItem("currentUser", JSON.stringify(val));
			} else {
				localStorage.removeItem("currentUser");
			}
		} catch (err) {
			console.error(err);
		}
	}, { deep: true });

	return { usersData, registerVerification, loginVerification, isLoginActive, toggleLogin, currentUser, isUpdateProfile, toggleUpdateProfile, closeLogin, updateVerification, clearUser };
});