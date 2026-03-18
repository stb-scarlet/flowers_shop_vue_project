<template>
  <Navbar />
  <MainMenu />
  <router-view />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import MainMenu from "./components/MainMenu.vue";
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Carattere&family=Petit+Formal+Script&family=Pinyon+Script&family=Quicksand:wght@300..700&family=Romanesco&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
