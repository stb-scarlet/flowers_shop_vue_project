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
                  <img src="/action-icons/telephone-icon.png" alt="" />
                </div>
                <span>+1 (23) 456 789</span>
              </a>
            </li>
            <li class="th-message">
              <a href="#" class="th-message">
                <div class="th-message-icon">
                  <img src="/action-icons/email-icon.png" alt="" />
                </div>
                <span>example.org</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="th-left">
          <ul class="th-settings">
            <li class="th-currency-box">
              <button class="th-currency" @click="toggleCurrency">
                <span>Currency: </span>
                <div class="th-currency-icon">
                  <div class="usd-icon" ref="usdIcon">
                    <img src="/action-icons/usd-icon.png" alt="" />
                  </div>
                  <div class="rub-icon" ref="rubIcon">
                    <img src="/action-icons/rub-icon.png" alt="" />
                  </div>
                </div>
              </button>
            </li>
            <li class="th-language-box" ref="languageList">
              <button class="th-language" @click="toggleLanguage">
                <div class="language-icon">
                  <img src="/action-icons/languages-icon.png" alt="" />
                </div>
              </button>
              <ul class="th-language-list">
                <li
                  class="th-language-item"
                  v-for="lang in ['RU', 'ENG']"
                  :key="lang"
                >
                  <button class="th-language-button">{{ lang }}</button>
                </li>
              </ul>
            </li>
            <li class="th-theme-box"></li>
          </ul>
        </div>
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
                <label
                  for="search"
                  class="search-input-container"
                  @click="showSearchView"
                >
                  <input
                    type="text"
                    name="search"
                    class="search-input"
                    autocomplete="off"
                    placeholder="Search..."
                    v-on:focus="showSearchView"
                    ref="searchInput"
                  />
                </label>
                <div class="search-button-container">
                  <button class="search-button">
                    <div class="search-icon">
                      <img
                        src="/action-icons/magnifying_glass-icon.png"
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
            <ul class="actions">
              <!-- Search Icon -->
              <li class="action-container">
                <button
                  class="action"
                  id="search-button"
                  :class="{ 'active-action': search }"
                  @click="toggleSearch"
                >
                  <img src="/action-icons/magnifying_glass-icon.png" alt="" />
                </button>
              </li>
              <!-- Wishlist Icon -->
              <li class="action-container">
                <router-link
                  to="/wishlist"
                  class="action"
                  active-class="active-action"
                >
                  <img src="/action-icons/wishlist-icon.png" alt="" />
                </router-link>
              </li>
              <!-- Cart Icon -->
              <li class="action-container">
                <router-link
                  to="/cart"
                  class="action"
                  active-class="active-action"
                >
                  <img src="/action-icons/cart-icon.png" alt="" />
                </router-link>
              </li>
              <!-- Login Button -->
              <li class="action-container">
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
import { onMounted, ref, onBeforeUnmount } from "vue";

let lastScroll = 0;
const navbarHide = ref(false);
const search = ref(false);
const usdIcon = ref(null);
const rubIcon = ref(null);
const languageList = ref(null);

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll < 30) {
    navbarHide.value = false;
  } else if (currentScroll < lastScroll && currentScroll > 110) {
    navbarHide.value = false;
  } else if (currentScroll > lastScroll && currentScroll > 110) {
    navbarHide.value = true;
  }

  lastScroll = currentScroll;
};

const handleClick = (event) => {
  if (
    event.target.closest(
      ".search-container, .search-view, .th-language-box, #search-button, .th-currency-box",
    )
  ) {
    return;
  }
  search.value = false
  document.body.classList.remove("overlay");
  languageList.value?.classList.remove("language-list-active");
};

onMounted(() => {
  rubIcon.value.classList.add("currency-active");
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleClick);
});

const toggleCurrency = () => {
  usdIcon.value.classList.toggle("currency-active");
  rubIcon.value.classList.toggle("currency-active");
  languageList.value.classList.remove("language-list-active");
};

const toggleSearch = () => {
  if (search.value) {
    search.value = false;
    document.body.classList.remove("overlay");
    document.body.style.top = "0";
  } else if (!search.value) {
    document.body.classList.add("overlay");
    document.body.style.top = `-${window.scrollY}px`;
    search.value = true;
  }
};

const toggleLanguage = () => {
  languageList.value.classList.toggle("language-list-active");
};

