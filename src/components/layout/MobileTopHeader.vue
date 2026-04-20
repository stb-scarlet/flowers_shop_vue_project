<template>
  <div class="mth-left-side">
    <div class="mth-burger-container">
      <button class="mth-burger-button" @click="overlayStore.showMenu">
        <span class="mthbb-line"></span>
      </button>
    </div>
    <div class="mth-logo">
      <router-link to="/" class="mth-logo">
        <img src="/logo.png" alt="" />
      </router-link>
    </div>
  </div>
  <div class="mth-right-side">
    <ul class="mth-actions-wrapper">
      <li class="mth-action-item">
        <router-link
          to="/profile"
          class="mth-action"
          v-if="loginRegisterStore?.currentUser?.id"
          active-class="active-mth-action"
        >
          <img src="/action-icons/user-icon.svg" alt="" />
        </router-link>
        <button
          class="mth-action"
          v-if="!loginRegisterStore?.currentUser?.id"
          @click="loginRegisterStore.toggleLogin"
        >
          <img src="/action-icons/user-icon.svg" alt="" />
        </button>
      </li>
      <li class="mth-action-item">
        <router-link
          to="/wishlist"
          class="mth-action"
          active-class="active-mth-action"
        >
          <img src="/action-icons/heart-icon.svg" alt="" />
        </router-link>
        <span v-if="currencyStore.currencyWishlistProducts.length > 0">{{
          currencyStore.currencyWishlistProducts.length
        }}</span>
      </li>
      <li class="mth-action-item">
        <router-link
          to="/cart"
          class="mth-action"
          active-class="active-mth-action"
        >
          <img src="/action-icons/cart-icon.svg" alt="" />
        </router-link>
        <span v-if="currencyStore.currencyCartProducts.length > 0">{{
          currencyStore.currencyCartProducts.length
        }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useOverlayStore } from "@/store/modules/Overlay";
import { useCurrencyStore } from "@/store/modules/Currency";
import { useLoginRegisterStore } from "@/store/modules/loginRegister";
const loginRegisterStore = useLoginRegisterStore();
const currencyStore = useCurrencyStore();
const overlayStore = useOverlayStore();
</script>
<style lang="scss" scoped>
.mth-left-side,
.mth-right-side {
  display: none;
}
@media (max-width: 1023px) {
  .mth-left-side,
  .mth-right-side {
    display: block;
    height: 100%;
  }
  .mth-left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    .mth-burger-container {
      margin-right: 10px;
      height: 100%;
      .mth-burger-button {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 26px;
        padding: 0;
        cursor: pointer;
        position: relative;
        .mthbb-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: rgb(0, 180, 0);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: rgb(0, 180, 0);
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: rgb(0, 180, 0);
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .mth-logo {
      height: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .mth-right-side {
    .mth-actions-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      .mth-action-item {
        height: 100%;
        padding: 0 8px;
        position: relative;
        .mth-action {
          text-decoration: none;
          height: 100%;
          background-color: transparent;
          border: none;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &.active-mth-action img {
            filter: brightness(0) saturate(100%) invert(21%) sepia(96%)
              saturate(7492%) hue-rotate(340deg) brightness(101%) contrast(101%);
          }
        }
        span {
          position: absolute;
          bottom: 50%;
          right: 0;
          background-color: rgb(0, 180, 0);
          color: rgb(245, 242, 235);
          height: 18px;
          width: 18px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
