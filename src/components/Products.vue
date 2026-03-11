<template>
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
              step="1"
              v-model.number="rangeMin"
            />
            <input
              type="range"
              :min="minPrice"
              :max="maxPrice"
              step="1"
              v-model.number="rangeMax"
            />
          </div>
          <form class="range-field-container" @submit.prevent="handlePrice">
            <div class="range-field">
              <label for="minNumber" class="rf-min">
                <p>Min:</p>
                <input
                  type="number"
                  id="minNumber"
                  v-model.number="priceNumberMin"
                />
              </label>
              <label for="maxNumber" class="rf-max">
                <p>Max:</p>
                <input
                  type="number"
                  id="maxNumber"
                  v-model.number="priceNumberMax"
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
          <img src="/banner-images/4.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="products-container">
      <div class="sort-container">
        <div class="sort-status">
          <ul class="ss-wrap">
            <li
              class="ssw-item"
              v-for="item in ['All Plants', 'New Arrivals', 'Best Sellers']"
              :key="item"
              :class="{ 'active-status': status === item }"
            >
              <button @click="status = item">
                {{ item }}
              </button>
            </li>
          </ul>
        </div>
        <div class="sort-by-container" :class="{ 'active-sort': toggleSort }">
          <div class="sb-text">
            <button @click="toggleSort = !toggleSort">
              Default Sorting
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
          <ul class="sb-wrap">
            <li
              class="sbw-item"
              v-for="item in [
                'Default Sorting',
                'A - Z',
                'Z - A',
                'Price - High to Low',
                'Price - Low to High',
                'Rating - High to Low',
                'Rating - Low to High',
              ]"
              :key="item"
              :class="{ 'active-sort': sort === item }"
            >
              <button @click="sort = item">{{ item }}</button>
            </li>
          </ul>
        </div>
      </div>
      <swiper
        :breakpoints="{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 14,
          },
        }"
        :grid="{ rows: 3, fill: 'row' }"
        :pagination="pagination"
        :allowTouchMove="false"
        :slides-per-group="4"
        :navigation="{
          prevEl: '.products-swiper-prev',
          nextEl: '.products-swiper-next',
        }"
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
      <div class="products-swiper-container">
        <div class="products-swiper-prev">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="products-swiper-pagination"></div>
        <div class="products-swiper-next">
          <i class="fas fa-angle-right"></i>
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

const modules = [Pagination, Navigation, Grid];
const maxVisible = ref(4);

const pagination = {
  clickable: true,
  dynamicBullets: true,
  el: ".products-swiper-pagination",
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
};
const store = useStore();
const category = ref([]);
const toggleSort = ref(false);
const status = ref("All Plants");
const sort = ref("Default Sorting");
const size = ref([]);
const products = computed(() => store.getters["product/getProducts"]);
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

const minGap = 100;

/* ---------- INIT ---------- */

onMounted(() => {
  rangeMin.value = minPrice.value;
  rangeMax.value = maxPrice.value;

  priceNumberMin.value = parseInt(rangeMin.value);
  priceNumberMax.value = parseInt(rangeMax.value);
});

/* ---------- FILTER PRODUCTS ---------- */

const productsQuantity = (el) => {
  return products.value.filter((p) => p.category === el || p.sizes.includes(el))
    .length;
};

const filteredProducts = computed(() => {
  let result = [...products.value];
  if (category.value.length) {
    result = result.filter((p) => category.value.includes(p.category));
  }

  if (rangeMin.value && rangeMax.value) {
    result = result.filter(
      (p) =>
        p.price >= Number(rangeMin.value) && p.price <= Number(rangeMax.value),
    );
  }

  if (size.value.length) {
    result = result.filter((p) => p.sizes.some((s) => size.value.includes(s)));
  }

  if (status.value === "New Arrivals") {
    result.sort((a, b) => b.id - a.id);
  } else if (status.value === "Best Sellers") {
    result.sort((a, b) => b.reviews.length - a.reviews.length);
  }

  if (sort.value === "Price - Low to High") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort.value === "Price - High to Low") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort.value === "A - Z") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort.value === "Z - A") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort.value === "Rating - High to Low") {
    result.sort((a, b) => {
      const ratingA =
        a.reviews.reduce((total, review) => total + review.rating, 0) /
        a.reviews.length;
      const ratingB =
        b.reviews.reduce((total, review) => total + review.rating, 0) /
        b.reviews.length;
      return ratingA - ratingB;
    });
  } else if (sort.value === "Rating - Low to High") {
    result.sort((a, b) => {
      const ratingA =
        a.reviews.reduce((total, review) => total + review.rating, 0) /
        a.reviews.length;
      const ratingB =
        b.reviews.reduce((total, review) => total + review.rating, 0) /
        b.reviews.length;
      return ratingB - ratingA;
    });
  }

  return result;
});

/* ---------- RANGE PROGRESS ---------- */

