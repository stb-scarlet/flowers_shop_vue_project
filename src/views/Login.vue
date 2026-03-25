<template>
  <div
    class="login-container"
    v-if="
      loginRegisterStore.isLoginActive || loginRegisterStore.isUpdateProfile
    "
  >
    <Notice :notice="notice" />
    <div class="l-close">
      <button class="lc-button" @click="loginRegisterStore.closeLogin">
        <svg
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="lc-icon"
        >
          <path
            d="M6 4.5858L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.5858 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.5858Z"
          />
        </svg>
      </button>
    </div>
    <div class="l-header" v-if="!loginRegisterStore.isUpdateProfile">
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
        v-if="activeForm === 'login' && !loginRegisterStore.isUpdateProfile"
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
        <button class="forgot" type="button" >Forgot Password?</button>
        <button class="login" type="submit">Login</button>
      </form>
      <form
        class="register-form"
        v-if="activeForm === 'register' && !loginRegisterStore.isUpdateProfile"
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
        <button class="forgot" type="button">Forgot Password?</button>
        <button class="login" type="submit">Register</button>
      </form>
      <form
        class="update-form"
        v-if="loginRegisterStore.isUpdateProfile"
        @submit.prevent="update"
      >
        <div class="profile-image">
          <div
            class="current-image"
            v-if="
              loginRegisterStore.currentUser.profileImage &&
              !updataData.profileImage
            "
          >
            <img :src="loginRegisterStore.currentUser.profileImage" alt="" />
          </div>
          <div
            class="not-image"
            v-else-if="
              !loginRegisterStore.currentUser.profileImage &&
              !updataData.profileImage
            "
          >
            <img src="/action-icons/user-icon.svg" alt="" />
          </div>
          <div class="new-image" v-if="updataData.profileImage">
            <img :src="updataData.profileImage" alt="" />
          </div>
          <div class="upi-actions">
            <label for="file" class="upload">
              <i class="fas fa-camera"></i>
              <span>Upload Image</span>
            </label>
            <button
              type="button"
              class="u-remove"
              role="button"
              @click="profileImageRemover"
              v-if="
                updataData.profileImage ||
                loginRegisterStore.currentUser.profileImage
              "
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <input
            type="file"
            id="file"
            accept="image/*"
            @change="onFileChange"
            class="image-input"
          />
        </div>
        <input
          type="text"
          class="username"
          placeholder="Username"
          v-model="updataData.username"
          required
        />
        <input
          type="email"
          class="email"
          placeholder="Email"
          v-model="updataData.email"
          required
        />
        <input
          type="text"
          class="phone"
          placeholder="Phone"
          v-model="updataData.phone"
          required
          @input="phoneInput($event)"
        />
        <input
          type="text"
          class="password"
          placeholder="Password"
          v-model="updataData.password"
          required
        />
        <button class="forgot" type="button">Forgot Password?</button>
        <button class="login" type="submit">Update</button>
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
import { ref, watch } from "vue";
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
const updataData = ref({
  username: "",
  email: "",
  phone: "",
  password: "",
  profileImage: null,
});

const profileImageRemover = () => {
  updataData.value.profileImage = null;
  loginRegisterStore.currentUser.profileImage = null;
}

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

  if (result.status) {
    localStorage.setItem("token", result.token);
    loginRegisterStore.toggleLogin();
  }
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    updataData.value.profileImage = reader.result;
  };
  reader.readAsDataURL(file);
};

const update = () => {
  const payload = {
    username: updataData.value.username,
    email: updataData.value.email,
    phone: updataData.value.phone,
    password: updataData.value.password,
    profileImage: updataData.value.profileImage,
  };

  const result = loginRegisterStore.updateVerification(payload);

  notice.value = result;

  if (result.status) {
    localStorage.setItem("token", result.token);
    loginRegisterStore.toggleUpdateProfile();
  }
};

watch(
  () => loginRegisterStore.isUpdateProfile,
  (val) => {
    if (val) {
      updataData.value.username = loginRegisterStore.currentUser.username;
      updataData.value.email = loginRegisterStore.currentUser.email;
      updataData.value.phone = loginRegisterStore.currentUser.phone;
      updataData.value.password = loginRegisterStore.currentUser.password;
      updataData.value.profileImage =
        loginRegisterStore.currentUser.profileImage;
    } else {
      updataData.value.username = "";
      updataData.value.email = "";
      updataData.value.phone = "";
      updataData.value.password = "";
      updataData.value.profileImage = null;
    }
  },
);
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
  .l-close {
    position: absolute;
    top: 20px;
    right: 20px;
    .lc-button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: rgb(100, 100, 100);
      height: 20px;
      width: 20px;
      padding: 2px;
      .lc-icon {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      &:active {
        color: rgb(255, 25, 83);
      }
    }
  }
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
    .register-form,
    .update-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .profile-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        .current-image,
        .new-image,
        .not-image {
          height: 110px;
          width: 110px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.1);
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .not-image {
          padding: 20px;
        }
        .image-input {
          display: none;
        }
        .upi-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          .upload,
          .u-remove {
            padding: 10px;
            border-radius: 10px;
            background-color: rgb(0, 180, 0);
            color: rgb(245, 242, 235);
            display: flex;
            font-weight: 700;
            align-items: center;
            border: none;
            gap: 6px;
            cursor: pointer;
            &:hover {
              background-color: rgb(0, 190, 0);
            }
          }
          .u-remove {
            font-size: 18px;
            background-color: rgb(255, 25, 83);
            &:hover {
              background-color: rgba(255, 25, 83, 0.8);
            }
          }
        }
      }
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
