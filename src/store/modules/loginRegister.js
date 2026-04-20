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

		// Validate phone number format
		if (data.phone.length !== 19) {
			return {
				status: false,
				message: "Phone number must be in the format +998 (XX) XXX-XX-XX"
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

	const user = usersData.value.find(u => u.id === data.id)

	if (usersData.value.some(d => d.email === data.email && d.email !== user.email)) {
		return {
			status: false,
			message: "Email is already exists."
		}
	} else if (usersData.value.some(d => d.username === data.username && d.username !== user.username)) {
		return {
			status: false,
			message: "Username is already exists."
		}
	} else {
		const index = usersData.value.findIndex(i => i.id === user.id)
		usersData.value.splice(index, 1, { ...data })
		localStorage.setItem("usersData", JSON.stringify(usersData.value));
		localStorage.setItem("currentUser", JSON.stringify(data))
		currentUser.value = data;
		return {
			status: true,
			message: "You are successfully updated."
		}
	}
}

	const logout = () => {
		currentUser.value = null;
		isLoginActive.value = false;
		isUpdateProfile.value = false;
	};

	const currentUser = ref(JSON.parse(localStorage.getItem("currentUser")) || null);

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

	return { usersData, registerVerification, loginVerification, isLoginActive, toggleLogin, currentUser, isUpdateProfile, toggleUpdateProfile, closeLogin, updateVerification, logout };
});