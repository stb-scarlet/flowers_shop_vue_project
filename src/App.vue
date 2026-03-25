<template>
  <Navbar
    @toggle-search="toggleSearch"
    @is-search-active="isSearchActive = $event"
    :hideSearch="isSearchActive"
  />
  <MainMenu />
  <Login />
  <router-view />
  <Footer />
</template>
<script setup>
import Footer from "./components/ui/Footer.vue";
import Login from "./views/Login.vue";
import Navbar from "./components/layout/Navbar.vue";
import MainMenu from "./components/layout/MainMenu.vue";
import { useRoute } from "vue-router";
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";
import { useLoginRegisterStore } from "./store/modules/loginRegister";
import { useOverlayStore } from "./store/modules/Overlay";
import { useCurrencyStore } from "./store/modules/Currency";
import { useLocaleStore } from "./i18n";
const localeStore = useLocaleStore();
const loginRegisterStore = useLoginRegisterStore();
const currencyStore = useCurrencyStore();
const route = useRoute();
watch(
  () => route.path,
  () => {
    overlayStore.hideMenu();
    overlayStore.hideFilter();
    isSearchActive.value = false;
  },
);

const overlayStore = useOverlayStore();

const isSearchActive = ref(false);

const overlayActive = computed(() => {
  return isSearchActive.value || overlayStore.isFilterActive;
});
const mainOverlayActive = computed(() => {
  return overlayStore.isMenuActive || loginRegisterStore.isLoginActive || loginRegisterStore.isUpdateProfile;
});
const handleClick = (event) => {
  const selectors = overlayStore.ignoreSelectors.join(", ");

  if (event.target.closest(selectors)) return;

  if (overlayStore.isFilterActive) {
    overlayStore.hideFilter();
  }

  if (isSearchActive.value) {
    isSearchActive.value = false;
  }

  if (overlayStore.isMenuActive) {
    overlayStore.hideMenu();
  }

  if (overlayStore.isSortActive) {
    overlayStore.toggleSort();
  }

  if (currencyStore.isCurrencyActive) {
    currencyStore.toggleCurrency();
  }

  if (localeStore.isLanguageActive) {
    localeStore.toggleLaguage();
  }

  if (loginRegisterStore.isLoginActive) {
    loginRegisterStore.toggleLogin();
  }

  if (loginRegisterStore.isUpdateProfile) {
    loginRegisterStore.toggleUpdateProfile();
  }
};

onMounted(() => window.addEventListener("click", handleClick));
onBeforeUnmount(() => window.removeEventListener("click", handleClick));

watch(overlayActive, (val) => {
  if (val) {
    document.body.classList.add("overlay");
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.classList.remove("overlay");
    document.body.style.top = "";
  }
});
watch(mainOverlayActive, (val) => {
  if (val) {
    document.body.classList.add("menu-overlay");
    document.body.style.top = `-${window.scrollY}px`;
    isSearchActive.value = false;
  } else {
    document.body.classList.remove("menu-overlay");
    document.body.style.top = "";
  }
});
const toggleSearch = (val) => {
  isSearchActive.value = val;
  if (val && overlayStore.isFilterActive) {
    overlayStore.hideFilter();
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Carattere&family=Petit+Formal+Script&family=Pinyon+Script&family=Quicksand:wght@300..700&family=Romanesco&display=swap");
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

.overlay {
  overflow: hidden;
  &::before {
    position: fixed;
    inset: 0;
    content: "";
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(4px);
    z-index: 50;
  }
}
.menu-overlay {
  overflow: hidden;
  &::before {
    position: fixed;
    inset: 0;
    content: "";
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    z-index: 95;
  }
}
</style>
