<template>
  <div class="mobile-navbar">
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
                  <div class="usd-icon" ref="usdIcon" title="USD">
                    <img src="/action-icons/usd-icon.png" alt="" />
                  </div>
                  <div class="rub-icon" ref="rubIcon" title="RUB">
                    <img src="/action-icons/rub-icon.png" alt="" />
                  </div>
                </div>
              </button>
            </li>
            <li class="th-language-box" ref="languageList">
              <button
                class="th-language"
                @click="toggleLanguage"
                title="Languages"
              >
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
    <!-- Mobile Top Navbar -->
    <div class="mobile-top-navbar-container">
      <!-- Main Navbar -->
      <div class="main-navbar" ref="mainNavbar">
        <div class="main-navbar-container">
          <!-- Middle Side -->
          <div class="middle-side">
            <!-- Search Bar -->
            <div class="search-bar">
              <div class="search-container">
                <label
                  for="search"
                  class="search-input-container"
                  @click="showSearchView"
                >
                  <input
                    type="text"
                    id="search"
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
                        src="/action-icons/magnifying_glass-icon.png"
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div class="search-view" ref="searchView">
                <div class="a"></div>
              </div>
            </div>
          </div>
          <!-- Burger Button -->
          <div class="bb-container">
            <button class="burger-button" ref="bbActive" @click="toggleBurger">
              <span class="burger-line"></span>
            </button>
          </div>
          <!-- Navigation Links -->
          <nav class="nav-links" ref="navLinks">
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
                <router-link to="/shop" active-class="active-link" class="link"
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
              <li class="link-container">
                <ul class="social-links-container">
                  <li class="social-links-title">
                    <p>Follow Us</p>
                  </li>
                  <ul class="social-links">
                    <li class="social-link">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="#">
                        <i class="fab fa-telegram"></i>
                      </a>
                    </li>
                    <li class="social-link">
                      <a href="#">
                        <i class="fab fa-vk"></i>
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navbar: Search, Wishlist, Cart, Login -->
    <div class="mobile-bottom-navbar">
      <ul class="actions-container">
        <!-- Home Page Icon -->
        <li class="action-container">
          <router-link to="/" class="action" active-class="active-action">
            <img src="/action-icons/home-icon.png" alt="" />
          </router-link>
        </li>
        <!-- Wishlist Page Icon -->
        <li class="action-container">
          <router-link
            to="/wishlist"
            class="action"
            active-class="active-action"
          >
            <img src="/action-icons/wishlist-icon.png" alt="" />
          </router-link>
        </li>
        <!-- Cart Page Icon -->
        <li class="action-container">
          <router-link to="/cart" class="action" active-class="active-action">
            <img src="/action-icons/cart-icon.png" alt="" />
          </router-link>
        </li>
        <!-- Login Page Button -->
        <li class="action-container">
          <router-link
            to="/profile"
            class="action"
            active-class="active-action"
          >
            <img src="/action-icons/profile-icon.png" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

let lastScroll = 0;
const mainNavbar = ref(null);
const searchView = ref(null);
const navLinks = ref(null);
const usdIcon = ref(null);
const rubIcon = ref(null);
const languageList = ref(null);
const bbActive = ref(null);

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll < 30) {
    mainNavbar.value.classList.remove("main-navbar-hide");
    mainNavbar.value.classList.remove("main-navbar-show");
  } else if (currentScroll < lastScroll && currentScroll > 110) {
    mainNavbar.value.classList.add("main-navbar-show");
    mainNavbar.value.classList.remove("main-navbar-hide");
  } else if (currentScroll > lastScroll && currentScroll > 110) {
    mainNavbar.value.classList.remove("main-navbar-show");
    mainNavbar.value.classList.add("main-navbar-hide");
  }

  navLinks.value?.classList.remove("nav-links-show");
  document.body.classList.remove("overlay");
  searchView.value?.classList.remove("search-view-show");
  languageList.value?.classList.remove("language-list-active");
  bbActive.value?.classList.remove("bb-active");

  lastScroll = currentScroll;
};

