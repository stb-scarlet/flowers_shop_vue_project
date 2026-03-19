<template>
  <Navbar
    @toggle-search="toggleOverlay = $event"
    :toggleOverlay="toggleOverlay"
  />
  <MainMenu />
  <router-view />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import MainMenu from "./components/MainMenu.vue";
import { onMounted, ref, onBeforeUnmount, watch, provide, inject } from "vue";
const toggleOverlay = ref(false);
const showFilter = inject("showFilter");
const handleClick = (event) => {
  if (
    event.target.closest(
      ".search-container, .search-view, .th-language-box, #search-button, .th-currency-box",
    )
  ) {
    return;
  }
  toggleOverlay.value = false;
};

provide("toggleOverlay", toggleOverlay);

onMounted(() => {
  window.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClick);
});

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
  // position: sticky;
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
</style>
