<template>
  <div class="cart-container">
    <div class="cart-wrapper">
      <div class="cp-container">
        <CartProducts />
      </div>
      <div class="ct-container">
        <CartTotal />
      </div>
    </div>
  </div>
</template>
<script setup>
import CartProducts from "@/components/cart/CartProducts.vue";
import CartTotal from "@/components/cart/CartTotal.vue";
</script>
<style lang="scss" scoped>
.cart-container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 100px 0 0;
  .cart-wrapper {
    display: grid;
    padding: 0 clamp(10px, 1vw, 20px);
    grid-template-columns: 1fr;
    max-width: 1500px;
    margin: clamp(20px, 10vw, 40px) auto;
    gap: 30px;
  }
}

@media (min-width: 1024px) {
  .cart-container {
    padding: 120px 0 0;
    .cart-wrapper {
      grid-template-columns: 1fr 22%;
      padding: 0 clamp(10px, 1vw, 20px);
    }
  }
}
</style>
