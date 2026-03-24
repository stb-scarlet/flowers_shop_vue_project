<template>
  <div class="login-container">
    <Notice
      :notice="notice"
    />
    <div class="l-header">
      <button
        class="lh-button"
        @click="activeForm = 'login'"
        :class="{ activeButton: activeForm === 'login' }"
      >
        Login
      </button>
      <button
        class="lh-button"
        @click="activeForm = 'register'"
        :class="{ activeButton: activeForm === 'register' }"
      >
        Register
      </button>
    </div>
    <div class="l-main">
      <form
        class="login-form"
        v-if="activeForm === 'login'"
        @submit.prevent="login"
      >
        <p class="title">Enter your username or email and password to login.</p>
        <input
          type="text"
          class="username"
          placeholder="Username or Email"
          v-model="loginData.username"
          required
        />
        <input
          type="text"
          class="password"
          placeholder="Password"
          v-model="loginData.password"
          required
        />
        <button class="forgot">Forgot Password?</button>
        <button class="login">Login</button>
      </form>
      <form
        class="register-form"
        v-if="activeForm === 'register'"
        @submit.prevent="register"
      >
        <input
          type="text"
          class="username"
          placeholder="Username"
          v-model="registerData.username"
          required
        />
        <input
          type="text"
          class="email"
          placeholder="Email"
          v-model="registerData.email"
          required
        />
        <input
          type="text"
          class="phone"
          placeholder="Phone"
          v-model="registerData.phone"
          required
          @input="phoneInput($event)"
        />
        <input
          type="text"
          class="password"
          placeholder="Password"
          v-model="registerData.password"
          required
        />
        <button class="forgot">Forgot Password?</button>
        <button class="login">Login</button>
      </form>
      <p class="or">Or login with</p>
      <div class="lb-buttons">
        <button class="lb-button">
          <i class="fab fa-google"></i>
          <p>Login with Google</p>
        </button>
        <button class="lb-button">
          <i class="fab fa-facebook-f"></i>
          <p>Login with Facebook</p>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Notice from "@/components/ui/Notice.vue";
import { useLoginRegisterStore } from "@/store/modules/loginRegister";
const loginRegisterStore = useLoginRegisterStore();
const notice = ref({});
const activeForm = ref("login");
const loginData = ref({
  username: "",
  password: "",
});
const registerData = ref({
  username: "",
  email: "",
  phone: "",
  password: "",
});

const phoneInput = (e) => {
  let value = e.target.value.replace(/\D/g, "");
  let formatted = "";
  if (value.startsWith("998")) {
    value = value.substring(3);
  }
  formatted = "+998 ";

  if (value.length > 0) {
    formatted += "(" + value.substring(0, 2);
  }

  if (value.length > 2) {
    formatted += ") " + value.substring(2, 5);
  }

  if (value.length > 5) {
    formatted += "-" + value.substring(5, 7);
  }

  if (value.length > 7) {
    formatted += "-" + value.substring(7, 9);
  }

  registerData.value.phone = formatted;
};
const register = () => {
  const result = loginRegisterStore.registerVerification(registerData.value);

  notice.value = result;

  if (result.status) {
    activeForm.value = "login";

    loginData.value.username = registerData.value.username;
    loginData.value.password = registerData.value.password;

    login();
  }
};

const login = () => {
  const payload = {
    username: loginData.value.username,
    password: loginData.value.password,
  };
  const result = loginRegisterStore.loginVerification(payload);

  notice.value = result;
};
</script>
<style lang="scss" scoped>
.login-container {
  z-index: 150;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px 100px;
  .l-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 35px;
    .lh-button {
      cursor: pointer;
      padding: 0 20px;
      background-color: transparent;
      color: rgb(0, 0, 0);
      border: none;
      font-size: 20px;
      font-weight: 600;
      font-family: "Quicksand", sans-serif;
      &.activeButton {
        color: rgb(0, 180, 0);
      }
    }
    .lh-button:not(:last-child) {
      border-right: 1px solid rgb(0, 0, 0);
    }
  }
  .l-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .title {
        font-size: 14px;
        font-weight: 600;
        font-family: "Quicksand", sans-serif;
        color: rgb(100, 100, 100);
        margin-bottom: 20px;
      }
      .username,
      .password {
        width: 100%;
        height: 40px;
        border: 1px solid rgb(100, 100, 100);
        border-radius: 5px;
        margin-bottom: 15px;
        padding: 0 10px;
        font-family: "Quicksand", sans-serif;
        font-size: 16px;
        outline: none;
        &:focus {
          border: none;
          outline: 1px solid rgb(0, 180, 0);
        }
      }
      .forgot {
        display: flex;
        align-self: flex-end;
        background-color: transparent;
        border: none;
        margin-bottom: 20px;
        &:hover {
          color: rgb(0, 180, 0);
        }
      }
      .login {
        cursor: pointer;
        width: 100%;
        height: 40px;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
        margin-bottom: 40px;
        padding: 0 10px;
        font-family: "Quicksand", sans-serif;
        border: none;
        background-color: rgb(0, 180, 0);
        color: rgb(245, 242, 235);
        font-weight: 700;
        font-size: 16px;
        transition: background-color 0.2s;
        &:hover {
          background-color: rgb(0, 190, 0);
        }
      }
    }
    .register-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .title {
        font-size: 14px;
        font-weight: 600;
        font-family: "Quicksand", sans-serif;
        color: rgb(100, 100, 100);
        margin-bottom: 20px;
      }
      .username,
      .email,
      .phone,
      .password {
        width: 100%;
        height: 40px;
        border: 1px solid rgb(100, 100, 100);
        border-radius: 5px;
        margin-bottom: 15px;
        padding: 0 10px;
        font-family: "Quicksand", sans-serif;
        font-size: 16px;
        outline: none;
        &:focus {
          border: none;
          outline: 1px solid rgb(0, 180, 0);
        }
      }
      .forgot {
        display: flex;
        align-self: flex-end;
        background-color: transparent;
        border: none;
        margin-bottom: 20px;
        &:hover {
          color: rgb(0, 180, 0);
        }
      }
      .login {
        cursor: pointer;
        width: 100%;
        height: 40px;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
        margin-bottom: 40px;
        padding: 0 10px;
        font-family: "Quicksand", sans-serif;
        border: none;
        background-color: rgb(0, 180, 0);
        color: rgb(245, 242, 235);
        font-weight: 700;
        font-size: 16px;
        transition: background-color 0.2s;
        &:hover {
          background-color: rgb(0, 190, 0);
        }
      }
    }
    .or {
      font-size: 14px;
      font-weight: 600;
      font-family: "Quicksand", sans-serif;
      color: rgb(100, 100, 100);
      margin-bottom: 20px;
    }
    .lb-buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      .lb-button {
        background-color: transparent;
        border: 1px solid rgb(100, 100, 100);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;
        font-family: "Quicksand", sans-serif;
        gap: 6px;
        padding: 10px;
        i {
          font-size: 20px;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.65);
        }
      }
    }
  }
}
</style>
