<template>
  <div class="cart-total">
    <div class="ct-title">
      <h3>Cart Total</h3>
    </div>
    <div class="ct-body">
      <div class="ctb-coupon-container">
        <p>Coupon Apply</p>
        <div class="ctb-coupon-field">
          <input
            type="text"
            class="ctb-coupon-input"
            placeholder="Enter coupon code here.."
          />
          <button class="ctb-apply">Apply</button>
        </div>
      </div>
      <div class="ctb-subtotal">
        <p>Subtotal</p>
        <p>$0.00</p>
      </div>
      <div class="ctb-coupon-discount">
        <p>Coupon Discount</p>
        <p>$0.00</p>
      </div>
      <div class="ctb-shiping-fee">
        <p>Shipping Fee</p>
        <p>$0.00</p>
      </div>
      <div class="ctb-total-price">
        <p>Total</p>
        <p>{{ currencyStore.cartTotal }}</p>
      </div>
      <button class="ctb-checkout-button">Proceed to Checkout</button>
      <router-link to="/shop" class="ctb-continue-button"
        >Continue Shopping</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/store/modules/cart";
import { useCurrencyStore } from "@/store/modules/Currency";
const currencyStore = useCurrencyStore();
</script>
<style lang="scss" scoped>
.cart-total {
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  .ct-title {
    margin-bottom: 10px;
  }
  .ct-body {
    border-top: 2px solid rgba(0, 180, 0, 0.1);
    text-align: center;
    padding-top: 10px;
    .ctb-coupon-container {
      font-size: 14px;
      text-align: start;
      .ctb-coupon-field {
        display: flex;
        background-color: rgb(0, 180, 0);
        border-radius: 10px;
        margin: 6px 0 20px;
        .ctb-coupon-input {
          width: 100%;
          padding: 10px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          font-size: 14px;
          outline: none;
          border-radius: 10px;
          border: 1px solid rgb(0, 180, 0);
        }
        .ctb-apply {
          background-color: transparent;
          border: none;
          color: rgb(245, 242, 235);
          font-weight: 700;
          padding: 0 20px;
          cursor: pointer;
        }
      }
    }
    .ctb-subtotal,
    .ctb-coupon-discount,
    .ctb-shiping-fee {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
      p:nth-child(2) {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .ctb-total-price {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 16px;
      p:nth-child(2) {
        color: rgb(0, 180, 0);
      }
    }
    .ctb-checkout-button {
      width: 100%;
      padding: 14px 0;
      background-color: rgb(0, 180, 0);
      color: rgb(245, 242, 235);
      font-weight: 700;
      font-size: 16px;
      border-radius: 10px;
      border: none;
      margin-bottom: 10px;
      transition: background-color 0.4s;
      cursor: pointer;
      &:hover {
        background-color: rgb(0, 190, 0);
      }
    }
    .ctb-continue-button {
      text-decoration: none;
      width: 100%;
      background-color: transparent;
      color: rgb(0, 180, 0);
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