const showSearchView = () => {
  searchView.value.classList.add("search-view-show");
};
</script>
<style lang="scss">
* {
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
  z-index: 1000;
  transition: transform 0.4s ease-out;
  .top-header {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 30px;
    background-color: rgb(0, 180, 0);
    .th-container {
      max-width: 1500px;
      padding: 0 clamp(10px, 1vw, 20px);
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .th-left .th-settings,
      .th-right .th-inquire {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        .th-telephone,
        .th-message {
          margin: 0 clamp(5px, 0.1vw, 10px);
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: rgb(245, 242, 235);
          .th-telephone-icon,
          .th-message-icon {
            width: 20px;
            height: 20px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .th-message-icon {
            margin-right: 5px;
          }
          span {
            font-size: 14px;
            font-weight: 500;
            font-family: "Quicksand", sans-serif;
          }
        }
        .th-currency-box,
        .th-language-box {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 5px;
        }
        .th-currency-box {
          .th-currency {
            background-color: transparent;
            color: rgb(255, 255, 255);
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-radius: 25px;
            padding: 0 clamp(5px, 0.1vw, 10px);
            cursor: pointer;
            .th-currency-icon {
              width: 22px;
              height: 22px;
              margin-left: 5px;
              position: relative;
              .usd-icon,
              .rub-icon {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgb(245, 242, 235);
                border-radius: 50%;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
        .th-language-box {
          position: relative;
          .th-language {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            backdrop-filter: blur(14px) saturate(180%);
            border: none;
            cursor: pointer;
            transition:
              max-height 0.2s,
              opacity 0.2s;
            .language-icon {
              width: 22px;
              height: 22px;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          .th-language-list {
            position: absolute;
            list-style: none;
            background-color: rgb(245, 242, 235);
            padding: 8px 8px 4px 8px;
            color: rgba(255, 255, 255, 0.8);
            overflow: hidden;
            max-height: 0;
            visibility: hidden;
            opacity: 0;
            clip-path: polygon(100% 0, 90% 15%, 0 15%, 0 100%, 100% 100%);
            display: flex;
            top: 100%;
            right: clamp(5px, 0.1vw, 10px);
            transition: all 0.2s ease-in;
            .th-language-item {
              .th-language-button {
                border: none;
                background-color: transparent;
                font-weight: 700;
                transition: color 0.2s ease-in;
                cursor: pointer;
                &:hover {
                  color: rgba(255, 25, 83, 0.5);
                }
              }
              &:not(:last-child) {
                margin-right: 5px;
                padding-right: 5px;
                border-right: 1px solid rgba(0, 180, 0, 0.5);
              }
            }
          }

          &.language-list-active {
            .th-language-list {
              max-height: 32px;
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .desktop-navbar-container {
    background-color: rgb(245, 242, 235);
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    .main-navbar {
      height: 80px;
      max-width: 1500px;
      padding: 0 clamp(10px, 1vw, 20px);
      margin: 0 auto;
      .main-navbar-container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          height: 120px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .middle-side {
          height: 100%;
          min-width: 0;
          position: relative;
          flex-grow: 1;
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
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-50%, -50%);
            padding: 20px 50px;
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
              border-radius: clamp(4px, 2vw, 10px);
              transform: translateY(-25px);
              visibility: hidden;
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
                  border-radius: clamp(4px, 2vw, 10px);
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
                  padding: 0 clamp(6px, 0.4vw, 14px);
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
                    width: clamp(16px, 1vw, 22px);
                    height: clamp(16px, 1vw, 22px);
                    filter: invert(100%);
                    margin-right: 5px;
                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                }
              }
            }
            .search-view {
              position: absolute;
              border-radius: 25px;
              top: 100%;
              width: 100%;
              padding: 0 50px;
              opacity: 0;
              visibility: hidden;
              transform: translateY(25px);
              transition:
                opacity 0.2s ease-in,
                transform 0.2s ease-out;
              .a {
                border-radius: 25px;
                height: 150px;
                background-color: rgb(245, 242, 235);
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
          height: 100%;
          .actions {
            height: 100%;
            display: flex;
            list-style: none;
            padding: 20px 0;
            .action-container {
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              .action {
                padding: 0 clamp(5px, 100vw, 10px);
                border: none;
                background-color: transparent;
                width: 45px;
                height: 25px;
                cursor: pointer;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: all 0.2s ease-in;
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
  &.navbar-hide {
    transform: translateY(-100%);
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
    backdrop-filter: blur(14px), saturate(180px);
    z-index: 998;
  }
}
</style>