const handleClick = (event) => {
  if (
    event.target.closest(
      ".search-container, .search-view, .th-language-box, #search-button, .burger-button, .nav-links",
    )
  ) {
    return;
  }
  navLinks.value?.classList.remove("nav-links-show");
  document.body.classList.remove("overlay");
  searchView.value?.classList.remove("search-view-show");
  languageList.value?.classList.remove("language-list-active");
  bbActive.value?.classList.remove("bb-active");
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

const toggleBurger = () => {
  bbActive.value?.classList.toggle("bb-active");
  navLinks.value?.classList.toggle("nav-links-show");
  searchView.value?.classList.remove("search-view-show");
  languageList.value?.classList.remove("language-list-active");
  document.body.classList.remove("overlay");
};

const toggleCurrency = () => {
  usdIcon.value.classList.toggle("currency-active");
  rubIcon.value.classList.toggle("currency-active");
  languageList.value.classList.remove("language-list-active");
  bbActive.value?.classList.remove("bb-active");
  navLinks.value?.classList.remove("nav-links-show");
  searchView.value?.classList.remove("search-view-show");
  document.body.classList.remove("overlay");
};

const toggleLanguage = () => {
  languageList.value.classList.toggle("language-list-active");
  bbActive.value?.classList.remove("bb-active");
  navLinks.value?.classList.remove("nav-links-show");
  searchView.value?.classList.remove("search-view-show");
  document.body.classList.remove("overlay");
};

const showSearchView = () => {
  document.body.classList.add("overlay");
  document.body.style.top = `-${window.scrollY}px`;
  searchView.value.classList.add("search-view-show");
  bbActive.value?.classList.remove("bb-active");
  navLinks.value?.classList.remove("nav-links-show");
  languageList.value?.classList.remove("language-list-active");
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mobile-navbar {
  display: none;
}
@media (max-width: 1023px) {
  .mobile-navbar {
    position: relative;
    display: block;
    width: 100%;
    z-index: 999;
    .top-header {
      position: relative;
      z-index: 1002;
      width: 100%;
      height: clamp(20px, 4vw, 35px);
      background: linear-gradient(
        to left,
        rgb(255, 25, 83),
        rgba(255, 25, 83, 0.7)
      );
      .th-container {
        max-width: 1500px;
        padding: 0 clamp(2px, 2vw, 20px);
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
            margin: 0 clamp(2px, 0.6vw, 5px);
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: rgb(255, 255, 255);
            transition: 0.2s ease-in;
            &:hover {
              color: rgba(255, 255, 255, 0.8);
            }
            .th-telephone-icon,
            .th-message-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: clamp(10px, 2vw, 20px);
              height: clamp(10px, 2vw, 20px);
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .th-message-icon {
              margin-right: clamp(2px, 0.1vw, 5px);
            }
            span {
              white-space: nowrap;
              font-size: clamp(8px, 1.8vw, 16px);
              font-weight: 500;
            }
          }
          .th-currency-box,
          .th-language-box {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 clamp(2px, 0.6vw, 5px);
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
              padding: 0 clamp(2px, 0.1vw, 5px);
              cursor: pointer;
              span {
                font-size: clamp(8px, 1.8vw, 16px);
                font-weight: 500;
              }
              .th-currency-icon {
                width: clamp(14px, 2vw, 20px);
                height: clamp(14px, 2vw, 20px);
                margin-left: clamp(2px, 0.1vw, 5px);
                position: relative;
                .usd-icon,
                .rub-icon {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(255, 255, 255, 0.8);
                  border-radius: 50%;
                  backdrop-filter: blur(14px) saturate(180%);
                  transition: all 0.2s ease-in;
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                  &.currency-active {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(25px);
                  }
                }
              }
            }
            &:hover .th-currency .th-currency-icon .usd-icon,
            &:hover .th-currency .th-currency-icon .rub-icon {
              border-radius: 5px;
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
              transition: all 0.2s ease-in;
              .language-icon {
                width: clamp(14px, 2.4vw, 24px);
                height: clamp(14px, 2.4vw, 24px);
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              &:hover {
                border-radius: 5px;
              }
            }
            .th-language-list {
              position: absolute;
              list-style: none;
              background-color: rgba(255, 255, 255, 0.55);
              backdrop-filter: blur(14px) saturate(180%);
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
                  transition: all 0.2s ease-in;
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
              .th-language {
                border-radius: 5px;
              }
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

    .mobile-top-navbar-container {
      position: relative;
      z-index: 1001;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      .main-navbar {
        padding: 10px clamp(10px, 2vw, 20px);
        opacity: 1;
        visibility: visible;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.5s ease-out;
        z-index: 1000;
        .main-navbar-container {
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .middle-side {
            height: 100%;
            min-width: 0;
            position: relative;
            flex-grow: 1;
            .search-bar {
              position: absolute;
              top: 50%;
              left: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              transform: translate(-50%, -50%);
              padding-right: clamp(2px, 1vw, 5px);
              height: 100%;
              width: 100%;
              .search-container {
                height: 100%;
                border: 1px solid rgb(0, 180, 0);
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: rgb(0, 180, 0);
                transition: all 0.2s ease-in;
                .search-input-container {
                  height: 100%;
                  width: 100%;
                  .search-input {
                    outline: none;
                    border: none;
                    background-color: rgb(240, 240, 240);
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    padding-left: clamp(14px, 1vw, 20px);
                    font-size: clamp(14px, 4vw, 18px);
                    font-weight: 500;
                    font-family: "Quicksand", sans-serif;
                    color: rgb(0, 0, 0);
                    &::placeholder {
                      color: rgba(0, 0, 0, 0.5);
                    }
                  }
                }
                .search-button-container {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .search-button {
                    padding: 0 clamp(8px, 2vw, 10px);
                    height: 100%;
                    border: none;
                    display: flex;
                    background-color: transparent;
                    color: white;
                    font-family: "Quicksand", sans-serif;
                    align-items: center;
                    transition: 0.2s ease-in;
                    .search-icon {
                      width: clamp(20px, 3vw, 20px);
                      height: clamp(20px, 3vw, 20px);
                      filter: invert(100%);
                      margin-right: 5px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      }
                    }
                  }
                  @media (max-width: 576px) {
                    .search-button {
                      display: none;
                    }
                  }
                }
              }
              .search-view {
                position: absolute;
                top: 110%;
                width: 100%;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease-in;
                .a {
                  border-radius: clamp(10px, 2.5vw, 25px);
                  box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
                  height: 150px;
                  background-color: rgb(255, 255, 255);
                }
                &.search-view-show {
                  opacity: 1;
                  visibility: visible;
                }
              }
            }
          }

          .bb-container {
            height: 100%;
            min-width: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .burger-button {
              position: relative;
              height: 100%;
              width: 40px;
              background-color: rgb(255, 255, 255);
              border-radius: 10px;
              border: 1px solid rgb(0, 180, 0);
              cursor: pointer;
              .burger-line {
                position: absolute;
                left: 50%;
                top: 50%;
                transform-origin: left;
                transform: translate(-50%, -50%);
                visibility: visible;
                opacity: 1;
                height: clamp(2px, 0.4vw, 4px);
                width: 60%;
                border-radius: 25px;
                background-color: rgb(0, 180, 0);
                border-radius: 5px;
                transition: all 0.2s;
              }
              &::after {
                content: "";
                position: absolute;
                left: 50%;
                top: 30%;
                transform: translate(-50%, -30%);
                height: clamp(2px, 0.4vw, 4px);
                width: 60%;
                border-radius: 25px;
                background-color: rgb(0, 180, 0);
                transition: all 0.2s;
              }
              &::before {
                content: "";
                position: absolute;
                left: 50%;
                top: 70%;
                transform: translate(-50%, -70%);
                height: clamp(2px, 0.4vw, 4px);
                width: 60%;
                border-radius: 25px;
                background-color: rgb(0, 180, 0);
                transition: all 0.2s;
              }
              &.bb-active {
                border-color: rgb(255, 25, 83);
                .burger-line {
                  transform: scale(0);
                  background-color: rgb(255, 25, 83);
                  opacity: 0;
                  visibility: hidden;
                }
                &::after {
                  top: 50%;
                  transform: translate(-50%, -50%) rotate(-45deg);
                  background-color: rgb(255, 25, 83);
                }
                &::before {
                  top: 50%;
                  transform: translate(-50%, -50%) rotate(45deg);
                  background-color: rgb(255, 25, 83);
                }
              }
            }
          }

          .nav-links {
            position: absolute;
            z-index: 999;
            justify-content: center;
            align-items: center;
            top: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 10px 0 10px 10px;
            backdrop-filter: blur(14px) saturate(180%);
            right: clamp(5px, 1vw, 10px);
            padding: clamp(10px, 1vw, 16px) clamp(20px, 1vw, 26px);
            min-height: 0;
            transition: all 0.2s;
            transform: translateY(-10%);
            opacity: 0;
            visibility: hidden;
            .links {
              min-height: 0;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: start;
              align-items: flex-start;
              list-style: none;
              .link-container {
                height: 100%;
                position: relative;
                .link {
                  height: 100%;
                  text-decoration: none;
                  color: rgb(82, 82, 82);
                  font-size: clamp(22px, 5vw, 36px);
                  margin-bottom: clamp(5px, 1vw, 10px);
                  font-weight: 700;
                  font-family: "Quicksand", sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  transition: 0.2s ease-in;
                  cursor: pointer;
                  &:hover {
                    padding-left: clamp(14px, 4vw, 20px);
                    color: rgba(255, 25, 83, 0.5);
                  }
                  &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    height: clamp(8px, 2vw, 14px);
                    width: clamp(8px, 2vw, 14px);
                    border-radius: 50%;
                    background-color: rgba(255, 25, 83, 0.5);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                  }

                  &:hover::after {
                    transform: scale(1);
                  }

                  &.active-link::after {
                    background-color: rgb(255, 25, 83);
                    transform: scaleX(1);
                  }

                  &.active-link {
                    color: rgb(255, 25, 83);
                    padding-left: clamp(14px, 4vw, 20px);
                    background-size: cover;
                    position: relative;
                  }
                }
                .social-links-container {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  list-style: none;
                  width: 100%;
                  margin-top: clamp(5px, 1vw, 10px);
                  .social-links-title {
                    position: absolute;
                    min-width: 0;
                    p {
                      white-space: nowrap;
                      letter-spacing: 1px;
                      font-family: sans-serif;
                      color: rgba(255, 25, 83, 0.5);
                      font-weight: 800;
                      text-transform: uppercase;
                      font-size: clamp(24px, 4vw, 38px);
                    }
                  }
                  .social-links {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                    .social-link {
                      background-color: rgba(255, 25, 83, 0.2);
                      backdrop-filter: blur(10px) saturate(180%);
                      border-radius: 50%;
                      padding: clamp(2px, 1vw, 8px);
                      font-size: clamp(20px, 4vw, 26px);
                      margin: 0 clamp(2px, 1vw, 8px);
                      a {
                        color: rgb(82, 82, 82);
                        text-decoration: none;
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                      }
                      &:hover a,
                      & a:focus {
                        color: rgb(255, 25, 83);
                        transition: 0.2s ease-in;
                      }
                    }
                  }
                }
              }
              .link-container:last-child {
                border-top: 1px solid rgb(255, 25, 83);
              }
            }
            &.nav-links-show {
              transform: translateY(0);
              opacity: 1;
              visibility: visible;
            }
          }
        }
        &.main-navbar-show {
          opacity: 1;
          visibility: visible;
          position: fixed;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0px);
          width: clamp(0px, 100%, 1500px);
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
        }
        &.main-navbar-hide {
          position: fixed;
          width: clamp(0px, 100%, 1500px);
          top: -80px;
          opacity: 0;
          visibility: hidden;
        }
      }
    }

    .mobile-bottom-navbar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: 0;
      background: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(14px) saturate(180%);
      -webkit-backdrop-filter: blur(14px) saturate(180%);
      border-radius: clamp(10px, 2.5vw, 25px) clamp(10px, 2.5vw, 25px) 0 0;
      padding: 0 clamp(16px, 8vw, 80px);
      z-index: 500;
      .actions-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .action-container {
          display: flex;
          justify-content: center;
          align-items: center;
          .action {
            margin: clamp(4px, 2vw, 10px) 0;
            height: 26px;
            width: 26px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            &:hover img {
              filter: invert(36%) sepia(98%) saturate(747%) hue-rotate(86deg)
                brightness(92%) contrast(101%);
            }

            &.active-action {
              img {
                filter: invert(36%) sepia(98%) saturate(747%) hue-rotate(86deg)
                  brightness(92%) contrast(101%);
                transition: all 0.2s;
              }
            }
          }
        }
      }
    }
  }
}
.overlay {
  overflow: hidden;
  &::before {
    position: fixed;
    inset: 0;
    content: "";
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(14px), saturate(180px);
    z-index: 100;
  }
}
</style>
