<template>
  <div class="home-view">
    <div class="hv-main-container">
      <div class="hv-banners-container">
        <swiper
          class="banners-swiper"
          :modules="modules"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="{
            prevEl: '.swiper-custom-prev',
            nextEl: '.swiper-custom-next',
          }"
          :slides-per-view="1"
          :space-between="10"
        >
          <swiper-slide
            class="banners-swiper-slide"
            v-for="item in banners"
            :key="item.id"
          >
            <div class="banners-swiper-slide-container">
              <div class="banner-image">
                <img :src="item.src" alt="" loading="lazy" />
              </div>
              <div class="banner-texts">
                <div class="fb-paragraph">
                  <p>{{ item.firstParagraph }}</p>
                </div>
                <div class="sb-paragraph">
                  <p>
                    {{
                      item.secondParagraph
                        .trim()
                        .split(" ")
                        .slice(0, -1)
                        .join(" ")
                    }}
                    <span>{{
                      item.secondParagraph.trim().split(" ").slice(-1)[0]
                    }}</span>
                  </p>
                </div>
                <div class="tb-paragraph">
                  <p>{{ item.thirdParagraph }}</p>
                </div>
                <router-link to="/shop" class="shop-link">
                  <button>Shop Now</button>
                </router-link>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-custom-prev">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="swiper-custom-next">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="hv-products-section">
        <div class="hv-main-filter-container">
          <div class="hvmf-categories-container">
            <div class="hvmfc-title">
              <p>Categories</p>
            </div>
            <ul class="categories-container">
              <li
                class="category-container"
                v-for="item in categories"
                :key="item"
                :class="{ 'active-filter': category.includes(item) }"
              >
                <input
                  type="checkbox"
                  :id="`${item}-checkbox`"
                  :value="item"
                  v-model="category"
                />
                <label :for="`${item}-checkbox`">{{ item }}</label>
                <span>({{ productsQuantity(item) }})</span>
              </li>
            </ul>
          </div>
          <div class="hvmf-range-container">
            <div class="hvmfr-title">
              <p>Price Range</p>
            </div>
            <div class="range-container">
              <div class="range-slider">
                <div class="range-progress" :style="rangeProgress"></div>
                <input
                  type="range"
                  :min="minPrice"
                  :max="maxPrice"
                  v-model="rangeMin"
                />
                <input
                  type="range"
                  :min="minPrice"
                  :max="maxPrice"
                  v-model="rangeMax"
                />
              </div>
              <form class="range-field-container" @submit.prevent="handlePrice">
                <div class="range-field">
                  <label for="minNumber" class="rf-min">
                    <p>Min:</p>
                    <input
                      type="number"
                      id="minNumber"
                      v-model="priceNumberMin"
                    />
                  </label>
                  <label for="maxNumber" class="rf-max">
                    <p>Max:</p>
                    <input
                      type="number"
                      id="maxNumber"
                      v-model="priceNumberMax"
                    />
                  </label>
                </div>
                <button type="submit" class="rf-filter">Filter</button>
              </form>
            </div>
          </div>
          <div class="hvmf-size-container">
            <div class="hvmfs-title">
              <p>Size</p>
            </div>
            <ul class="sizes-container">
              <li
                class="size"
                v-for="item in ['small', 'medium', 'large']"
                :key="item"
                :class="{ 'active-filter': size.includes(item) }"
              >
                <input
                  type="checkbox"
                  :id="`${item}-checkbox`"
                  :value="item"
                  v-model="size"
                />
                <label :for="`${item}-checkbox`">{{ item }}</label>
                <span>({{ productsQuantity(item) }})</span>
              </li>
            </ul>
          </div>
          <div class="hvmf-banner-container">
            <div class="hvmfb-image">
              <!-- <img src="/banner-images/4.webp" alt="" /> -->
            </div>
          </div>
        </div>
        <div class="products-container">
          <div class="sort-container"></div>
          <swiper
            :slides-per-view="3"
            :slides-per-group="3"
            :grid="{ rows: 3, fill: 'row' }"
            :space-between="30"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="products-swiper"
          >
            <swiper-slide
              class="products-swiper-slide"
              v-for="item in filteredProducts"
              :key="item.id"
            >
              <div class="products">
                <div class="product-card">
                  <div class="pc-top-container">
                    <div
                      class="pct-discount-container"
                      v-if="item.discountPrice"
                    >
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
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref, watch, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Pagination, Navigation, Grid } from "swiper/modules";
import product from "@/store/modules/product";

const modules = [Pagination, Navigation, Grid];
const store = useStore();
const category = ref([]);
const size = ref([]);
const products = computed(() => store.getters["product/getProducts"]);
const banners = computed(() => store.getters["product/getBanners"]);
const categories = computed(() => {
  return [...new Set(products.value.map((p) => p?.category))];
});

