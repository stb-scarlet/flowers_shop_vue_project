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
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651M4.00289 5.74561C3.96765 5.12559 4.25823 4.56668 4.69185 4.13552L6.26145 2.57483C7.13596 1.70529 8.61028 1.83992 9.37326 2.85908L10.6342 4.54348C11.2507 5.36691 11.1841 6.49484 10.4775 7.19738L10.1907 7.48257"
                      stroke="#000"
                      stroke-width="1.5"
                    />

                    <path
                      d="M18.6763 18.9651C17.0469 19.117 13.0622 18.9492 8.8154 14.7266C4.81076 10.7447 4.09308 7.33182 4.00293 5.74561"
                      stroke="#000"
                      stroke-width="1.5"
                      opacity="0.5"
                    />

                    <path
                      d="M16.1007 13.3589C16.1007 13.3589 15.0181 14.4353 12.0631 11.4971C9.10807 8.55886 10.1907 7.48242 10.1907 7.48242"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <span>+1 (23) 456 789</span>
              </a>
            </li>
            <li class="th-message">
              <a href="#" class="th-message">
                <div class="th-message-icon">
                  <svg viewBox="0 0 46.572 31.609" fill="currentColor">
                    <polygon points="46.573,23.807 46.573,6.29 34.923,15.98" />
                    <polygon points="0,6.294 0,23.802 11.648,15.98" />

                    <path
                      d="M27.589 22.08c-1.158.963-2.684 1.489-4.305 1.489-1.616 0-3.147-.526-4.301-1.489l-5.193-4.322L0 27.017v3.261c0 .738.601 1.332 1.347 1.332h43.879c.741 0 1.347-.594 1.347-1.332v-3.257l-13.789-9.263L27.589 22.08z"
                    />

                    <path
                      d="M45.226 0H1.347C.601 0 0 .594 0 1.33v1.487l20.717 17.227c.663.548 1.597.863 2.567.863.97 0 1.906-.315 2.566-.863L46.573 2.813V1.33C46.573.594 45.967 0 45.226 0z"
                    />
                  </svg>
                </div>
                <span>example.org</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="th-left">
          <ul class="th-settings">
            <li class="th-currency">
              <span>{{ $t("navbar.currency") }}: </span>
              <button
                class="th-currency-button"
                @click="currencyStore.toggleCurrency"
              >
                <span
                  :style="{
                    backgroundImage: `url(${currencyStore.currency[currencyStore.selectedId - 1].flag})`,
                  }"
                ></span>
              </button>
              <ul
                class="th-currency-list"
                :class="{ 'ths-active': currencyStore.isCurrencyActive }"
              >
                <li
                  class="thc-item"
                  v-for="item in currencyStore.currency"
                  :key="item.id"
                >
                  <button
                    class="thc-button"
                    :class="{
                      'thsb-active': currencyStore.selectedId == item.id,
                    }"
                    @click="currencyStore.changeCurrency(item.id)"
                  >
                    <span
                      :style="{
                        backgroundImage: `url(${item.flag})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }"
                    ></span>
                    <p>{{ item.name }}</p>
                  </button>
                </li>
              </ul>
            </li>
            <li class="th-language" ref="languageList">
              <span>{{ $t("navbar.language") }}: </span>
              <button
                class="th-language-button"
                @click="localeStore.toggleLaguage"
              >
                <p>EN</p>
              </button>
              <ul
                class="th-language-list"
                :class="{ 'ths-active': localeStore.isLanguageActive }"
              >
                <li
                  class="thl-item"
                  :class="{ 'ths-active': $i18n.locale == 'en' }"
                >
                  <button
                    class="thl-button"
                    @click="localeStore.setLocale('en')"
                    :class="{ 'thsb-active': $i18n.locale == 'en' }"
                  >
                    <span
                      :style="{
                        backgroundImage: `url(./action-icons/usa-flag.svg)`,
                      }"
                    ></span>
                    <p>English</p>
                  </button>
                </li>
                <li class="thl-item">
                  <button
                    class="thl-button"
                    @click="localeStore.setLocale('ru')"
                    :class="{ 'thsb-active': $i18n.locale == 'ru' }"
                  >
                    <span
                      :style="{
                        backgroundImage: `url(./action-icons/russia-flag.svg)`,
                      }"
                    ></span>
                    <p>Russian</p>
                  </button>
                </li>
              </ul>
            </li>
            <li class="th-theme"></li>
          </ul>
        </div>
        <MobileTopHeader />
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
                    >{{ $t("navbar.home") }}</router-link
                  >
                </li>
                <!-- Shop Link -->
                <li class="link-container">
                  <router-link
                    to="/shop"
                    active-class="active-link"
                    class="link"
                    >{{ $t("navbar.shop") }}</router-link
                  >
                </li>
                <!-- About Us Link -->
                <li class="link-container">
                  <router-link
                    to="/about-us"
                    active-class="active-link"
                    class="link"
                    >{{ $t("navbar.about") }}</router-link
                  >
                </li>
                <!-- Contact Us Link -->
                <li class="link-container">
                  <router-link
                    to="/contact-us"
                    active-class="active-link"
                    class="link"
                    >{{ $t("navbar.contact") }}</router-link
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
                    v-model="searchResult"
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
                    <span>{{ $t("navbar.search") }}</span>
                  </button>
                </div>
              </div>
              <div class="search-view" :class="{ 'search-view-show': search }">
                <div class="sv-container">
                  <ul class="sv-wrapper">
                    <li
                      class="sv-item"
                      v-for="item in filteredProducts"
                      :key="item.id"
                    >
                      <router-link :to="`/product/${item.id}`">{{
                        item.name || item.category
                      }}</router-link>
                    </li>
                  </ul>
                </div>
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
                <span
                  v-if="currencyStore.currencyWishlistProducts.length > 0"
                  >{{ currencyStore.currencyWishlistProducts.length }}</span
                >
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
                <span v-if="currencyStore.currencyCartProducts.length > 0">{{
                  currencyStore.currencyCartProducts.length
                }}</span>
              </li>
              <!-- Login Button -->
              <li class="action-item">
                <button
                  class="login"
                  @click="loginRegisterStore.toggleLogin"
                  v-if="!loginRegisterStore?.currentUser?.email"
                >
                  <i class="fa-solid fa-arrow-right-to-bracket"></i
                  >{{ $t("navbar.login") }}
                </button>
                <router-link
                  to="/profile"
                  class="profile"
                  v-if="loginRegisterStore?.currentUser?.email"
                >
                  <div class="profile-image">
                    <img
                      src="/action-icons/user-icon.svg"
                      alt=""
                      v-if="!loginRegisterStore?.currentUser?.profileImage"
                    />
                    <img
                      :src="loginRegisterStore?.currentUser?.profileImage"
                      alt=""
                      v-if="loginRegisterStore?.currentUser?.profileImage"
                    />
                  </div>
                  <div class="p-username">
                    {{ loginRegisterStore?.currentUser?.username }}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MobileTopHeader from "../layout/MobileTopHeader.vue";
import { onMounted, ref, onBeforeUnmount, watch, computed } from "vue";
import { useCurrencyStore } from "@/store/modules/Currency";
import { useLoginRegisterStore } from "@/store/modules/loginRegister";
import { useProductStore } from "@/store/modules/product";
import { useLocaleStore } from "@/i18n";
const productStore = useProductStore();
const loginRegisterStore = useLoginRegisterStore();
const localeStore = useLocaleStore();
const currencyStore = useCurrencyStore();
const emit = defineEmits(["toggle-search", "is-search-active"]);
const props = defineProps({
  hideSearch: Boolean,
});
const navbarHide = ref(false);

const searchResult = ref("");

const filteredProducts = computed(() => {
  const query = searchResult.value.trim().toLowerCase();

  if (!query) return productStore.getProducts;

  return productStore.getProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.sizes.some((s) => s.toLowerCase().includes(query))
    );
  });
});

let lastScroll = 0;
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

const search = ref(false);

const toggleSearch = () => {
  search.value = !search.value;
  localeStore.isLanguageActive = false;
  currencyStore.isCurrencyActive = false;
  emit("toggle-search", search.value);
};
const showSearchView = () => {
  search.value = true;
  emit("toggle-search", search.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => props.hideSearch,
  (newVal) => {
    if (!newVal) {
      search.value = false;
    }
  },
);
watch(search, (newVal) => {
  emit("is-search-active", newVal);
});
</script>
<style lang="scss" scoped>
.desktop-navbar {
  position: fixed;
  display: block;
  width: 100%;
  z-index: 90;
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
              .sv-container {
                height: 300px;
                width: 100%;
                overflow-x: auto;
                border-radius: 10px;
                padding: 20px;
                background-color: rgb(255, 255, 255);
                .sv-wrapper {
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  a {
                    color: rgb(0, 0, 0);
                    font-weight: 600;
                    font-size: 16px;
                    text-decoration: none;
                  }
                }
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
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              color: rgb(245, 242, 235);
              font-size: 14px;
              font-weight: 700;
              position: relative;
              .th-telephone-icon,
              .th-message-icon,
              .th-currency-button,
              .th-language-button,
              .th-currency-list .thc-item .thc-button,
              .th-language-list .thl-item .thl-button {
                border: none;
                margin: 0 4px;
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                cursor: pointer;
                span {
                  border-radius: 50%;
                  background-size: cover;
                  background: center center no-repeat;
                  width: 18px;
                  height: 18px;
                  object-fit: cover;
                }
              }
              .th-language-button {
                color: rgb(245, 242, 235);
              }
              .th-currency-list,
              .th-language-list {
                position: absolute;
                top: 100%;
                right: 0;
                border: 1px solid rgba(0, 0, 0, 0.1);
                background-color: rgb(245, 242, 235);
                border-radius: 10px 0 10px 10px;
                padding: 4px;
                display: flex;
                flex-direction: column;
                visibility: hidden;
                opacity: 0;
                transform: translateY(-10%);
                transition:
                  transform 0.2s ease-out,
                  opacity 0.2s ease-out;
                .thc-button,
                .thl-button {
                  display: flex;
                  background-color: transparent;
                  border: none;
                  padding: 8px;
                  transition: color 0.2s;
                  font-family: "Quicksand", sans-serif;
                  color: rgb(100, 100, 100);
                  font-weight: 700;
                  cursor: pointer;
                  p {
                    margin-left: 6px;
                  }
                  &:hover {
                    color: rgb(0, 180, 0);
                  }
                  &.thsb-active {
                    color: rgb(0, 180, 0);
                  }
                }
                &::after {
                  position: absolute;
                  content: "";
                  width: 100%;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                  height: 1px;
                  background-color: rgba(0, 0, 0, 0.1);
                }
                &.ths-active {
                  transform: translateY(0);
                  opacity: 1;
                  visibility: visible;
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
                position: relative;
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
                .profile {
                  margin-left: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 6px;
                  border: none;
                  background-color: transparent;
                  font-family: "Quicksand", sans-serif;
                  font-weight: 500;
                  font-size: 16px;
                  transition: color 0.2s;
                  color: rgb(0, 0, 0);
                  text-decoration: none;
                  cursor: pointer;
                  .profile-image {
                    height: 25px;
                    width: 25px;
                    border-radius: 50%;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                  &:hover {
                    color: rgb(0, 180, 0);
                  }
                }
                span {
                  position: absolute;
                  top: 0;
                  right: 0;
                  background-color: rgb(0, 180, 0);
                  color: rgb(245, 242, 235);
                  height: 18px;
                  width: 18px;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
