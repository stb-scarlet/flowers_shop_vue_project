<template>
  <div class="pd-container" v-if="productDetail">
    <div class="pd-actions-container">
      <div class="pda-images-part">
        <Swiper
          class="pdaip-image-container"
          :modules="modules"
          :thumbs="{ swiper: thumbsSwiper }"
          :space-between="16"
          :slidesPerView="1"
        >
          <swiper-slide
            class="pdaip-image"
            v-for="item in currencyStore.currencyProducts.slice(0, 8)"
            :key="item.id"
          >
            <img :src="item.src" alt="" />
          </swiper-slide>
        </Swiper>
        <Swiper
          class="pdaip-thumbs-container"
          :modules="modules"
          @swiper="setThumbsSwiper"
          :slides-per-view="4"
          :free-mode="true"
          :space-between="16"
          :watchSlidesProgress="true"
          :direction="'vertical'"
        >
          <swiper-slide
            class="pdaip-thumb"
            v-for="item in currencyStore.currencyProducts"
            :key="item.id"
          >
            <img :src="item.src" alt="" />
          </swiper-slide>
        </Swiper>
      </div>
      <div class="pda-main-part">
        <div class="mp-header">
          <div class="mph-name-price">
            <p>{{ productDetail.name }}</p>
            <p>{{ productDetail.formattedPrice }}</p>
          </div>
          <div class="mph-reviews-container">
            <div class="mphr-ratings">
              <p>Rating:</p>
              <span v-for="item in 5" :key="item" class="mphr-star">
                <i
                  class="fas fa-star"
                  :style="{
                    color:
                      item <=
                      productStore.getAverageRating(productDetail.reviews)
                        ? 'gold'
                        : '#ccc',
                  }"
                ></i>
              </span>
            </div>
            <div class="mphr-reviews">
              <p>Customer Reviews:</p>
              <span>{{ productDetail.reviews.length }}</span>
            </div>
          </div>
        </div>
        <div class="mp-body">
          <div class="short-description-part">
            <p>Short Description:</p>
            <p>{{ productDetail.title }}</p>
          </div>
          <div class="product-sizes">
            <p>Size:</p>
            <div class="ps-container">
              <button
                class="ps-box"
                v-for="size in productDetail.sizes"
                :key="size"
              >
                {{ $t(size).slice(0, 1) }}
              </button>
            </div>
          </div>
          <div class="cart-wishlist-container">
            <div
              class="cw-quantity"
              v-if="cartStore.isProductInCart(productDetail.id)"
            >
              <button
                class="cw-quantity-button"
                @click="
                  cartStore.updateQuantity(
                    productDetail.id,
                    cartItem.quantity - 1,
                  )
                "
              >
                <svg class="qb-icon" viewBox="0 0 24 24">
                  <path d="M5 11H19V13H5Z" fill="currentColor" />
                </svg>
              </button>
              <span>{{ cartItem.quantity }}</span>
              <button
                class="cw-quantity-button"
                @click="
                  cartStore.updateQuantity(
                    productDetail.id,
                    cartItem.quantity + 1,
                  )
                "
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
            <button
              v-if="!cartStore.isProductInCart(productDetail.id)"
              @click="cartStore.addToCart(productDetail)"
              class="cart-box"
            >
              Add To Cart
            </button>
            <button
              v-if="cartStore.isProductInCart(productDetail.id)"
              @click="cartStore.removeFromCart(productDetail)"
              class="cart-box"
              :style="{
                backgroundColor: 'rgb(0, 180, 0)',
                color: 'rgb(245, 242, 235)',
              }"
            >
              Remove From Cart
            </button>
            <button
              v-if="!wishlistStore.isProductInWishlist(productDetail.id)"
              @click="wishlistStore.addToWishlist(productDetail)"
              class="wishlist-box"
            >
              <svg class="wb-icon" viewBox="0 0 24 24">
                <path
                  d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              v-if="wishlistStore.isProductInWishlist(productDetail.id)"
              @click="wishlistStore.addToWishlist(productDetail)"
              class="wishlist-box"
              :style="{
                backgroundColor: 'rgb(0, 180, 0)',
                color: 'rgb(245, 242, 235)',
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
          <div class="category">
            <p>Category:</p>
            <span>{{ $t(productDetail.category) }}</span>
          </div>
          <div class="share-icons">
            <p>Share this product:</p>
            <div class="si-container">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-telegram"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-description-reviews">
      <div class="dr-buttons">
        <button
          class="drb-description"
          @click="((showDescription = true), (showReviews = false))"
          :class="{ 'active-drb': showDescription }"
        >
          Description
        </button>
        <button
          class="drb-reviews"
          @click="((showReviews = true), (showDescription = false))"
          :class="{ 'active-drb': showReviews }"
        >
          Reviews {{ productDetail.reviews.length }}
        </button>
      </div>
      <div class="pddr-container">
        <div class="description" v-if="showDescription">
          <p>{{ productDetail.description }}</p>
        </div>
        <form class="send-review" @submit.prevent="handleReview" v-if="!showDescription">
          <div class="sr-field">
            <textarea
              class="sr-textarea"
              placeholder="Write your review"
              v-model="review.comment"
              required
            ></textarea>
            <select class="sr-rating" v-model="review.rating">
              <option :value="i" v-for="i in 5" :key="i">{{ i }}</option>
            </select>
          </div>
          <div class="sr-buttons">
            <button class="sr-button" type="submit" @click="sendReview">
              Send Review
            </button>
            <button class="sr-button" type="button" @click="cancelReview">
              Cancel
            </button>
          </div>
        </form>
        <div class="swiper-field" v-if="!showDescription">
          <Swiper
            class="reviews"
            v-if="showReviews"
            :modules="modules"
            :navigation="{
              nextEl: '.tl-swiper-next',
              prevEl: '.tl-swiper-prev',
            }"
            :spaceBetween="16"
            :freeMode="true"
            :breakpoints="{
              0: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }"
          >
            <swiper-slide
              class="r-card"
              v-for="review in productDetail.reviews"
              :key="review"
            >
              <p>
                Author: <span>{{ review.author }}</span>
              </p>
              <p>
                Rating:
                <span
                  ><i
                    class="fas fa-star"
                    v-for="i in 5"
                    :key="i"
                    :style="{
                      color: i <= review.rating ? 'gold' : '#ccc',
                    }"
                  ></i
                ></span>
              </p>
              <p>
                Comment: <span>{{ review.comment }}</span>
              </p>
            </swiper-slide>
          </Swiper>
          <div class="tl-swiper-next">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="tl-swiper-prev">
            <i class="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useCurrencyStore } from "@/store/modules/Currency";
