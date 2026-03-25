<template>
  <div class="hv-products-section">
    <MainFilter @products="filteredProducts = $event" />
    <div class="products-container">
      <div class="sort-container">
        <div class="mmf-box">
          <button class="fb-button" @click="showFilter">
            <svg class="fbb-icon" viewBox="0 0 24 24">
              <path
                d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                stroke="currentColor"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
          </button>
          <button class="fbc-button">Clear All</button>
        </div>
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
        <div
          class="sort-by-container"
          :class="{ 'active-sort': overlayStore.isSortActive }"
        >
          <div class="sb-text">
            <p>Sort By:</p>
            <button @click="overlayStore.toggleSort">
              <span>{{ sort }}</span>
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
        v-if="readyProducts.length"
        :key="`${readyProducts.length}-${sort}-${status}`"
        :pagination="pagination"
        :allowTouchMove="false"
        :navigation="{
          prevEl: '.psc-prev',
          nextEl: '.psc-next',
        }"
        :modules="modules"
        class="products-swiper"
      >
        <swiper-slide
          class="products-swiper-slide"
          v-for="(products, index) in readyProducts"
          :key="index"
        >
          <div class="products">
            <div class="product-card" v-for="item in products" :key="item.id">
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
                  <!-- <button class="pct-view-container">
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
                  </button> -->
                </div>
                <router-link :to="'/product/' + item.id" class="pct-image-container">
                  <img :src="item.src" :alt="item.name" loading="lazy" />
                </router-link>
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
        </swiper-slide>
      </swiper>
      <div class="empty-products" v-if="!readyProducts.length">
        <div class="ep-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M17.0404 21.9986C16.8964 21.9986 16.7524 21.9286 16.6484 21.7986L15.1604 19.9386C14.9444 19.6686 14.9444 19.2286 15.1604 18.9486C15.3764 18.6786 15.7284 18.6786 15.9524 18.9486L17.4404 20.8086C17.6564 21.0786 17.6564 21.5186 17.4404 21.7986C17.3284 21.9286 17.1844 21.9986 17.0404 21.9986Z"
                fill="#292D32"
              />

              <path
                d="M9.2 2C5.008 2 1.6 6.26 1.6 11.5C1.6 16.74 5.008 21 9.2 21C13.392 21 16.8 16.74 16.8 11.5C16.8 6.26 13.392 2 9.2 2ZM11.2 12.45H7.2C6.872 12.45 6.6 12.11 6.6 11.7C6.6 11.29 6.872 10.95 7.2 10.95H11.2C11.528 10.95 11.8 11.29 11.8 11.7C11.8 12.11 11.528 12.45 11.2 12.45Z"
                fill="#292D32"
              />
            </g>
          </svg>
        </div>
        <div class="ep-texts">
          <p>Products not found</p>
        </div>
      </div>
      <div
        class="products-swiper-custom-container"
        v-if="readyProducts.length > 1"
      >
        <div class="psc-prev">
          <i class="fas fa-arrow-left"></i>
        </div>
        <div class="psc-pagination"></div>
        <div class="psc-next">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MainFilter from "./MainFilter.vue";
import { computed, ref } from "vue";
import { useOverlayStore } from "@/store/modules/Overlay";
import { useCartStore } from "@/store/modules/cart";
import { useWishlistStore } from "@/store/modules/wishlist";
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const overlayStore = useOverlayStore();
const showFilter = overlayStore.showFilter;
const filteredProducts = ref([]);
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Pagination, Navigation, Grid } from "swiper/modules";
const modules = [Pagination, Navigation, Grid];
const pagination = {
  clickable: true,
  el: ".psc-pagination",
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
};

const status = ref("All Plants");
const sort = ref("Default Sorting");

