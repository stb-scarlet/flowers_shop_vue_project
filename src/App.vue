<template>
  <Navbar
    @toggle-search="toggleSearch"
    @is-search-active="isSearchActive = $event"
    :hideSearch="isSearchActive"
  />
  <MainMenu />
  <router-view />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import MainMenu from "./components/MainMenu.vue";
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";
import { useFilterStore } from "./store/modules/Filter";

const filterStore = useFilterStore();

const isSearchActive = ref(false);

const overlayActive = computed(() => {
  return isSearchActive.value || filterStore.isFilterActive;
});

const handleClick = (event) => {
  const selectors = filterStore.ignoreSelectors.join(", ");

  if (event.target.closest(selectors)) return;

  if (filterStore.isFilterActive) {
    filterStore.hideFilter();
  }

  if (isSearchActive.value) {
    isSearchActive.value = false;
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

const toggleSearch = (val) => {
  isSearchActive.value = val;
  if (val && filterStore.isFilterActive) {
    filterStore.hideFilter();
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
