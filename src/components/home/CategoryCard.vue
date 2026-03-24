<template>
  <div class="categories-card-container">
    <div class="cc-title">
      <p>Popular Categories</p>
    </div>
    <swiper
      class="categories-swiper"
      :modules="modules"
      :slides-per-view="4"
      :breakpoints="{
        0: {
          spaceBetween: 12,
          slidesPerView: 1.2,
        },
        576: {
          spaceBetween: 16,
          slidesPerView: 1.8,
        },
        768: {
          spaceBetween: 14,
          slidesPerView: 2.2,
        },
        992: {
          spaceBetween: 14,
          slidesPerView: 3,
        },
        1280: {
          spaceBetween: 16,
          slidesPerView: 4,
        },
      }"
    >
      <swiper-slide
        class="categories-swiper-slide"
        v-for="item in categories"
        :key="item.id"
      >
        <div class="category-card">
          <div class="cc-background-image">
            <img :src="item.src" alt="" />
          </div>
          <div class="cc-texts">
            <p>{{ item.name }}</p>
            <router-link to="/shop" class="cc-see-all">See All</router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
const modules = [Pagination, FreeMode];
const categories = [
  {
    id: 1,
    src: "/category-images/1.avif",
    name: "Garden Plants",
  },
  {
    id: 2,
    src: "/category-images/2.avif",
    name: "House Plants",
  },
  {
    id: 3,
    src: "/category-images/3.avif",
    name: "Seeds",
  },
  {
    id: 4,
    src: "/category-images/4.avif",
    name: "Pots",
  },
];
</script>
<style lang="scss" scoped>
.categories-card-container {
  margin-bottom: clamp(30px, 7vw, 70px);
  .cc-title {
    font-family: "Petit Formal Script", cursive;
    color: rgb(0, 180, 0);
    font-size: clamp(18px, 4.8vw, 28px);
    font-weight: 700;
    margin-bottom: clamp(14px, 1.2vw, 20px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .categories-swiper {
    .categories-swiper-slide {
      .category-card {
        position: relative;
        overflow: hidden;
        height: clamp(300px, 100vw, 500px);
        .cc-background-image {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          z-index: -1;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
        .cc-texts {
          font-size: clamp(28px, 8vw, 40px);
          font-family: "Playfair Display", serif;
          position: relative;
          color: rgb(245, 242, 235);
          font-weight: 700;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          padding: clamp(20px, 100vw, 30px) clamp(14px, 5vw, 26px)
            clamp(14px, 5vw, 26px);
          .cc-see-all {
            background-color: rgba(0, 0, 0, 0.03);
            text-decoration: none;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border: 1px solid rgb(245, 242, 235);
            font-family: "Quicksand", sans-serif;
            padding: clamp(4px, 2vw, 10px) clamp(16px, 2.4vw, 20px);
            border-radius: 25px;
            font-size: clamp(14px, 2vw, 16px);
            color: rgb(245, 242, 235);
            transition: background-color 0.2s, border 0.2s;
            font-weight: 600;
            cursor: pointer;
            &:hover {
              background-color: rgb(255, 25, 83);
              border: 1px solid rgb(255, 25, 83);
            }
          }
          &::after {
            content: "";
            z-index: -1;
            position: absolute;
            inset: 0;
          }
          &:hover::after {
            background-color: rgba(0, 180, 0, 0.1);
          }
        }
      }
    }
  }
}
</style>
