<template>
  <div class="wishlist-container">
    <div class="wishlist-wrapper">
      <div class="products" v-if="wishlistStore.wishlist.length > 0">
        <div
          class="product-card"
          v-for="item in wishlistStore.wishlist"
          :key="item"
        >
          <div class="pc-top-container">
            <div class="pct-discount-container" v-if="item.discountPrice">
              <p>{{ item.discountPrice.discount }}% OFF</p>
            </div>
            <div class="pct-actions-container">
              <button
                class="pct-wishlist-container"
                v-if="!wishlistStore.isProductInWishlist(item.id)"
                @click="wishlistStore.addToWishlist(item)"
              >
                <div class="pct-wishlist-box">
                  <svg class="wb-icon" viewBox="0 0 24 24">
                    <path
                      d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button
                class="pct-wishlist-container"
                v-if="wishlistStore.isProductInWishlist(item.id)"
                @click="wishlistStore.addToWishlist(item)"
                :class="{
                  'added-to-wishlist': wishlistStore.isProductInWishlist(
                    item.id,
                  ),
                }"
              >
                <div class="pct-wishlist-box">
                  <svg class="wb-icon" viewBox="0 0 24 24">
                    <path
                      d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button class="pct-view-container">
                <div class="pct-view-box">
                  <svg class="vb-icon" viewBox="0 0 512 512">
                    <path
                      d="M507.024,246.257C454.633,143.663,358.44,79.938,256,79.938c-102.41,0-198.604,63.725-251.022,166.318
    L0,256.001l4.978,9.744C57.396,368.339,153.59,432.062,256,432.062c102.44,0,198.633-63.723,251.024-166.316l4.976-9.744
    L507.024,246.257z M256,389.235c-84.328,0-161.27-49.588-207.693-133.234C94.73,172.354,171.672,122.767,256,122.767
    c84.358,0,161.299,49.588,207.695,133.234C417.299,339.648,340.358,389.235,256,389.235z"
                      fill="currentColor"
                    />
                    <path
                      d="M256,153.686c-57.158,0-103.498,46.34-103.498,103.5c0,57.158,46.34,103.498,103.498,103.498
    s103.5-46.34,103.5-103.498C359.5,200.026,313.158,153.686,256,153.686z
    M256,302.745c-25.135,0-45.558-20.424-45.558-45.559c0-5.646,1.17-10.972,3.025-15.949
    l37.85,14.764l-15.99-39.216c6.231-3.178,13.188-5.158,20.674-5.158
    c25.137,0,45.56,20.424,45.56,45.56C301.56,282.321,281.137,302.745,256,302.745z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div class="pct-image-container">
              <img :src="item.src" :alt="item.name" loading="lazy" />
            </div>
          </div>
          <div class="pc-main-container">
            <div class="pcm-name-container">
              <p>{{ item.name }}</p>
            </div>
            <div class="pcm-actions-container">
              <div class="pcm-price-container">
                <div class="pcm-old-price" v-if="item.discountPrice">
                  <p>{{ item.discountPrice.oldPrice.toFixed(2) }}</p>
                </div>
                <p>{{ item.formattedPrice }}</p>
              </div>
              <button
                v-if="!cartStore.isProductInCart(item.id)"
                class="pcm-cart-container"
                @click="cartStore.addToCart(item)"
              >
                <div class="pcm-cart-box">
                  <svg class="cb-icon" viewBox="0 0 1024 1024">
                    <path
                      d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z 
    m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z
    M344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96
    c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2
    C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z
    m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32
    c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320
    c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6
    16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32
    c-1.6 0.8-2.4 0.8-3.2 0.8z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
              <button
                class="pcm-cart-container"
                v-if="cartStore.isProductInCart(item.id)"
                @click="cartStore.removeFromCart(item.id)"
                :class="{
                  'added-to-cart': cartStore.isProductInCart(item.id),
                }"
              >
                <div class="pcm-cart-box">
                  <svg class="cb-icon" viewBox="0 0 1024 1024">
                    <path
                      d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z 
    m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z
    M344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96
    c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2
    C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z
    m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32
    c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320
    c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6
    16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32
    c-1.6 0.8-2.4 0.8-3.2 0.8z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-wishlist" v-else>
        <div class="ew-icon">
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g>
              <path
                fill="#000000"
                d="
      M333.984 31.215
      c-62.12 0-93.184 65.73-93.184 65.73
      s-31.064-65.72-93.184-65.72
      c-29.712 0-86.216 33.72-86.216 125.13
      0 161.24 179.4 324.43 179.4 324.43
      s179.4-163.19 179.4-324.43
      c0-91.42-56.504-125.13-86.216-125.14
      z

      M153.539 225.65
      h176
      v60.7
      h-176
      z
    "
              ></path>
            </g>
          </svg>
        </div>
        <div class="ew-texts">
          <p>Wihslist is empty</p>
          <p>
            See Take a look at the main page - we've collected products there
            that you might like.
          </p>
          <router-link to="/shop">
            <button class="ewb-button">Shop Now</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useWishlistStore } from "@/store/modules/wishlist";
