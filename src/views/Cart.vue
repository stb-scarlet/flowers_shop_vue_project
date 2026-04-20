<template>
  <div class="cart-container">
    <div
      class="cart-wrapper"
      v-if="currencyStore.currencyCartProducts.length > 0"
    >
      <div class="cp-container">
        <CartProducts />
      </div>
      <div class="ct-container">
        <CartTotal />
      </div>
    </div>
    <div class="empty-cart-container" v-else>
      <div class="empty-cart">
        <div class="ec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" class="ec-icon-svg">
            <path
              d="M9.18808 14.0181C9.32868 13.6985 9.5973 13.5 9.88906 13.5H15.376C15.976 13.5 16.504 13.09 16.776 12.47L19.4806 6.33041C19.5685 6.13097 19.5958 5.91025 19.5703 5.70131C19.7123 5.52082 19.8 5.27321 19.8 5C19.8 4.44772 19.4418 4 19 4H7C6.97362 4 6.94754 4.0016 6.92182 4.00471L6.78536 3.64435C6.52076 2.94557 5.95766 2.5 5.33918 2.5H4.53603C4.09421 2.5 3.73603 2.94772 3.73603 3.5C3.73603 4.05228 4.09421 4.5 4.53603 4.5H4.71615C5.09472 4.5 5.43945 4.77254 5.60169 5.20011L7.86418 11.1627C8.08506 11.7448 8.06807 12.4243 7.81854 12.988L7.13603 14.53C6.55203 15.87 7.32003 17.5 8.53603 17.5H17.336C17.7778 17.5 18.136 17.0523 18.136 16.5C18.136 15.9477 17.7778 15.5 17.336 15.5H9.88905C9.28057 15.5 8.89484 14.6845 9.18808 14.0181Z"
            />

            <path
              d="M8.53604 18.5C7.65604 18.5 6.94404 19.4 6.94404 20.5C6.94404 21.6 7.65604 22.5 8.53604 22.5C9.41604 22.5 10.128 21.6 10.128 20.5C10.128 19.4 9.41604 18.5 8.53604 18.5Z"
            />

            <path
              d="M16.5361 18.5C15.6561 18.5 14.9441 19.4 14.9441 20.5C14.9441 21.6 15.6561 22.5 16.5361 22.5C17.4161 22.5 18.1281 21.6 18.1281 20.5C18.1281 19.4 17.4161 18.5 16.5361 18.5Z"
            />

            <path d="M10.2 7.5H15V9.5H10.2V7.5Z" fill="#fff" />
          </svg>
        </div>
        <div class="ec-texts">
          <p>{{ $t("cart.empty-cart.firstParagraph") }}</p>
          <p>
            {{ $t("cart.empty-cart.secondParagraph") }}
          </p>
          <router-link to="/shop">
            <button class="ecb-button">
              {{ $t("cart.empty-cart.button") }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <TopList />
    <CategoryProducts />
  </div>
</template>
<script setup>
import CategoryProducts from "@/components/ui/CategoryProducts.vue";
import TopList from "@/components/ui/TopList.vue";
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
    margin: clamp(20px, 10vw, 40px) auto;
    max-width: 1500px;
    gap: 20px;
  }
  .empty-cart-container {
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    margin: clamp(20px, 10vw, 40px) auto;
    .empty-cart {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 10px;
      padding: 30px;
      gap: 20px;
      .ec-icon {
        padding: 20px;
        border-radius: 50%;
        background-color: rgba(0, 180, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        .ec-icon-svg {
          width: 80px;
          height: 80px;
        }
      }
      .ec-texts {
        text-align: center;
        p:nth-child(1) {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
        .ecb-button {
          margin-top: 10px;
          padding: 10px 20px;
          border-radius: 10px;
          background-color: rgb(0, 180, 0);
          border: none;
          color: rgb(245, 242, 235);
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }

  .top-list-container,
  .category-products-container {
    padding: 0 clamp(10px, 1vw, 20px);
    max-width: 1500px;
    margin: 0 auto clamp(30px, 7vw, 70px);
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
