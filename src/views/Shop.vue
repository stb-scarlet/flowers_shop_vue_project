<template>
  <div class="shop-container">
    <Products />
  </div>
</template>
<script setup>
import Products from '@/components/Products.vue';
</script>
<style lang="scss">
.shop-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 clamp(10px, 1vw, 20px);
}
</style>