import { useProductStore } from "@/store/modules/product";
import { useCartStore } from "@/store/modules/cart";
import { useWishlistStore } from "@/store/modules/wishlist";
import { useLoginRegisterStore } from "@/store/modules/loginRegister";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
const modules = [Navigation, FreeMode, Thumbs];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const cartStore = useCartStore();
const loginRegisterStore = useLoginRegisterStore();
const wishlistStore = useWishlistStore();
const productStore = useProductStore();
const currencyStore = useCurrencyStore();
const route = useRoute();
const productId = computed(() => route.params.id);
const productDetail = computed(() =>
  currencyStore.currencyProducts.find((p) => p.id === Number(productId.value)),
);

const cartItem = computed(() =>
  cartStore.cart.find((item) => item.id === Number(productId.value)),
);

const showReviews = ref(false);
const showDescription = ref(true);

const cancelReview = () => {
  review.value.rating = 3;
  review.value.comment = "";
};

const review = ref({
  author: loginRegisterStore?.currentUser?.username,
  rating: 3,
  comment: "",
});

const handleReview = () => {
  const newReview = {
    author: review.value.author,
    rating: review.value.rating,
    comment: review.value.comment,
  };

  if (!loginRegisterStore.currentUser) {
    loginRegisterStore.toggleLogin();
  } else {
    productStore.addToReviews(Number(productId.value), newReview);
  }

  review.value.comment = "";
  review.value.rating = 3;
};
</script>
<style lang="scss" scoped>
.pd-container {
  max-width: 1500px;
  padding: 100px clamp(10px, 1vw, 20px);
  margin: 0 auto;
  .pd-actions-container {
    margin: clamp(20px, 10vw, 40px) 0;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 30px;
    .pda-images-part {
      border-radius: 10px;
      overflow: hidden;
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-columns: 20% 80%;
      gap: 16px;
      height: clamp(300px, 100vw, 600px);
      .pdaip-image-container {
        height: 100%;
        width: 100%;
        order: 1;
        .pdaip-image {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .pdaip-thumbs-container {
        height: 100%;
        width: 100%;
        .pdaip-thumb {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.1);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .pda-main-part {
      width: 100%;
      .mp-header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 10px;
        width: 100%;
        .mph-name-price {
          font-weight: 700;
          font-size: 24px;
          p:nth-child(2) {
            color: rgb(0, 180, 0);
          }
        }
        .mph-reviews-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .mphr-ratings,
          .mphr-reviews {
            display: flex;
            gap: 6px;
            span {
              font-weight: 700;
            }
          }
        }
      }
      .mp-body {
        border-top: 1px solid rgba(0, 180, 0, 0.1);
        padding: 10px 0;
        .short-description-part {
          margin-bottom: 10px;
          p:nth-child(1) {
            font-weight: 700;
            margin-bottom: 4px;
          }
        }
        .product-sizes {
          font-weight: 700;
          margin-bottom: 14px;
          .ps-container {
            display: flex;
            gap: 10px;
            margin-top: 6px;
            .ps-box {
              height: 35px;
              width: 35px;
              border-radius: 50%;
              border: 1px solid rgb(0, 180, 0);
              background-color: transparent;
              color: rgb(100, 100, 100);
              text-transform: uppercase;
              cursor: pointer;
              &:hover {
                background-color: rgb(0, 180, 0);
                color: rgb(245, 242, 235);
              }
            }
          }
        }

        .cart-wishlist-container {
          margin-top: 10px;
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          .cw-quantity {
            display: flex;
            align-items: center;
            .cw-quantity-button {
              height: 35px;
              width: 35px;
              background-color: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              border: none;
              border-radius: 50%;
              background-color: rgb(0, 180, 0);
              .qb-icon {
                height: 25px;
                width: 25px;
                color: rgb(245, 242, 235);
              }
              &:hover {
                background-color: rgba(0, 180, 0, 0.8);
              }
            }
            span {
              margin: 0 10px;
              font-size: 18px;
              font-weight: 600;
            }
          }
          .cart-box {
            padding: 10px 20px;
            background-color: transparent;
            border: 1px solid rgb(0, 180, 0);
            color: rgb(0, 180, 0);
            font-weight: 700;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .wishlist-box {
            padding: 6px;
            background-color: transparent;
            border: 1px solid rgb(0, 180, 0);
            color: rgb(0, 180, 0);
            font-weight: 700;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.2s;
            height: 40px;
            width: 40px;
            .wb-icon {
              width: 100%;
              height: 100%;
            }
          }
        }
        .category {
          margin-top: 10px;
          margin-bottom: 10px;
          display: flex;
          gap: 6px;
          span {
            font-weight: 700;
            color: rgb(0, 180, 0);
          }
        }

        .share-icons {
          display: flex;
          gap: 10px;
          font-weight: 700;
          .si-container {
            display: flex;
            gap: 6px;
            i {
              &:hover {
                color: rgb(0, 180, 0);
              }
            }
          }
        }
      }
    }
  }
  .pd-description-reviews {
    .dr-buttons {
      display: flex;
      gap: 20px;
      border-bottom: 1px solid rgba(0, 180, 0, 0.1);
      .drb-description,
      .drb-reviews {
        padding: 4px 0;
        border: none;
        font-size: 16px;
        color: rgb(100, 100, 100);
        background-color: transparent;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          transform: scaleX(0);
          transform-origin: right;
          border-radius: 25px;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: rgb(0, 180, 0);
          left: 0;
          transition: transform 0.3s ease;
        }
        &:hover,
        &:hover::after {
          color: rgb(0, 180, 0);
          transform: scaleX(1);
          transform-origin: left;
        }
        &.active-drb {
          color: rgb(0, 180, 0);
          &::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
    .pddr-container {
      margin-top: 20px;
      font-size: 16px;
      gap: 20px;
      .description {
        color: rgb(100, 100, 100);
        line-height: 25px;
        padding-left: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: rgb(0, 180, 0, 0.1);
        }
      }
      .send-review {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;
        .sr-field {
          display: flex;
          justify-content: center;
          gap: 6px;
          .sr-textarea {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            font-family: "Quicksand", sans-serif;
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            font-weight: 600;
          }
          .sr-rating {
            padding: 10px;
            height: 50px;
            font-size: 16px;
            font-family: "Quicksand", sans-serif;
            font-weight: 700;
            border: 1px solid rgb(0, 0, 0, 0.1);
            border-radius: 10px;
            outline: none;
          }
        }
        .sr-buttons {
          display: flex;
          gap: 10px;
          .sr-button {
            padding: 10px 20px;
            background-color: rgb(0, 180, 0);
            border: none;
            border-radius: 10px;
            font-size: 16px;
            color: rgb(255, 255, 255);
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.2s;
            &:hover {
              background-color: rgb(0, 190, 0);
            }
          }
          .sr-button:nth-child(2) {
            background-color: rgb(100, 100, 100);
          }
        }
      }
      .swiper-field {
        position: relative;
        .reviews {
          display: flex;
          .r-card {
            background-color: rgba(255, 255, 255, 0.65);
            padding: 20px 10px;
            border-radius: 10px;
            p {
              margin-bottom: 6px;
              color: rgb(100, 100, 100);
              span {
                color: rgb(0, 0, 0);
                font-weight: 700;
              }
            }
          }
        }
        .tl-swiper-next,
        .tl-swiper-prev {
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          position: absolute;
          z-index: 1;
          color: rgb(100, 100, 100);
          font-size: 30px;
          transition: color 0.2s;
          &:active {
            color: rgb(0, 180, 0);
          }
        }
        .tl-swiper-next {
          right: 0;
          left: auto;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .pd-container {
    padding: 120px clamp(10px, 1vw, 20px);
  }
}
@media (min-width: 768px) {
  .pd-container {
    .pd-actions-container {
      grid-template-columns: repeat(2, 1fr);
      .pda-images-part {
        height: clamp(300px, 50vw, 600px);
      }
      .pda-main-part {
        .mp-header {
          flex-direction: row;
        }
      }
    }
  }
}
</style>
