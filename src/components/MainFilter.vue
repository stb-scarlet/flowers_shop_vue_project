<template>
  <div class="main-filter-container" :class="{'mf-show': filterStore.isFilterActive}">
    <div class="mf-header">
      <div class="mfh-title">
        <h3>Filter</h3>
      </div>
      <button class="mfh-close-button" @click="hideFilter">
        <svg
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="cb-icon"
        >
          <path
            d="M6 4.5858L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.5858 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.5858Z"
          />
        </svg>
      </button>
    </div>
    <div class="mf-categories-container">
      <div class="mfc-title">
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
    <div class="mf-range-container">
      <div class="mfr-title">
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
    <div class="mf-size-container">
      <div class="mfs-title">
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
    <div class="mf-banner-container">
      <div class="mfb-image">
        <img src="/banner-images/4.webp" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref, watch, onMounted, provide, inject } from "vue";
import { useFilterStore } from "@/store/modules/Filter";
const emit = defineEmits(["products"]);
const filterStore = useFilterStore();
const hideFilter = filterStore.hideFilter;
const store = useStore();
const category = ref([]);
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

watch(
  filteredProducts,
  (val) => {
    emit("products", val);
  },
  { immediate: true },
);


</script>
<style lang="scss" scoped>
.main-filter-container {
  .mf-header {
    display: none;
  }
  .mfc-title,
  .mfr-title,
  .mfs-title {
    font-size: 18px;
    font-weight: 500;
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
  }
  .mf-categories-container,
  .mf-range-container,
  .mf-size-container {
    margin-bottom: 30px;
    .categories-container,
    .range-container,
    .sizes-container {
      padding: 0 10px;
      display: grid;
      gap: 10px;
      color: rgb(100, 100, 100);
      .category-container,
      .size {
        list-style: none;
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        transition: color 0.2s;
        cursor: pointer;
        &:hover {
          color: rgba(0, 180, 0, 0.5);
        }
        &.active-filter {
          color: rgb(0, 180, 0);
        }
        input {
          margin-right: 10px;
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
        height: 4px;
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
          width: 16px;
          height: 16px;
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
      .range-field {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        .rf-min,
        .rf-max {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(255, 255, 255);
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 10px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            padding-left: 4px;
            font-size: 14.8px;
          }
        }
      }
      .rf-filter {
        width: 100%;
        background-color: rgb(0, 180, 0);
        border: 1px solid rgb(255, 255, 255);
        border-radius: 6px;
        padding: 6px;
        font-size: 16px;
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
  .mf-banner-container {
    padding-right: clamp(10px, 1vw, 20px);
    .mfb-image {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 1023px) {
  .main-filter-container {
    position: absolute;
    z-index: 60;
    background-color: rgb(245, 242, 235);
    left: 0;
    top: 0;
    width: 300px;
    height: calc(100vh - 100px);
    transform: translateX(-100%);
    overflow: scroll;
    padding: 0 clamp(10px, 1vw, 20px);
    transition: transform 0.2s ease-out;
    .mf-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 10px 10px 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .mfh-title {
        font-size: 20px;
        font-family: "Quicksand", sans-serif;
        text-transform: uppercase;
        color: rgb(0, 180, 0);
      }
      .mfh-close-button {
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100, 100, 100);
        .cb-icon {
          height: 16px;
          width: 16px;
        }
        &:active {
          color: rgb(255, 25, 83);
        }
      }
    }
    &.mf-show {
      transform: translateX(0);
    }
    .mf-banner-container {
      display: none;
    }
  }
}
@media (max-width: 424px) {
  .main-filter-container {
    width: 100%;
  }
}
</style>