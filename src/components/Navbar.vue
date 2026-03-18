<template>
  <div class="desktop-navbar" :class="{ 'navbar-hide': navbarHide }">
    <!-- Top Header -->
    <div class="top-header">
      <div class="th-container">
        <div class="th-right">
          <ul class="th-inquire">
            <li class="th-telephone">
              <a href="#" class="th-telephone">
                <div class="th-telephone-icon">
                  <img src="/action-icons/phone-icon.svg" alt="">
                </div>
                <span>+1 (23) 456 789</span>
              </a>
            </li>
            <li class="th-message">
              <a href="#" class="th-message">
                <div class="th-message-icon">
                  <img src="/action-icons/envelope-icon.svg" alt="" />
                </div>
                <span>example.org</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="th-left">
          <ul class="th-settings">
            <li class="th-currency">
              <button class="th-currency" @click="toggleCurrency">
                <span>Currency: </span>
              </button>
            </li>
            <li class="th-language" ref="languageList">
              <button class="th-language" @click="toggleLanguage">
                <span>Language: </span>
              </button>
            </li>
            <li class="th-theme-box"></li>
          </ul>
        </div>
        <MobileTopHeader @handleOverlay="a" />
      </div>
    </div>
    <!-- Desktop Navbar -->
    <div class="desktop-navbar-container">
      <!-- Main Navbar -->
      <div class="main-navbar">
        <div class="main-navbar-container">
          <!-- Logo -->
          <div class="logo">
            <router-link to="/">
              <img src="/logo.png" alt="Company Logo" />
            </router-link>
          </div>
          <!-- Middle Side -->
          <div class="middle-side">
            <!-- Navigation Links -->
            <nav class="nav-links" :class="{ 'nav-links-hide': search }">
              <ul class="links">
                <!-- Home Link -->
                <li class="link-container">
                  <router-link
                    to="/"
                    exact-active-class="active-link"
                    class="link"
                    >Home</router-link
                  >
                </li>
                <!-- Shop Link -->
                <li class="link-container">
                  <router-link
                    to="/shop"
                    active-class="active-link"
                    class="link"
                    >Shop</router-link
                  >
                </li>
                <!-- About Us Link -->
                <li class="link-container">
                  <router-link
                    to="/about-us"
                    active-class="active-link"
                    class="link"
                    >About Us</router-link
                  >
                </li>
                <!-- Contact Us Link -->
                <li class="link-container">
                  <router-link
                    to="/contact-us"
                    active-class="active-link"
                    class="link"
                    >Contact Us</router-link
                  >
                </li>
              </ul>
            </nav>

            <!-- Search Bar -->
            <div class="search-bar">
              <div
                class="search-container"
                :class="{ 'search-container-show': search }"
              >
                <label for="search" class="search-input-container">
                  <input
                    type="text"
                    name="search"
                    class="search-input"
                    autocomplete="off"
                    placeholder="Search..."
                    v-on:focus="showSearchView"
                  />
                </label>
                <div class="search-button-container">
                  <button class="search-button">
                    <div class="search-icon">
                      <img
                        src="/action-icons/magnifying_glass-icon.svg"
                        alt=""
                      />
                    </div>
                    <span>Search</span>
                  </button>
                </div>
              </div>
              <div class="search-view" :class="{ 'search-view-show': search }">
                <div class="a"></div>
              </div>
            </div>
          </div>
          <!-- Navbar Actions: Search, Wishlist, Cart, Login -->
          <div class="nav-actions">
            <ul class="actions-wrapper">
              <!-- Search Icon -->
              <li class="action-item">
                <button
                  class="action"
                  id="search-button"
                  :class="{ 'active-action': search }"
                  @click="toggleSearch"
                >
                  <img src="/action-icons/magnifying_glass-icon.svg" alt="" />
                </button>
              </li>
              <!-- Wishlist Icon -->
              <li class="action-item">
                <router-link
                  to="/wishlist"
                  class="action"
                  active-class="active-action"
                >
                  <img src="/action-icons/heart-icon.svg" alt="" />
                </router-link>
              </li>
              <!-- Cart Icon -->
              <li class="action-item">
                <router-link
                  to="/cart"
                  class="action"
                  active-class="active-action"
                >
                  <img src="/action-icons/cart-icon.svg" alt="" />
                </router-link>
              </li>
              <!-- Login Button -->
              <li class="action-item">
                <button class="login">
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MobileTopHeader from "./MobileTopHeader.vue";
import { onMounted, ref, onBeforeUnmount, watch } from "vue";
let lastScroll = 0;
const toggleOverlay = ref(false);
const navbarHide = ref(false);
const search = ref(false);
const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll < 120) {
    navbarHide.value = false;
  } else if (currentScroll < lastScroll && currentScroll > 120) {
    navbarHide.value = false;
  } else if (currentScroll > lastScroll && currentScroll > 120) {
    navbarHide.value = true;
  }

  lastScroll = currentScroll;
};
const a = (val) => {
  toggleOverlay.value = val;
}
const handleClick = (event) => {
  if (
    event.target.closest(
      ".search-container, .search-view, .th-language-box, #search-button, .th-currency-box",
    )
  ) {
    return;
  }
  search.value = false;
  toggleOverlay.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleClick);
});

