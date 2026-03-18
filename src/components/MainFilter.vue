<template>
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
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref, watch, onMounted } from "vue";
const emit = defineEmits(["products"]);
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

watch(filteredProducts, (val) => {
	emit("products", val);
}, {immediate: true})
</script>
<style lang="scss" scoped>
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
</style>