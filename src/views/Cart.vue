<template>
  <div class="cart-container">
    <div class="cart-wrapper" v-if="currencyStore.currencyCartProducts.length > 0">
      <div class="cp-container">
        <CartProducts />
      </div>
      <div class="ct-container">
        <CartTotal />
      </div>
    </div>
    <div class="cart-empty" v-else>
      
    </div>
  </div>
</template>
<script setup>
import CartProducts from "@/components/cart/CartProducts.vue";
import CartTotal from "@/components/cart/CartTotal.vue";
import { useCurrencyStore } from "@/store/modules/Currency";
const currencyStore = useCurrencyStore();
</script>
<style lang="scss" scoped>
.cart-container {
  padding: 100px 0 0;
  .cart-wrapper {
    display: grid;
    padding: 0 clamp(10px, 1vw, 20px);
    grid-template-columns: 1fr;
    max-width: 1500px;
    margin: clamp(20px, 10vw, 40px) auto;
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .cart-container {
    padding: 120px 0 0;
    .cart-wrapper {
      grid-template-columns: 1fr 25%;
      padding: 0 clamp(10px, 1vw, 20px);
      gap: 30px;
    }
  }
}
</style>