const rangeProgress = computed(() => {
  ``;
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
.hv-products-section {
  display: grid;
  grid-template-columns: 22% 1fr;
  gap: 16px;
  margin-bottom: clamp(20px, 10vw, 40px);
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
            color: rgba(0, 180, 0, 0.5);
          }
          &.active-filter {
            color: rgb(0, 180, 0);
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
          color: rgb(245, 242, 235);
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
      padding-right: clamp(10px, 1.2vw, 20px);
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
      margin-bottom: clamp(10px, 4.6vw, 16px);
      display: flex;
      align-items: center;
      .sort-status,
      .sort-by-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sb-text,
        .ss-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          .ssw-item {
            margin-right: clamp(4px, 2.6vw, 24px);
            button {
              position: relative;
              background-color: transparent;
              color: rgb(100, 100, 100);
              border: none;
              white-space: nowrap;
              cursor: pointer;
              font-size: clamp(8px, 3.6vw, 16px);
              font-family: "Quicksand", sans-serif;
              font-weight: 500;
              padding-bottom: 4px;
              transition: all 0.2s ease-in;
              &::after {
                content: "";
                position: absolute;
                transform: scaleX(0);
                transform-origin: right;
                border-radius: 25px;
                top: 100%;
                width: 100%;
                height: 2px;
                background-color: rgba(0, 180, 0, 0.5);
                left: 0;
                transition: transform 0.3s ease;
              }
              &:hover,
              &:hover::after {
                color: rgba(0, 180, 0, 0.5);
                transform: scaleX(1);
                transform-origin: left;
              }
            }
            &.active-status button {
              color: rgb(0, 180, 0);
              &::after {
                transform: scaleX(1);
                transform-origin: left;
              }
            }
          }
        }
        .sb-text {
          button {
            background-color: transparent;
            color: rgb(100, 100, 100);
            border: none;
            cursor: pointer;
            font-size: clamp(8px, 3.6vw, 16px);
            font-family: "Quicksand", sans-serif;
            font-weight: 500;
            transition: all 0.2s ease-in;
            i {
              font-size: clamp(4px, 3.6vw, 14px);
              color: rgb(100, 100, 100);
              padding-top: 2px;
              transition: all 0.2s;
            }
            &:hover {
              color: rgb(0, 180, 0);
              i {
                color: rgb(0, 180, 0);
              }
            }
          }
        }
        .sb-wrap {
          position: absolute;
          padding: clamp(4px, 1.2vw, 10px) clamp(6px, 1.2vw, 16px);
          min-width: 0;
          top: 100%;
          right: 0;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.2);
          border-radius: clamp(4px, 1.2vw, 10px);
          list-style: none;
          z-index: 2;
          visibility: hidden;
          opacity: 0;
          transform: translateY(-4px);
          transition: all 0.2s;
          .sbw-item {
            button {
              background-color: transparent;
              color: rgb(100, 100, 100);
              font-family: "Quicksand", sans-serif;
              font-weight: 500;
              font-size: clamp(8px, 3.6vw, 16px);
              width: 100%;
              text-align: left;
              padding: clamp(0px, 0.8vw, 4px) 0;
              border: none;
              white-space: nowrap;
              transition: all 0.2s ease-in;
              cursor: pointer;
              &:hover {
                color: rgba(0, 180, 0, 0.5);
              }
            }
            &.active-sort button {
              color: rgb(0, 180, 0);
            }
          }
        }
        &.active-sort {
          .sb-text {
            button {
              color: rgb(0, 180, 0);
              i {
                color: rgb(0, 180, 0);
              }
            }
            i {
              padding-bottom: 2px;
              transform: rotate(-180deg);
            }
          }
          .sb-wrap {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
      .sort-by-container {
        margin-left: auto;
      }
    }
    .products-swiper {
      padding: 0 6px;
      .products-swiper-slide {
        margin-bottom: clamp(8px, 4vw, 24px);
        .products {
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
                    filter: brightness(0) saturate(100%) invert(21%) sepia(96%)
                      saturate(7492%) hue-rotate(340deg) brightness(101%)
                      contrast(101%);
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
        &:hover .products .product-card {
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.2);
        }
      }
    }
    .products-swiper-container {
      display: flex;
      align-items: center;
      justify-content: end;
      .products-swiper-prev,
      .products-swiper-next {
        display: inline-block;
        font-size: clamp(10px, 4vw, 24px);
        transition: all 0.2s ease-in;
        &:hover {
          color: rgb(0, 180, 0);
        }
      }
      .products-swiper-pagination {
        display: flex;
        transform: translateX(0);
        width: auto !important;
        .swiper-pagination-bullet {
          position: static;
          background-color: rgb(100, 100, 100);
          height: clamp(20px, 6vw, 34px);
          width: clamp(20px, 6vw, 34px);
          border-radius: 50%;
          opacity: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(245, 242, 235);
          border-radius: 6px;
          font-size: clamp(8px, 3vw, 16px);
          &.swiper-pagination-bullet-active {
            background-color: rgb(0, 180, 0);
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
</style>
