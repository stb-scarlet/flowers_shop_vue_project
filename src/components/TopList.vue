<template>
  <div class="top-list-container">
    <div class="tl-title">
      <p>Top List</p>
      <button>See More <i class="fas fa-arrow-right"></i></button>
    </div>
    <swiper
      class="tl-swiper"
      :modules="modules"
      :free-mode="true"
      :breakpoints="{
        0: {
          slidesPerView: 2.2,
          spaceBetween: 12,
        },
        425: {
          slidesPerView: 2.6,
          spaceBetween: 12,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }"
      :navigation="{
        prevEl: '.tl-swiper-prev',
        nextEl: '.tl-swiper-next',
      }"
    >
      <swiper-slide
        class="tl-swiper-slide"
        v-for="item in topListProducts.slice(0, 8)"
        :key="item.id"
      >
        <div class="tl-swiper-slide-container">
          <div class="product-card">
            <div class="pc-top-container">
              <div class="pct-discount-container" v-if="item.discountPrice">
                <p>{{ item.discountPrice.discount }}% OFF</p>
              </div>
              <div class="pct-actions-container">
                <button class="pct-wishlist-container">
                  <div class="pct-wishlist-box">
                    <img src="/action-icons/wishlist-icon.png" alt="" />
                  </div>
                </button>
                <router-link to="" class="pct-view-container">
                  <i class="fas fa-eye"></i>
                </router-link>
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
                  <p>{{ item.price.toFixed(2) }}</p>
                </div>
                <button class="pcm-cart-container">
                  <div class="pcm-cart-box">
                    <img src="/action-icons/cart-icon.png" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="tl-swiper-navigation-container">
      <div class="tl-swiper-prev">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="tl-swiper-next">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const modules = [Navigation];

const store = useStore();

const products = computed(() => store.getters["product/getProducts"]);

const topListProducts = [...products.value].sort((a, b) => {
  const ratingA =
    a.reviews.reduce((total, review) => total + review.rating, 0) /
    a.reviews.length;
  const ratingB =
    b.reviews.reduce((total, review) => total + review.rating, 0) /
    b.reviews.length;
  return ratingB - ratingA;
});
</script>
<style lang="scss" scoped>
.top-list-container {
  margin-bottom: clamp(30px, 7vw, 70px);
  position: relative;
  .tl-title {
    font-family: "Petit Formal Script", cursive;
    color: rgb(0, 180, 0);
    font-size: clamp(18px, 4.8vw, 28px);
    font-weight: 700;
    margin-bottom: clamp(14px, 1.2vw, 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      color: rgb(100, 100, 100);
      font-size: clamp(12px, 2vw, 16px);
      cursor: pointer;
      &:hover {
        color: rgb(0, 180, 0);
        text-decoration: underline;
      }
    }
  }
  .tl-swiper {
    .tl-swiper-slide {
      .tl-swiper-slide-container {
        user-select: none;
        .product-card {
          transition: all 0.4s;
          .pc-top-container {
            margin-bottom: clamp(4px, 1.2vw, 10px);
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
              font-size: clamp(8px, 2.6vw, 18px);
              color: rgb(245, 242, 235);
              clip-path: polygon(
                0 50%,
                0 0,
                100% 0,
                90% 50%,
                100% 100%,
                0 100%
              );
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
              .pct-wishlist-container {
                padding: clamp(2px, 1.2vw, 6px);
                border: 0;
                border-radius: 50%;
                background-color: rgb(245, 242, 235);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: clamp(4px, 1.2vw, 6px);
                transition: background-color 0.2s;
                cursor: pointer;
                .pct-wishlist-box {
                  height: clamp(12px, 4vw, 20px);
                  width: clamp(12px, 4vw, 20px);
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
                &:hover {
                  background-color: rgb(255, 255, 255);
                }
              }
              .pct-view-container {
                padding: clamp(2px, 1.2vw, 6px);
                border-radius: 50%;
                font-size: clamp(10px, 3.6vw, 16px);
                background-color: rgb(245, 242, 235);
                text-decoration: none;
                color: rgb(100, 100, 100);
                transition:
                  color 0.2s,
                  background-color 0.2s;
                &:hover {
                  background-color: rgb(255, 255, 255);
                  color: rgb(0, 0, 0);
                }
              }
            }
            .pct-image-container {
              width: 100%;
              height: 100%;
              border-radius: clamp(10px, 2.5vw, 16px);
              // aspect-ratio: 100% / clamp(100px, 44vw, 350px);
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: clamp(10px, 2.5vw, 16px);
                transition: transform 0.3s ease;
              }
            }
          }
          @media (min-width: 0) {
            .pc-top-container {
              height: clamp(150px, 50vw, 200px);
            }
          }
          @media (min-width: 425px) {
            .pc-top-container {
              height: clamp(170px, 42vw, 250px);
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
              font-size: clamp(14px, 3.6vw, 18px);
              color: rgb(0, 0, 0);
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
                font-size: clamp(14px, 4vw, 20px);
                color: rgb(0, 180, 0);
                font-weight: 700;
                .pcm-old-price {
                  font-size: clamp(10px, 3vw, 14px);
                  color: rgb(100, 100, 100);
                  text-decoration: line-through;
                  margin-bottom: -2.8px;
                }
              }
              .pcm-cart-container {
                padding: clamp(4px, 1.2vw, 8px);
                margin-top: clamp(4px, 1.2vw, 8px);
                border: 1px solid rgb(0, 180, 0);
                background-color: transparent;
                border-radius: clamp(4px, 1.2vw, 8px);
                color: rgb(255, 255, 255);
                font-size: clamp(8px, 3vw, 18px);
                cursor: pointer;
                transition: background-color 0.2s;
                .pcm-cart-box {
                  height: clamp(12px, 5vw, 24px);
                  width: clamp(12px, 5vw, 24px);
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
                &:hover {
                  background-color: rgba(0, 180, 0, 0.8);
                }
              }
            }
          }
        }
      }
    }
  }
  .tl-swiper-navigation-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 clamp(4px, 1.2vw, 8px);
    justify-content: space-between;
    .tl-swiper-prev,
    .tl-swiper-next {
      color: rgb(100, 100, 100);
      font-size: clamp(12px, 5vw, 18px);
      z-index: 1;
      height: clamp(22px, 10vw, 36px);
      width: clamp(22px, 10vw, 36px);
      background-color: rgba(245, 242, 235, 0.65);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      cursor: pointer;
      &:hover {
        background-color: rgb(245, 242, 235);
        color: rgb(0, 180, 0);
      }
    }
  }
}
</style>
