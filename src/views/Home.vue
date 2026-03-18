<template>
  <div class="home-view">
    <HomeMainBanner />
    <div class="hv-main-container">
      <TopList />
      <CategoriesCard />
      <Banners />
      <BlogsCard />
    </div>
  </div>
</template>
<script setup>
import HomeMainBanner from "@/components/HomeMainBanner.vue";
import TopList from "@/components/TopList.vue";
import CategoriesCard from "@/components/CategoriesCard.vue";
import Banners from "@/components/Banners.vue";
import BlogsCard from "@/components/BlogsCard.vue";
</script>
<style lang="scss" scoped>
// :root {
// --main-padding: clamp(10px, 1vw, 20px);
// --main-radius: clamp(10px, 2.5vw, 25px);
//   --main-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
//   --main-backdrop-filter: blur(14px);
//   --main-backdrop-filter-color: rgba(255, 255, 255, 0.65);
//   --main-border-color: 1px solid rgba(255, 255, 255, 0.18);
//   --background-color-1: rgb(240, 240, 240);
//   --background-color-2: rgb(255, 25, 83);
//   --background-color-3: rgb(0, 180, 0);
//   --background-color-4: rgb(0, 0, 0);
//   --background-color-5: rgba(0, 180, 0, 0.8);
//   --background-color-4: rgba(255, 25, 83, 0.7);
//   --color-1: rgb(255, 255, 255);
//   --color-2: rgb(0, 0, 0);
//   --color-3: rgb(255, 25, 83);
//   --color-4: rgba(255, 25, 83, 0.5);
//   --color-5: rgb(0, 180, 0);
//   --color-6: rgba(0, 180, 0, 0.5);
// }

.home-view {
  font-family: "Quicksand", sans-serif;
  // font-family: "Petit Formal Script", cursive;
  // font-family: "Playfair Display", serif;
  .hv-main-container {
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    margin: 0 auto;
  }
}
</style>