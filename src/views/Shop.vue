<template>
  <div class="shop-container">
    <div class="shop-wrapper">
      <Products />
      <Banners />
      <TopList />
    </div>
  </div>
</template>
<script setup>
import Products from "@/components/shop/Products.vue";
import Banners from "@/components/ui/Banners.vue";
import TopList from "@/components/ui/TopList.vue";
</script>
<style lang="scss">
.shop-container {
  padding: 100px 0 0;
  .shop-wrapper {
    max-width: 1500px;
    margin: 0 auto;
    .tl-see-more {
      display: none;
    }
    .hv-products-banner-container {
      padding: 0 clamp(10px, 1vw, 20px);
    }
  }
}
@media (min-width: 1024px) {
  .shop-container {
    padding: 120px 0 0;
  }
}
</style>
