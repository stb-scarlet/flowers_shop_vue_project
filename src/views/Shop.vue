<template>
  <div class="shop-container">
    <Products />
    <Banners />
    <TopList />
  </div>
</template>
<script setup>
import Products from '@/components/Products.vue';
import Banners from '@/components/Banners.vue';
import TopList from '@/components/TopList.vue';
</script>
<style lang="scss">
.shop-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px 0;
}
@media (min-width: 1024px) {
  .shop-container {
    padding: 120px 0;
  }
}
</style>