import { useCartStore } from "@/store/modules/cart";
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
</script>
<style lang="scss" scoped>
.wishlist-container {
  padding: 100px 0 0;
  .wishlist-wrapper {
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    margin: clamp(20px, 10vw, 40px) auto;
    .products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(10px, 3vw, 14px);
      .product-card {
        min-width: 0;
        border-radius: clamp(10px, 2.5vw, 16px);
        .pc-top-container {
          margin-bottom: clamp(4px, 1.2vw, 10px);
          height: clamp(150px, 60vw, 350px);
          position: relative;
          .pct-discount-container {
            position: absolute;
            z-index: 1;
            top: 4%;
            transform: translateY(-4%);
            background-color: rgb(0, 180, 0);
            padding: clamp(2px, 0.8vw, 8px) clamp(4px, 2.8vw, 22px)
              clamp(2px, 0.8vw, 8px) clamp(4px, 0.8vw, 18px);
            font-weight: 500;
            font-size: clamp(16px, 4vw, 18px);
            color: rgb(245, 242, 235);
            clip-path: polygon(0 50%, 0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);
          }
          .pct-actions-container {
            position: absolute;
            z-index: 1;
            top: 3.2%;
            right: 3.2%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pct-wishlist-container,
            .pct-view-container {
              padding: clamp(2px, 1.2vw, 6px);
              border: 0;
              border-radius: 50%;
              background-color: rgb(245, 242, 235);
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: clamp(4px, 1.2vw, 6px);
              transition: all 0.2s;
              cursor: pointer;
              .pct-wishlist-box,
              .pct-view-box {
                height: 20px;
                .wb-icon,
                .vb-icon {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              &:hover {
                background-color: rgb(255, 255, 255);
                .pct-wishlist-box {
                  .wb-icon {
                    color: rgb(255, 25, 83);
                  }
                }
              }
              &.added-to-wishlist {
                .pct-wishlist-box {
                  .wb-icon {
                    color: rgb(255, 25, 83);
                  }
                }
              }
            }
          }
          .pct-image-container {
            width: 100%;
            height: 100%;
            border-radius: clamp(10px, 2.5vw, 16px);
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        @media (min-width: 576px) {
          .pc-top-container {
            height: clamp(200px, 38vw, 300px);
          }
        }
        @media (min-width: 768px) {
          .pc-top-container {
            height: clamp(240px, 32vw, 310px);
          }
        }
        @media (min-width: 1024px) {
          .pc-top-container {
            height: clamp(250px, 24vw, 340px);
          }
        }
        .pc-main-container {
          padding: 0 3.2% 3.2% 3.2%;
          border-radius: clamp(10px, 2.5vw, 16px);
          margin-top: auto;
          .pcm-name-container {
            font-size: clamp(16px, 3.6vw, 18px);
            color: rgb(0, 0, 0);
            margin-bottom: 6px;
            p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .pcm-actions-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .pcm-price-container {
              font-size: clamp(16px, 4vw, 20px);
              color: rgb(0, 180, 0);
              font-weight: 700;
              .pcm-old-price {
                font-size: clamp(12px, 3vw, 14px);
                color: rgb(100, 100, 100);
                text-decoration: line-through;
                margin-bottom: -2px;
              }
            }
            .pcm-cart-container {
              padding: clamp(4px, 1.2vw, 8px);
              border: 1px solid rgb(0, 180, 0);
              background-color: transparent;
              border-radius: 10px;
              cursor: pointer;
              transition: background-color 0.2s;
              .pcm-cart-box {
                height: 24px;
                width: 24px;
                .cb-icon {
                  color: rgb(0, 180, 0);
                }
              }
              &.added-to-cart {
                background-color: rgba(0, 180, 0, 0.8);
                .pcm-cart-box {
                  .cb-icon {
                    color: rgb(245, 242, 235);
                  }
                }
              }
            }
          }
        }
      }
    }
    @media (min-width: 576px) {
      .products {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
    }
    @media (min-width: 768px) {
      .products {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
    }
    @media (min-width: 1024px) {
      .products {
        grid-template-columns: repeat(5, 1fr);
        gap: 18px;
      }
    }
    .empty-wishlist {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.65);
      padding: 30px;
      gap: 20px;
      .ew-icon {
        width: 80px;
        height: 80px;
        padding: 10px;
        border-radius: 50%;
        background-color: rgba(0, 180, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ew-texts {
        text-align: center;
        p:nth-child(1) {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
        .ewb-button {
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
}

@media (min-width: 1024px) {
  .wishlist-container {
    padding: 120px 0 0;
    .wishlist-wrapper {
      .empty-wishlist {
        .ew-icon {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