const toggleSearch = () => {
  search.value = !search.value;
  toggleOverlay.value = !toggleOverlay.value;
};
const showSearchView = () => {
  search.value = true;
  toggleOverlay.value = true;
};
watch(toggleOverlay, (val) => {
  if (val) {
    document.body.classList.add("overlay");
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.classList.remove("overlay");
  }
});
</script>
<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(245, 242, 235);
  font-family: "Quicksand", sans-serif;
}
.desktop-navbar {
  position: fixed;
  display: block;
  width: 100%;
  z-index: 100;
  background-color: rgb(245, 242, 235);
  transition: transform 0.3s ease-out;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .top-header {
    position: relative;
    padding-top: 10px;
    z-index: 1;
    width: 100%;
    height: 40px;
    .th-container {
      max-width: 1500px;
      padding: 0 clamp(10px, 1vw, 20px);
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .th-left,
      .th-right {
        display: none;
      }
    }
  }
  .desktop-navbar-container {
    width: 100%;
    .main-navbar {
      height: 60px;
      max-width: 1500px;
      padding: 0 clamp(10px, 1vw, 20px);
      margin: 0 auto;
      .main-navbar-container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          display: none;
        }
        .middle-side {
          height: 100%;
          min-width: 0;
          position: relative;
          flex-grow: 1;
          .nav-links {
            display: none;
          }

          .search-bar {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-50%, -50%);
            padding: 10px 0;
            height: 100%;
            width: 100%;
            .search-container {
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: rgb(0, 180, 0);
              border: 1px solid rgb(0, 180, 0);
              border-radius: 10px;
              transform: translateY(0px);
              visibility: visible;
              transition: transform 0.2s ease-out;
              .search-input-container {
                height: 100%;
                width: 100%;
                .search-input {
                  outline: none;
                  border: none;
                  width: 100%;
                  height: 100%;
                  background-color: rgb(255, 255, 255);
                  border-radius: 10px;
                  padding-left: clamp(15px, 1vw, 20px);
                  font-size: 16px;
                  font-weight: 500;
                  font-family: "Quicksand", sans-serif;
                  color: rgb(0, 0, 0);
                  &::placeholder {
                    color: rgba(0, 0, 0, 0.5);
                  }
                }
              }
              &.search-container-show {
                transform: translateY(0px);
                visibility: visible;
              }
              .search-button-container {
                height: 100%;
                padding: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                .search-button {
                  padding: 0 4.8px;
                  height: 100%;
                  border-radius: 10px;
                  font-size: 16px;
                  font-weight: 500;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
                  border: none;
                  display: flex;
                  background-color: transparent;
                  color: white;
                  font-family: "Quicksand", sans-serif;
                  align-items: center;
                  cursor: pointer;
                  .search-icon {
                    width: 18px;
                    height: 18px;
                    filter: invert(100%);
                    margin-right: 5px;
                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                  @media (max-width: 767px) {
                    span {
                      display: none;
                    }
                  }
                }
              }
            }
            .search-view {
              position: absolute;
              top: 100%;
              width: 100%;
              padding: 0;
              opacity: 0;
              overflow: hidden;
              border-radius: 10px;
              visibility: hidden;
              transform: translateY(25px);
              transition:
                opacity 0.2s ease-in,
                transform 0.2s ease-out;
              .a {
                height: 150px;
                border-radius: 10px;
                padding-left: clamp(15px, 1vw, 20px);
                background-color: rgb(255, 255, 255);
              }
              &.search-view-show {
                transform: translateY(0px);
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
        .nav-actions {
          display: none;
        }
      }
    }
  }
  &.navbar-hide {
    transform: translateY(-100%);
  }
  @media (min-width: 1024px) {
    .top-header {
      padding-top: 0;
      background-color: rgb(0, 180, 0);
      .th-container {
        .th-left,
        .th-right {
          display: block;
          .th-settings,
          .th-inquire {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            .th-telephone,
            .th-message,
            .th-currency,
            .th-language {
              margin: 0 4px;
              background-color: transparent;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              color: rgb(245, 242, 235);
              font-size: 14px;
              font-weight: 700;
              border: none;
              .th-telephone-icon,
              .th-message-icon {
                width: 18px;
                height: 18px;
                margin-right: 4px;
                filter: invert(1);
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
    .desktop-navbar-container {
      .main-navbar {
        height: 80px;
        .main-navbar-container {
          .logo {
            height: 40%;
            display: block;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .middle-side {
            .nav-links {
              position: absolute;
              z-index: 1;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 100%;
              transition:
                transform 0.2s ease-out,
                opacity 0.2s ease-out;
              .links {
                height: 100%;
                display: flex;
                list-style: none;
                .link-container {
                  height: 100%;
                  .link {
                    padding: 0 clamp(14px, 1vw, 20px);
                    height: 100%;
                    text-decoration: none;
                    color: rgb(82, 82, 82);
                    font-size: clamp(18px, 1vw, 22px);
                    font-weight: 500;
                    font-family: "Quicksand", sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    transition: color 0.2s ease-in;
                    cursor: pointer;
                    &:hover {
                      color: rgba(255, 25, 83, 0.5);
                    }
                    &::after {
                      content: "";
                      position: absolute;
                      left: 0;
                      bottom: 0;
                      width: 100%;
                      height: 2px;
                      background-color: rgb(255, 25, 83);
                      transform: scaleX(0);
                      transform-origin: right;
                      transition: transform 0.3s ease;
                    }

                    &:hover::after,
                    &.active-link::after {
                      transform: scaleX(1);
                      transform-origin: left;
                    }

                    &.active-link {
                      color: rgb(255, 25, 83);
                      background-size: cover;
                      position: relative;
                    }
                  }
                }
              }
              &.nav-links-hide {
                transform: translate(-50%, 25px);
                opacity: 0;
                visibility: hidden;
              }
            }
            .search-bar {
              padding: 20px 50px;
              .search-container {
                transform: translateY(-25px);
                visibility: hidden;
              }
              .search-view {
                padding: 0 50px;
              }
            }
          }
          .nav-actions {
            height: 100%;
            display: block;
            .actions-wrapper {
              height: 100%;
              display: flex;
              list-style: none;
              padding: 20px 0;
              .action-item {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .action {
                  padding: 0 10px;
                  border: none;
                  background-color: transparent;
                  width: 45px;
                  height: 25px;
                  cursor: pointer;
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: filter 0.2s ease-in;
                  }

                  &.active-action img {
                    filter: brightness(0) saturate(100%) invert(21%) sepia(96%)
                      saturate(7492%) hue-rotate(340deg) brightness(101%)
                      contrast(101%);
                  }
                }

                .login {
                  margin-left: 10px;
                  padding: 0 18px;
                  height: 100%;
                  background-color: rgb(0, 180, 0);
                  color: white;
                  font-size: 16px;
                  border-radius: clamp(5px, 2.5vw, 6px);
                  letter-spacing: 1.2px;
                  font-family: "Quicksand", sans-serif;
                  display: flex;
                  align-items: center;
                  font-weight: 500;
                  border: none;
                  cursor: pointer;
                  transition: background-color 0.2s ease-in;
                  &:hover {
                    background-color: rgba(0, 180, 0, 0.8);
                  }
                  i {
                    margin-right: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.overlay {
  // position: sticky;
  overflow: hidden;
  &::before {
    position: fixed;
    inset: 0;
    content: "";
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(4px);
    z-index: 99;
  }
}
</style>