const minPrice = computed(() =>
  Math.min(...products.value.map((p) => p.price)),
);

const maxPrice = computed(() =>
  Math.max(...products.value.map((p) => p.price)),
);

const rangeMin = ref(0);
const rangeMax = ref(0);

const priceNumberMin = ref(0);
const priceNumberMax = ref(0);

const minGap = 10;

/* ---------- INIT ---------- */

onMounted(() => {
  rangeMin.value = minPrice.value;
  rangeMax.value = maxPrice.value;

  priceNumberMin.value = parseInt(rangeMin.value);
  priceNumberMax.value = parseInt(rangeMax.value);
});

/* ---------- FILTER PRODUCTS ---------- */

const productsQuantity = (el) => {
  return (
    products.value.filter((p) => el.includes(p.category)).length ||
    products.value.filter((p) => p.sizes.some((s) => el.includes(s))).length
  );
};

const filteredProducts = computed(() => {
  let result = products.value;
  if (category.value.length) {
    result = result.filter((p) => category.value.includes(p.category));
  }

  if (rangeMin.value && rangeMax.value) {
    result = result.filter(
      (p) => p.price >= rangeMin.value && p.price <= rangeMax.value,
    );
  }

  if (size.value.length) {
    result = result.filter((p) => p.sizes.some((s) => size.value.includes(s)));
  }

  return result;
});

/* ---------- RANGE PROGRESS ---------- */

const rangeProgress = computed(() => {
  const range = maxPrice.value - minPrice.value;

  const left = ((rangeMin.value - minPrice.value) / range) * 100;

  const width = ((rangeMax.value - rangeMin.value) / range) * 100;

  return {
    left: left + "%",
    width: width + "%",
  };
});

/* ---------- RANGE PRICE FIELD ---------- */

const handlePrice = () => {
  if (priceNumberMin.value > rangeMax.value - minGap) {
    priceNumberMin.value = parseInt(rangeMax.value - minGap);
  } else if (priceNumberMin.value < minPrice.value) {
    priceNumberMin.value = parseInt(minPrice.value);
  } else if (priceNumberMax.value > maxPrice.value) {
    priceNumberMax.value = parseInt(maxPrice.value);
  }

  rangeMin.value = priceNumberMin.value;
  rangeMax.value = priceNumberMax.value;
};

/* ---------- WATCHERS ---------- */

watch(rangeMin, (val) => {
  if (val > rangeMax.value - minGap) {
    rangeMin.value = rangeMax.value - minGap;
  } else if (val < minPrice.value) {
    rangeMin.value = minPrice.value;
  }
  priceNumberMin.value = parseInt(val);
});