const readyProducts = computed(() => {
  let result = [
    ...filteredProducts.value,
    ...filteredProducts.value,
    ...filteredProducts.value,
  ];
  if (status.value === "New Arrivals") {
    result = [...result].sort((a, b) => b.id - a.id);
  } else if (status.value === "Best Sellers") {
    result = [...result].sort((a, b) => b.reviews.length - a.reviews.length);
  }

  if (sort.value === "Price - Low to High") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sort.value === "Price - High to Low") {
    result = [...result].sort((a, b) => b.price - a.price);
  } else if (sort.value === "A - Z") {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort.value === "Z - A") {
    result = [...result].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort.value === "Rating - High to Low") {
    result = [...result].sort((a, b) => {
      const ratingA =
        a.reviews.reduce((total, review) => total + review.rating, 0) /
        a.reviews.length;
      const ratingB =
        b.reviews.reduce((total, review) => total + review.rating, 0) /
        b.reviews.length;
      return ratingA - ratingB;
    });
  } else if (sort.value === "Rating - Low to High") {
    result = [...result].sort((a, b) => {
      const ratingA =
        a.reviews.reduce((total, review) => total + review.rating, 0) /
        a.reviews.length;
      const ratingB =
        b.reviews.reduce((total, review) => total + review.rating, 0) /
        b.reviews.length;
      return ratingB - ratingA;
    });
  }

  const filteredResult = [];

  for (let i = 0; i < result.length; i += 12) {
    filteredResult.push(result.slice(i, i + 12));
  }

  return filteredResult;
});
</script>
<style lang="scss" scoped>
.hv-products-section {
  display: grid;
  grid-template-columns: 22% 1fr;
  padding: 0 clamp(10px, 1vw, 20px);
  width: 100%;
  gap: 16px;
  margin: clamp(20px, 10vw, 40px) auto;
  .products-container {
    min-width: 0;
    .sort-container {
      margin-bottom: clamp(10px, 4.6vw, 16px);
      display: flex;
      align-items: center;
      .mmf-box {
        display: none;
      }
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
              font-size: 16px;
              font-family: "Quicksand", sans-serif;
              font-weight: 500;
              transition: all 0.2s ease-in;
              &::after {
                content: "";
                position: absolute;
                transform: scaleX(0);
                transform-origin: right;
                border-radius: 25px;
                top: 115%;
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
          p {
            margin-right: 4px;
          }
          button {
            background-color: transparent;
            color: rgb(100, 100, 100);
            border: none;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            font-family: "Quicksand", sans-serif;
            font-weight: 500;
            transition: color 0.2s;
            i {
              font-size: clamp(4px, 3.6vw, 14px);
              color: rgb(100, 100, 100);
              padding-top: 4px;
              transition:
                color 0.2s,
                transform 0.2s;
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
          box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.1);
          border-radius: clamp(4px, 1.2vw, 10px);
          list-style: none;
          z-index: 2;
          visibility: hidden;
          opacity: 0;
          transform: translateY(-4px);
          transition:
            transform 0.2s,
            opacity 0.2s;
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
                color: rgb(0, 180, 0);
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
                align-self: flex-end;
                color: rgb(0, 180, 0);
                transform: rotate(-180deg);
              }
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
      @media (max-width: 1023px) {
        .mmf-box {
          margin-right: clamp(4px, 2.6vw, 24px);
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: center;
          .fb-button {
            border: none;
            background-color: transparent;
            margin-right: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 30px;
            padding: 5px;
            cursor: pointer;
            .fbb-icon {
              color: rgb(100, 100, 100);
            }
            &:active {
              .fbb-icon {
                color: rgb(0, 180, 0);
              }
            }
          }
          .fbc-button {
            border: none;
            font-size: 14px;
            color: rgb(100, 100, 100);
            font-weight: 500;
            font-family: "Quicksand", sans-serif;
            height: 100%;
            &:active {
              color: rgb(255, 25, 83);
            }
          }
        }
      }
      @media (max-width: 575px) {
        .sort-status {
          display: none;
        }
      }
    }
    .products-swiper {
      margin-bottom: clamp(20px, 10vw, 40px);
      .products-swiper-slide {
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
                  transition:
                    color 0.2s,
                    background-color 0.2s;
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
      }
    }
    .empty-products {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 10px;
      padding: 30px;
      gap: 20px;
      .ep-icon {
        width: 100px;
        height: 100px;
        padding: 10px;
        border-radius: 50%;
        background-color: rgba(0, 180, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ep-texts {
        text-align: center;
        p {
          font-weight: 700;
          margin-bottom: 10px;
        }
      }
    }
    .products-swiper-custom-container {
      display: flex;
      align-items: center;
      justify-content: end;
      .psc-prev,
      .psc-next {
        display: inline-block;
        font-size: 20px;
        color: rgb(100, 100, 100);
        transition: color 0.2s;
        &:hover {
          color: rgb(0, 180, 0);
        }
      }
      .psc-pagination {
        display: flex;
        margin: 0 10px;
        width: auto !important;
        :deep(.swiper-pagination-bullet) {
          background-color: rgba(0, 180, 0, 0.1);
          height: 34px;
          width: 34px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 1;
          color: rgb(100, 100, 100);
        }
        :deep(.swiper-pagination-bullet-active) {
          background-color: rgb(0, 180, 0);
          color: rgb(245, 242, 235);
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .hv-products-section {
    padding: 0 clamp(10px, 1vw, 20px);
    grid-template-columns: 1fr;
    position: relative;
    .products-container {
      .empty-products {
        .ep-icon {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>
