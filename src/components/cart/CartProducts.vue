<template>
  <div class="cart-products">
    <div class="cp-header"></div>
    <div class="cp-body">
      <ul class="cpb-wrap">
        <li
          class="cpbw-item"
          v-for="item in currencyStore.currencyCartProducts"
          :key="item.id"
        >
          <!-- <div class="cpbw-choose-button">
            <input type="checkbox" class="cpbw-checkbox" @change="cartStore.selectedProducts(item.id)">
          </div> -->
          <div class="cpbw-image">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.src" alt="" />
            </router-link>
          </div>
          <div class="cpbw-info">
            <div class="cpbw-name">
              <div class="cp-title">
                <p>Name</p>
              </div>
              <router-link :to="`/product/${item.id}`" class="cpbw-name">
                <p>{{ item.name }}</p>
              </router-link>
            </div>
            <div class="cpbw-price">
              <div class="cp-title">
                <p>Price</p>
              </div>
              <p>{{ item.formattedPrice }}</p>
            </div>
            <div class="cpbw-quantity">
              <div class="cp-title">
                <p>Qunatity</p>
              </div>
              <div class="cpbwq-counter">
                <button
                  class="cpbw-quantity-button"
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                >
                  <svg class="qb-icon" viewBox="0 0 24 24">
                    <path d="M5 11H19V13H5Z" fill="currentColor" />
                  </svg>
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  class="cpbw-quantity-button"
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                >
                  <svg viewBox="0 0 24 24" color="white" class="qb-icon">
                    <path
                      d="M6 12H18M12 6V18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="cpbw-total">
              <div class="cp-title">
                <p>Total Price</p>
              </div>
              <p>{{ item.totalPrice }}</p>
            </div>
          </div>
          <div class="cpbw-action">
            <div class="wishlist-box">
              <button
                class="wb-button"
                v-if="!wishlistStore.isProductInWishlist(item.id)"
                @click="wishlistStore.addToWishlist(item)"
              >
                <svg class="wb-icon" viewBox="0 0 24 24">
                  <path
                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                class="wb-button"
                v-if="wishlistStore.isProductInWishlist(item.id)"
                @click="wishlistStore.addToWishlist(item)"
                :class="{
                  'added-to-wishlist': wishlistStore.isProductInWishlist(
                    item.id,
                  ),
                }"
              >
                <svg class="wb-icon" viewBox="0 0 24 24">
                  <path
                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div class="delete-box">
              <button
                class="db-button"
                @click="cartStore.removeFromCart(item.id)"
              >
                <svg
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="db-icon"
                >
                  <path
                    d="M6 4.5858L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.5858 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.5858Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useCurrencyStore } from "@/store/modules/Currency";
import { useWishlistStore } from "@/store/modules/wishlist";
import { useCartStore } from "@/store/modules/cart";
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const currencyStore = useCurrencyStore();
</script>
<style lang="scss" scoped>
.cart-products {
  .cp-body {
    .cpb-wrap {
      list-style: none;
      .cpbw-item {
        position: relative;
        display: grid;
        overflow: hidden;
        border-radius: 10px;
        grid-template-columns: 100px 3fr 50px;
        height: 120px;
        background-color: rgba(255, 255, 255, 0.65);
        margin-bottom: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        .cpbw-choose-button {
          position: absolute;
          top: 4px;
          left: 4px;
          .cpbw-checkbox {
            height: 20px;
            width: 20px;
            border-radius: 10px;
            border: none;
          }
        }
        .cpbw-image {
          height: 120px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .cpbw-info {
          display: grid;
          grid-template-columns: 40% 20% 20% 20%;
          height: 100%;
          overflow: hidden;
          .cpbw-name,
          .cpbw-price,
          .cpbw-quantity,
          .cpbw-total {
            padding: 22px 10px 10px 10px;
            overflow: hidden;
            font-weight: 600;
            position: relative;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: rgb(0, 0, 0);
            height: 100%;
            .cp-title {
              position: absolute;
              color: rgb(100, 100, 100);
              align-self: flex-start;
              font-size: 14px;
              top: 10px;
              border-bottom: 1px solid black;
            }
          }
          .cpbw-quantity {
            .cpbwq-counter {
              display: flex;
              align-items: center;
              .cpbw-quantity-button {
                height: 25px;
                width: 25px;
                background-color: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 50%;
                background-color: rgb(0, 180, 0);
                .qb-icon {
                  height: 20px;
                  width: 20px;
                  color: rgb(245, 242, 235);
                }
                &:hover {
                  background-color: rgba(0, 180, 0, 0.8);
                }
              }
              span {
                margin: 0 10px;
              }
            }
          }
          .cpbw-total {
            color: rgb(0, 180, 0);
          }
        }
        .cpbw-action {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          .wishlist-box {
            height: 50px;
            width: 50px;
            .wb-button {
              width: 100%;
              height: 100%;
              background-color: transparent;
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;
              color: rgb(100, 100, 100);
              cursor: pointer;
              .wb-icon {
                width: 25px;
                height: 25px;
                object-fit: cover;
              }
              &.added-to-wishlist {
                color: rgb(255, 25, 83);
              }
            }
          }
          .delete-box {
            height: 50px;
            width: 50px;
            .db-button {
              width: 100%;
              height: 100%;
              background-color: transparent;
              border: none;
              padding: 17px;
              color: rgb(100, 100, 100);
              transition: color 0.2s;
              cursor: pointer;
              .db-icon {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              &:hover {
                color: rgb(255, 25, 83);
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .cart-products {
    .cp-body {
      .cpb-wrap {
        .cpbw-item {
          .cpbw-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            padding: 10px;
            .cpbw-name,
            .cpbw-price,
            .cpbw-quantity,
            .cpbw-total {
              padding: 0;
              white-space: nowrap;
              .cp-title {
                display: none;
              }
            }
            .cpbw-total {
              display: none;
            }
          }
          .cpbw-action {
            margin-left: auto;
          }
        }
      }
    }
  }
}
</style>