watch(rangeMax, (val) => {
  if (val < rangeMin.value + minGap) {
    rangeMax.value = rangeMin.value + minGap;
  } else if (val > maxPrice.value) {
    rangeMax.value = maxPrice.value;
  }
  priceNumberMax.value = parseInt(val);
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
:root {
  --main-padding: clamp(10px, 1vw, 20px);
  --main-radius: clamp(10px, 2.5vw, 25px);
  --main-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
  --main-backdrop-filter: blur(14px) saturate(180%);
  --main-backdrop-filter-color: rgba(255, 255, 255, 0.65);
  --main-border-color: 1px solid rgba(255, 255, 255, 0.18);
  --background-color-1: rgb(240, 240, 240);
  --background-color-2: rgb(255, 25, 83);
  --background-color-3: rgb(0, 180, 0);
  --background-color-4: rgb(0, 0, 0);
  --background-color-5: rgba(0, 180, 0, 0.8);
  --background-color-4: rgba(255, 25, 83, 0.7);
  --color-1: rgb(255, 255, 255);
  --color-2: rgb(0, 0, 0);
  --color-3: rgb(255, 25, 83);
  --color-4: rgba(255, 25, 83, 0.5);
  --color-5: rgb(0, 180, 0);
  --color-6: rgba(0, 180, 0, 0.5);
}
.home-view {
  font-family: "Quicksand", sans-serif;
  // font-family: "Petit Formal Script", cursive;
  .hv-main-container {
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    margin: 0 auto;
    .hv-banners-container {
      height: clamp(80px, 30vw, 450px);
      margin-bottom: clamp(4px, 2vw, 20px);
      position: relative;
      .banners-swiper {
        height: 100%;
        .banners-swiper-slide {
          .banners-swiper-slide-container {
            position: relative;
            height: 100%;
            .banner-image {
              height: 100%;
              width: 80%;
              margin-left: auto;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: clamp(10px, 2.5vw, 25px);
              }
            }
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: linear-gradient(
                to right,
                rgb(0, 0, 0) 20%,
                rgba(0, 0, 0, 0) 55%
              );
              box-shadow: inset 0 0 50px 20px rgba(0, 0, 0, 0.5);
              border-radius: clamp(10px, 2.5vw, 25px);
            }
          }
          .banner-texts {
            position: absolute;
            top: 50%;
            left: 16%;
            width: 40%;
            transform: translate(-16%, -50%);
            z-index: 1;
            .fb-paragraph {
              margin-bottom: clamp(2px, 0.8vw, 12px);
              font-weight: 600;
              font-family: "Petit Formal Script", cursive;
              color: rgb(255, 25, 83);
              font-size: clamp(6px, 2.6vw, 16px);
            }
            .sb-paragraph {
              text-transform: uppercase;
              margin-bottom: clamp(0px, 0.8vw, 12px);
              color: rgb(240, 240, 240);
              line-height: clamp(12px, 5vw, 52px);
              font-size: clamp(10px, 4.4vw, 50px);
              font-family: "Petit Formal Script", cursive;
              font-weight: 500;
              p {
                span {
                  color: rgb(0, 180, 0);
                  font-weight: 600;
                }
              }
            }
            .tb-paragraph {
              margin-bottom: clamp(4px, 0.8vw, 12px);
              color: rgba(255, 255, 255, 0.65);
              font-size: clamp(4px, 1.6vw, 12px);
            }
            .shop-link {
              text-decoration: none;
              button {
                padding: clamp(2px, 0.8vw, 9px) clamp(4px, 0.8vw, 18px);
                border-radius: clamp(2px, 1vw, 6px);
                background-color: rgb(0, 180, 0);
                color: rgb(240, 240, 240);
                font-size: clamp(6px, 2.6vw, 16px);
                letter-spacing: clamp(0px, 0.1vw, 1.2px);
                font-family: "Quicksand", sans-serif;
                display: flex;
                align-items: center;
                font-weight: 700;
                border: none;
                cursor: pointer;
                transition: 0.2s ease-in;
                &:hover {
                  background-color: rgba(0, 180, 0, 0.8);
                }
              }
            }
          }
          @media (max-width: 1199px) {
            .banner-texts {
              width: 50%;
            }
          }
        }

        .banners-swiper-slide:nth-child(2),
        .banners-swiper-slide:nth-child(3) {
          .banners-swiper-slide-container {
            .banner-image {
              transform: scaleX(-1);
            }
          }
        }
      }
      .swiper-custom-prev,
      .swiper-custom-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(0, 0, 0.1);
        font-size: 18px;
        z-index: 1;
        height: 40px;
        width: 40px;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(14px) saturate(180%);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in;
        &:hover {
          background-color: rgb(240, 240, 240);
        }
      }
      .swiper-custom-next {
        right: 0%;
      }
      .swiper-custom-prev {
        left: 0%;
      }
      &:hover {
        .swiper-custom-next,
        .swiper-custom-prev {
          opacity: 1;
          visibility: visible;
        }
        .swiper-custom-next {
          right: 2%;
        }
        .swiper-custom-prev {
          left: 2%;
        }
      }
      :deep(.swiper-pagination-bullet) {
        background-color: rgb(240, 240, 240);
      }
      :deep(.swiper-pagination-bullet-active) {
        background-color: rgba(0, 180, 0, 0.8);
      }
      @media (max-width: 992px) {
        :deep(.swiper-pagination-bullet),
        .swiper-custom-next,
        .swiper-custom-prev {
          display: none;
        }
      }
    }
    .hv-products-section {
      display: grid;
      grid-template-columns: 24% 1fr;
      gap: clamp(20px, 2.2vw, 40px);
      .hv-main-filter-container {
        .hvmfc-title,
        .hvmfr-title,
        .hvmfs-title {
          font-size: clamp(10px, 4vw, 20px);
          font-weight: 500;
          color: rgb(0, 0, 0);
          margin-bottom: clamp(4px, 1.2vw, 12px);
        }
        .hvmf-categories-container,
        .hvmf-range-container,
        .hvmf-size-container {
          margin-bottom: 30px;
          .categories-container,
          .range-container,
          .sizes-container {
            padding: 0 clamp(10px, 1.2vw, 20px);
            display: grid;
            gap: clamp(4px, 1.2vw, 12px);
            color: rgb(100, 100, 100);
            .category-container,
            .size {
              list-style: none;
              text-transform: capitalize;
              font-size: clamp(8px, 3.6vw, 16px);
              font-weight: 500;
              display: flex;
              align-items: center;
              transition: all 0.2s ease-in;
              cursor: pointer;
              &:hover {
                color: rgba(0, 180, 0, 0.8);
              }
              &.active-filter {
                color: rgba(0, 180, 0, 0.8);
              }
              input {
                margin-right: clamp(4px, 1.2vw, 12px);
                cursor: pointer;
              }
              label {
                cursor: pointer;
              }
              span {
                margin-left: auto;
              }
            }
            .range-slider {
              position: relative;
              height: clamp(2px, 1.2vw, 4px);
              background-color: rgba(0, 180, 0, 0.1);
              border-radius: 25px;
              .range-progress {
                position: absolute;
                border-radius: 25px;
                height: 100%;
                background-color: rgb(0, 180, 0);
              }
              input[type="range"] {
                position: absolute;
                width: 100%;
                appearance: none;
                pointer-events: none;
                background: none;
                height: 100%;
              }
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: clamp(10px, 1.2vw, 16px);
                height: clamp(10px, 1.2vw, 16px);
                border-radius: 50%;
                border: 2px solid rgb(0, 180, 0);
                background-color: rgb(255, 255, 255);
                pointer-events: auto;
                cursor: grab;
                &:active {
                  cursor: grabbing;
                }
              }
            }
          }
          .range-field-container {
            display: grid;
            gap: clamp(4px, 1.2vw, 12px);
            .range-field {
              display: flex;
              gap: clamp(4px, 1.2vw, 12px);
              .rf-min,
              .rf-max {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(255, 255, 255);
                border: 1px solid rgba(0, 0, 0, 0.15);
                padding: clamp(4px, 1.2vw, 10px);
                border-radius: 6px;
                font-size: clamp(4px, 3.6vw, 14px);
                cursor: pointer;
                input {
                  width: 100%;
                  height: 100%;
                  border: none;
                  outline: none;
                  background-color: transparent;
                  padding-left: clamp(1px, 1.2vw, 4px);
                  font-size: clamp(4px, 3.6vw, 14.8px);
                }
              }
            }
            .rf-filter {
              width: 100%;
              background-color: rgb(0, 180, 0);
              border: 1px solid rgb(255, 255, 255);
              border-radius: 6px;
              padding: clamp(4px, 1.2vw, 6px);
              font-size: clamp(8px, 3.6vw, 16px);
              color: rgb(240, 240, 240);
              font-family: "Quicksand", sans-serif;
              font-weight: 700;
              cursor: pointer;
              &:hover {
                background-color: rgba(0, 180, 0, 0.8);
              }
            }
          }
        }
        .hvmf-banner-container {
          padding: 0 clamp(10px, 1.2vw, 20px);
          .hvmfb-image {
            width: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
      .products-container {
        min-width: 0;
        .sort-container {
          height: 50px;
          margin-bottom: clamp(10px, 1.2vw, 20px);
          border: 1px solid red;
        }
        .products-swiper {
          .products-swiper-slide {
            border: 1px solid red;
            .products {
              .product-card {
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
                    color: rgb(240, 240, 240);
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
                      padding: clamp(2px, 1.2vw, 4px);
                      border: 0;
                      border-radius: 50%;
                      background-color: rgba(255, 255, 255, 0.4);
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
                      &:focus .wishlist-box {
                        filter: brightness(0) saturate(100%) invert(21%)
                          sepia(96%) saturate(7492%) hue-rotate(340deg)
                          brightness(101%) contrast(101%);
                      }
                      &:hover {
                        background-color: rgb(255, 255, 255);
                      }
                    }
                    .pct-view-container {
                      padding: clamp(2px, 1.2vw, 4px);
                      border-radius: 50%;
                      font-size: clamp(10px, 3.6vw, 16px);
                      background-color: rgba(255, 255, 255, 0.4);
                      backdrop-filter: blur(10px) saturate(180%);
                      text-decoration: none;
                      color: rgb(100, 100, 100);
                      transition: all 0.2s;
                      &:hover {
                        color: rgb(0, 0, 0);
                        background-color: rgb(255, 255, 255);
                      }
                    }
                  }
                  .pct-image-container {
                    height: clamp(100px, 44vw, 350px);
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
                  padding: 0 3.2%;
                  margin-top: auto;
                  .pcm-name-container {
                    font-size: clamp(8px, 3.6vw, 18px);
                    color: rgb(0, 0, 0);
                    height: clamp(10px, 4.8vw, 26px);
                    width: 100%;
                    overflow: hidden;
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
                      border: 0;
                      background-color: rgb(0, 180, 0);
                      border-radius: clamp(4px, 1.2vw, 8px);
                      color: rgb(255, 255, 255);
                      font-size: clamp(8px, 3vw, 18px);
                      cursor: pointer;
                      transition: all 0.2s;
                      .pcm-cart-box {
                        height: clamp(12px, 5vw, 24px);
                        width: clamp(12px, 5vw, 24px);
                        filter: brightness(0) invert(1);
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
      }
    }
    @media (max-width: 1024px) {
      .hv-products-section {
        grid-template-columns: 100%;
        .hv-main-filter-container {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .home-view {
    padding-bottom: clamp(30px, 13.4vw, 80px);
  }
}
</style>
