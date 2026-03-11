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
            prevEl: '.banner-swiper-prev',
            nextEl: '.banner-swiper-next',
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
        <div class="banner-swiper-prev">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="banner-swiper-next">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <TopList />
      <CategoriesCard />
      <div class="hv-products-banner-container">
        <div class="product-banner">
          <div class="pb-texts">
            <p>Summer Cactus & Succulents</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button>
              Find More <span><i class="fas fa-arrow-right"></i></span>
            </button>
          </div>
        </div>
        <div class="product-banner">
          <div class="pb-texts">
            <p>Styling Trends & Much More</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button>
              Find More <span><i class="fas fa-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </div>
      <div class="hv-blogs-container">
        <div class="bc-title">
          <h2>Our Blog Posts</h2>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
        </div>
        <div class="posts-card-container">
          <div class="post-card" v-for="item in blogs" :key="item.id">
            <div class="pc-image">
              <img :src="item.src" alt="" />
            </div>
            <div class="pc-main">
              <p>{{ item.firstParagraph }}</p>
              <p>{{ item.secondParagraph }}</p>
              <p>{{ item.thirdParagraph }}</p>
              <button>
                Read More<span><i class="fas fa-arrow-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CategoriesCard from "@/components/CategoriesCard.vue";
import TopList from "@/components/TopList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const modules = [Pagination, Navigation];

