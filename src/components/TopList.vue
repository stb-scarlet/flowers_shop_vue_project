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
          slidesPerView: 2,
          spaceBetween: 12,
        },
        425: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
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
              <div
                class="pct-image-container"
                @mousemove="handleMove"
                @mouseleave="resetZoom"
              >
                <!-- <img :src="item.src" :alt="item.name" loading="lazy" /> -->
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
import { FreeMode, Navigation } from "swiper/modules";
const modules = [Navigation, FreeMode];

const store = useStore();

const products = computed(() => store.getters["product/getProducts"]);

const topListProducts = products.value.sort((a, b) => {
  const ratingA =
    a.reviews.reduce((total, review) => total + review.rating, 0) /
    a.reviews.length;
  const ratingB =
    b.reviews.reduce((total, review) => total + review.rating, 0) /
    b.reviews.length;
  return ratingB - ratingA;
});

/* ---------- IMAGE ZOOM ---------- */

function handleMove(e) {
  const container = e.currentTarget;
  const img = container.querySelector("img");

  if (!img) return;

  const rect = container.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = "scale(1.8)";
}

function resetZoom(e) {
  const img = e.currentTarget.querySelector("img");

  if (!img) return;

  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center";
}
</script>
<style lang="scss" scoped>
.top-list-container {
  margin-bottom: clamp(30px, 7vw, 70px);
  position: relative;
  .tl-title {
    font-family: "Petit Formal Script", cursive;
    color: rgb(0, 180, 0);
    font-size: clamp(14px, 4vw, 28px);
    font-weight: 700;
    margin-bottom: clamp(14px, 1.2vw, 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      color: rgb(0, 180, 0);
      cursor: pointer;
      &:hover {
        color: rgb(255, 25, 83);
        text-decoration: underline;
      }
    }
  }
  .tl-swiper {
    .tl-swiper-slide {
      .tl-swiper-slide-container {
        .product-card {
          border-radius: clamp(10px, 2.5vw, 16px);
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
                background-color: rgba(245, 242, 235, 0.4);
                backdrop-filter: blur(10px) saturate(180%);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: clamp(4px, 1.2vw, 6px);
                transition: all 0.2s;
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
                  background-color: rgba(255, 25, 83, 0.65);
                  .pct-wishlist-box {
                    filter: brightness(0) invert(1);
                  }
                }
              }
              .pct-view-container {
                padding: clamp(2px, 1.2vw, 6px);
                border-radius: 50%;
                font-size: clamp(10px, 3.6vw, 16px);
                background-color: rgba(245, 242, 235, 0.4);
                backdrop-filter: blur(10px) saturate(180%);
                text-decoration: none;
                color: rgb(100, 100, 100);
                transition: all 0.2s;
                &:hover {
                  color: rgb(0, 0, 0);
                  background-color: rgb(245, 242, 235);
                }
              }
            }
            .pct-image-container {
              height: clamp(100px, 50vw, 350px);
              width: 100%;
              box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
              border-radius: clamp(10px, 2.5vw, 16px);
              // aspect-ratio: 100% / clamp(100px, 44vw, 350px);
              overflow: hidden;
              cursor: zoom-in;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: clamp(10px, 2.5vw, 16px);
                transition: transform 0.3s ease;
              }
            }
            @media (hover: none) {
              .pct-image-container {
                cursor: default;
              }
            }
          }
          .pc-main-container {
            padding: 0 3.2% 3.2% 3.2%;
            border-radius: clamp(10px, 2.5vw, 16px);
            margin-top: auto;
            .pcm-name-container {
              font-size: clamp(8px, 3.6vw, 18px);
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
                font-size: clamp(10px, 4vw, 20px);
                color: rgb(0, 180, 0);
                font-weight: 700;
                .pcm-old-price {
                  font-size: clamp(6px, 3vw, 14px);
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
                transition: all 0.2s;
                .pcm-cart-box {
                  height: clamp(12px, 5vw, 24px);
                  width: clamp(12px, 5vw, 24px);
                  filter: invert(39%) sepia(94%) saturate(1125%) hue-rotate(92deg) brightness(95%) contrast(105%);
                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
                &:hover {
                  background-color: rgba(0, 180, 0, 0.8);
                  .pcm-cart-box {
                    filter: brightness(0) invert(1);
                  }
                }
              }
            }
          }
        }
        &:hover .tl-swiper-slide-container .product-card {
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .tl-swiper-navigation-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
      background-color: rgba(245, 242, 235, 0.25);
      backdrop-filter: blur(14px) saturate(180%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: all 0.2s ease-in;
      cursor: pointer;
      &:hover {
        background-color: rgb(245, 242, 235);
        color: rgb(0, 180, 0);
      }
    }
  }
}
</style>
