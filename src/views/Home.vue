<template>
  <div class="home-banner-container">
    <div class="hb-image">
      <img src="/home-banner.avif" alt="" />
    </div>
    <div class="hb-texts">
      <p>Grow green,</p>
      <p>live happy</p>
      <button>Shop All Our Plants</button>
    </div>
  </div>
  <div class="home-view">
    <div class="hv-main-container">
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

const store = useStore();
const blogs = computed(() => store.getters["product/getBlogs"]);
</script>
<style lang="scss" scoped>
// :root {
// --main-padding: clamp(10px, 1vw, 20px);
// --main-radius: clamp(10px, 2.5vw, 25px);
//   --main-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.15);
//   --main-backdrop-filter: blur(14px);
//   --main-backdrop-filter-color: rgba(255, 255, 255, 0.65);
//   --main-border-color: 1px solid rgba(255, 255, 255, 0.18);
//   --background-color-1: rgb(240, 240, 240);
//   --background-color-2: rgb(255, 25, 83);
//   --background-color-3: rgb(0, 180, 0);
//   --background-color-4: rgb(0, 0, 0);
//   --background-color-5: rgba(0, 180, 0, 0.8);
//   --background-color-4: rgba(255, 25, 83, 0.7);
//   --color-1: rgb(255, 255, 255);
//   --color-2: rgb(0, 0, 0);
//   --color-3: rgb(255, 25, 83);
//   --color-4: rgba(255, 25, 83, 0.5);
//   --color-5: rgb(0, 180, 0);
//   --color-6: rgba(0, 180, 0, 0.5);
// }
.home-banner-container {
  height: clamp(500px, 80vw, 750px);
  position: relative;
  margin-bottom: clamp(30px, 4vw, 70px);
  .hb-image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .hb-texts {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px) 40px clamp(10px, 1vw, 20px);
    P {
      color: rgb(245, 242, 235);
      font-size: clamp(46px, 8vw, 70px);
      font-weight: 700;
      font-family: "Playfair Display", serif;
    }
    p:nth-child(2) {
      font-family: "Petit Formal Script", cursive;
      margin-bottom: clamp(10px, 1vw, 20px);
    }
    button {
      background-color: rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(4px);
      border: 1px solid rgb(245, 242, 235);
      font-family: "Quicksand", sans-serif;
      padding: clamp(4px, 2vw, 10px) clamp(16px, 2.4vw, 20px);
      border-radius: 25px;
      font-size: clamp(14px, 2vw, 16px);
      color: rgb(245, 242, 235);
      transition:
        background-color 0.2s,
        border-color 0.2s;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: rgb(255, 25, 83);
        border: 1px solid rgb(255, 25, 83);
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.home-view {
  font-family: "Quicksand", sans-serif;
  // font-family: "Petit Formal Script", cursive;
  // font-family: "Playfair Display", serif;
  .hv-main-container {
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    margin: 0 auto;
    .hv-blogs-container {
      margin-bottom: clamp(30px, 4vw, 70px);
      .bc-title {
        margin-bottom: clamp(10px, 2vw, 30px);
        text-align: center;
        h2 {
          font-size: clamp(18px, 4.8vw, 28px);
          color: rgb(0, 180, 0);
          font-family: "Petit Formal Script", cursive;
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
        gap: clamp(8px, 2.8vw, 40px);
        .post-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .pc-image {
            width: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-top-left-radius: clamp(4px, 2.5vw, 10px);
              border-top-right-radius: clamp(4px, 2.5vw, 10px);
            }
            &::after {
              content: "";
              inset: 0;
              position: absolute;
              border-top-left-radius: clamp(4px, 2.5vw, 10px);
              border-top-right-radius: clamp(4px, 2.5vw, 10px);
              transition: background-color 0.2s;
              z-index: 2000;
            }
            &:hover::after {
              background-color: rgba(0, 180, 0, 0.1);
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
              color: rgb(100, 100, 100);
              transition: color 0.2s;
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
    @media (max-width: 1023px) {
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
      .hv-products-banner-container {
        display: flex;
        flex-direction: column;
        margin-bottom: clamp(20px, 8vw, 70px);
        gap: 14px;
        .product-banner {
          width: 100%;
          height: 340px;
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
              font-size: 38px;
              color: rgb(245, 242, 235);
              font-weight: 700;
              line-height: clamp(24px, 5vw, 38px);
              margin-bottom: 8px;
            }
            p:nth-child(2) {
              font-size: 20px;
              line-height: clamp(8px, 4vw, 26px);
              margin-bottom: 20px;
              color: rgb(245, 242, 235);
            }
            button {
              background-color: rgba(0, 0, 0, 0.03);
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
    }
    @media (min-width: 1024px) {
      .hv-products-banner-container {
        display: flex;
        margin-bottom: clamp(50px, 7vw, 70px);
        gap: 20px;
        .product-banner {
          width: 50%;
          height: clamp(300px, 28vw, 350px);
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          .pb-texts {
            width: 440px;
            margin-left: auto;
            padding-right: clamp(10px, 2vw, 20px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: right;
            p:nth-child(1) {
              font-size: 30px;
              width: 238px;
              color: rgb(245, 242, 235);
              font-weight: 700;
              line-height: clamp(20px, 2.8vw, 32px);
              margin-bottom: 10px;
            }
            p:nth-child(2) {
              font-size: 20px;
              line-height: clamp(10px, 2vw, 26px);
              margin-bottom: 20px;
              color: rgb(245, 242, 235);
            }
            button {
              background-color: rgba(200, 200, 200, 0.15);
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgb(245, 242, 235);
              font-family: "Quicksand", sans-serif;
              padding: clamp(8px, 1vw, 10px) clamp(10px, 1vw, 20px);
              border-radius: 25px;
              font-size: clamp(10px, 2vw, 16px);
              color: rgb(245, 242, 235);
              transition: background-color 0.2s, border 0.2s;
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
    @media (max-width: 767px) {
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
      .hv-products-banner-container {
        .product-banner {
          height: clamp(170px, 60vw, 340px);
          .pb-texts {
            width: 80%;
            p:nth-child(1) {
              font-size: clamp(20px, 6vw, 38px);
            }
            p:nth-child(2) {
              font-size: clamp(14px, 4vw, 20px);
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
  }
}
</style>