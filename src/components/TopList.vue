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
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 5,
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
                  <p>{{ item.price.toFixed(2) }}</p>
                </div>
                <button class="pcm-cart-container">
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
              font-size: clamp(16px, 4vw, 18px);
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
                &:hover {
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
      transition:
        background-color 0.2s ease-in,
        color 0.2s ease-in;
      cursor: pointer;
      &:hover {
        background-color: rgb(245, 242, 235);
        color: rgb(0, 180, 0);
      }
    }
  }
}
</style>
