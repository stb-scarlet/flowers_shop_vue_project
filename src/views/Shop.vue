<template>
  <div class="shop-container">
    <Products />
    <Banners />
    <TopList />
  </div>
</template>
<script setup>
import Products from '@/components/shop/Products.vue';
import Banners from '@/components/ui/Banners.vue';
import TopList from '@/components/ui/TopList.vue';
</script>
<style lang="scss">
.shop-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px 0;
}
@media (min-width: 1024px) {
  .shop-container {
    padding: 120px 0 0;
  }
}
</style>