const store = useStore();
const banners = computed(() => store.getters["product/getBanners"]);
const blogs = computed(() => store.getters["product/getBlogs"]);
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
      height: clamp(130px, 40vw, 450px);
      margin-bottom: clamp(30px, 7vw, 70px);
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
            font-weight: 700;
            .fb-paragraph {
              margin-bottom: clamp(0px, 0.8vw, 12px);
              font-weight: 600;
              color: rgb(245, 242, 235);
              font-size: clamp(6px, 2.6vw, 16px);
            }
            .sb-paragraph {
              text-transform: uppercase;
              margin-bottom: clamp(0px, 0.8vw, 12px);
              color: rgb(245, 242, 235);
              line-height: clamp(12px, 5vw, 52px);
              font-size: clamp(10px, 4vw, 50px);
              p {
                span {
                  color: rgb(0, 180, 0);
                  font-family: "Petit Formal Script", cursive;
                }
              }
            }
            .tb-paragraph {
              margin-bottom: clamp(4px, 1vw, 12px);
              color: rgba(255, 255, 255, 0.65);
              font-size: clamp(4px, 1.6vw, 12px);
            }
            .shop-link {
              text-decoration: none;
              button {
                background-color: rgba(200, 200, 200, 0.15);
                backdrop-filter: blur(4px) saturate(180%);
                -webkit-backdrop-filter: blur(10px) saturate(180%);
                border: 1px solid rgb(245, 242, 235);
                font-family: "Quicksand", sans-serif;
                padding: clamp(4px, 1vw, 10px) clamp(10px, 1vw, 20px);
                font-size: clamp(8px, 1.8vw, 16px);
                border-radius: 25px;
                color: rgb(245, 242, 235);
                transition: all 0.2s;
                cursor: pointer;
                &:hover {
                  background-color: rgb(255, 25, 83);
                  border: 1px solid rgb(255, 25, 83);
                }
                i {
                  font-size: clamp(8px, 2vw, 14px);
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
        :deep(.swiper-pagination-bullet) {
          background-color: rgb(240, 240, 240);
        }
        :deep(.swiper-pagination-bullet-active) {
          background-color: rgba(0, 180, 0, 0.8);
        }
      }
      .banner-swiper-prev,
      .banner-swiper-next {
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
          background-color: rgb(245, 242, 235);
        }
      }
      .banner-swiper-next {
        right: 0%;
      }
      .banner-swiper-prev {
        left: 0%;
      }
      &:hover {
        .banner-swiper-next,
        .banner-swiper-prev {
          opacity: 1;
          visibility: visible;
        }
        .banner-swiper-next {
          right: 2%;
        }
        .banner-swiper-prev {
          left: 2%;
        }
      }
      @media (max-width: 992px) {
        :deep(.swiper-pagination-bullet),
        .banner-swiper-next,
        .banner-swiper-prev {
          display: none;
        }
      }
    }
    .hv-blogs-container {
      .bc-title {
        text-align: center;
        margin-bottom: clamp(10px, 2vw, 30px);
        h2 {
          font-size: clamp(12px, 4vw, 38px);
          color: rgb(0, 0, 0);
          font-weight: 700;
          line-height: clamp(10px, 4.8vw, 38px);
          margin-bottom: clamp(2px, 1vw, 6px);
        }
        p {
          font-size: clamp(8px, 3vw, 20px);
          line-height: clamp(8px, 4vw, 26px);
          color: rgb(100, 100, 100);
        }
      }
      .posts-card-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(8px, 2vw, 40px);
        .post-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .pc-image {
            width: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-top-left-radius: clamp(4px, 2.5vw, 10px);
              border-top-right-radius: clamp(4px, 2.5vw, 10px);
            }
            &:hover {
              position: relative;
              &::after {
                content: "";
                inset: 0;
                position: absolute;
                background-color: rgba(0, 180, 0, 0.1);
              }
            }
          }
          .pc-main {
            padding: 3%;
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom-left-radius: clamp(4px, 2.5vw, 10px);
            border-bottom-right-radius: clamp(4px, 2.5vw, 10px);
            height: clamp(120px, 20vw, 178px);
            display: flex;
            justify-content: start;
            flex-direction: column;
            align-items: flex-start;
            p:nth-child(1) {
              font-size: clamp(8px, 2vw, 16px);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 100%;
              color: rgb(0, 180, 0);
              margin-bottom: clamp(2px, 1vw, 4px);
            }
            p:nth-child(2) {
              font-size: clamp(12px, 4vw, 20px);
              font-weight: 600;
              margin-bottom: clamp(2px, 1vw, 4px);
            }
            p:nth-child(3) {
              font-size: clamp(8px, 2vw, 16px);
              color: rgb(100, 100, 100);
            }
            button {
              background-color: transparent;
              margin-top: auto;
              border: none;
              font-size: clamp(8px, 2vw, 16px);
              color: rgb(0, 0, 0);
              transition: all 0.2s;
              cursor: pointer;
              i {
                margin-left: 4px;
                font-size: clamp(6px, 2vw, 14px);
              }
              &:hover {
                color: rgb(0, 180, 0);
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
      .hv-blogs-container {
        .posts-card-container {
          grid-template-columns: repeat(3, 1fr);
          .post-card {
            .pc-main {
              height: 178px;
            }
          }
        }
      }
    }
    @media (min-width: 769px) {
      .hv-products-banner-container {
        display: flex;
        margin-bottom: clamp(50px, 7vw, 70px);
        gap: 24px;
        .product-banner {
          width: 50%;
          height: clamp(100px, 24vw, 350px);
          border-radius: clamp(10px, 2.5vw, 16px);
          overflow: hidden;
          display: flex;
          .pb-texts {
            width: 60%;
            margin-left: auto;
            padding-right: clamp(10px, 2vw, 20px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
            p:nth-child(1) {
              font-size: clamp(12px, 1.8vw, 30px);
              color: rgb(245, 242, 235);
              font-weight: 700;
              line-height: clamp(20px, 2.8vw, 32px);
              margin-bottom: clamp(2px, 0.2vw, 10px);
            }
            p:nth-child(2) {
              font-size: clamp(8px, 1.6vw, 20px);
              line-height: clamp(10px, 2vw, 26px);
              margin-bottom: clamp(4px, 1vw, 10px);
              color: rgb(245, 242, 235);
            }
            button {
              background-color: rgba(200, 200, 200, 0.15);
              backdrop-filter: blur(4px) saturate(180%);
              -webkit-backdrop-filter: blur(10px) saturate(180%);
              border: 1px solid rgb(245, 242, 235);
              font-family: "Quicksand", sans-serif;
              padding: clamp(8px, 1vw, 10px) clamp(10px, 1vw, 20px);
              border-radius: 25px;
              font-size: clamp(10px, 2vw, 16px);
              color: rgb(245, 242, 235);
              transition: all 0.2s;
              cursor: pointer;
              &:hover {
                background-color: rgb(255, 25, 83);
                border: 1px solid rgb(255, 25, 83);
              }
              i {
                font-size: clamp(8px, 2vw, 14px);
              }
            }
          }
        }
        .product-banner:nth-child(1) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url(/banner-images/5.avif);
            z-index: -1;
          }
        }
        .product-banner:nth-child(2) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url(/banner-images/6.avif);
            z-index: -1;
          }
        }
      }
    }
    @media (max-width: 768px) {
      .hv-products-banner-container {
        display: flex;
        flex-direction: column;
        margin-bottom: clamp(20px, 8vw, 70px);
        gap: 14px;
        .product-banner {
          width: 100%;
          height: clamp(100px, 40vw, 300px);
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
          border-radius: clamp(10px, 2.5vw, 16px);
          overflow: hidden;
          display: flex;
          .pb-texts {
            width: 60%;
            margin-left: auto;
            padding-right: clamp(4px, 2.4vw, 30px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
            p:nth-child(1) {
              font-size: clamp(12px, 4vw, 38px);
              color: rgb(245, 242, 235);
              font-weight: 700;
              line-height: clamp(10px, 4.8vw, 38px);
              margin-bottom: clamp(2px, 1vw, 10px);
            }
            p:nth-child(2) {
              font-size: clamp(8px, 3vw, 20px);
              line-height: clamp(8px, 4vw, 26px);
              margin-bottom: clamp(4px, 2vw, 20px);
              color: rgb(245, 242, 235);
            }
            button {
              background-color: rgba(200, 200, 200, 0.15);
              backdrop-filter: blur(4px) saturate(180%);
              -webkit-backdrop-filter: blur(10px) saturate(180%);
              border: 1px solid rgb(245, 242, 235);
              font-family: "Quicksand", sans-serif;
              padding: clamp(4px, 1vw, 10px) clamp(8px, 1vw, 20px);
              font-size: clamp(8px, 2vw, 16px);
              border-radius: 25px;
              color: rgb(245, 242, 235);
              transition: all 0.2s;
              cursor: pointer;
              &:hover {
                background-color: rgb(255, 25, 83);
                border: 1px solid rgb(255, 25, 83);
              }
              i {
                font-size: clamp(8px, 2vw, 14px);
              }
            }
          }
        }
        .product-banner:nth-child(1) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url(/banner-images/5.avif);
            z-index: -1;
          }
        }
        .product-banner:nth-child(2) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url(/banner-images/6.avif);
            z-index: -1;
          }
          .pb-texts {
            padding-left: clamp(4px, 2.4vw, 30px);
            padding-right: 0;
            margin-right: auto;
            margin-left: 0;
            display: flex;
            text-align: start;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      }
      .hv-blogs-container {
        .posts-card-container {
          grid-template-columns: repeat(2, 1fr);
          .post-card {
            .pc-main {
              height: clamp(74px, 24vw, 150px);
              p:nth-child(2) {
                font-size: clamp(8px, 3vw, 20px);
              }
              p:nth-child(1),
              p:nth-child(3),
              button {
                font-size: clamp(6px, 2vw, 16px);
                i {
                  font-size: clamp(4px, 2vw, 14px);
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
  .home-view {
    padding-bottom: clamp(30px, 13.4vw, 80px);
    .hv-main-container {
      padding: 0 clamp(2px, 2vw, 20px);
    }
  }
}
</style>