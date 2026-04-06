<template>
  <div class="hv-blogs-container">
    <div class="bc-title">
      <h2>{{ $t("blog.title") }}</h2>
      <p>
        {{ $t("blog.description") }}
      </p>
    </div>
    <div class="posts-card-container">
      <div class="post-card" v-for="item in blogs" :key="item.id">
        <div class="pc-image">
          <img :src="item.src" alt="" />
        </div>
        <div class="pc-main">
          <p>{{ $t(item.firstParagraph) }}</p>
          <p>{{ $t(item.secondParagraph) }}</p>
          <p>{{ $t(item.thirdParagraph) }}</p>
          <button>
            {{ $t("blog.button")
            }}<span><i class="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBlogStore } from "@/store/modules/blog";
const blogStore = useBlogStore();
const blogs = blogStore.blogs;
</script>
<style lang="scss" scoped>
.hv-blogs-container {
  margin-bottom: clamp(30px, 4vw, 70px);
  .bc-title {
    margin-bottom: clamp(14px, 4.8vw, 40px);
    text-align: center;
    h2 {
      font-size: clamp(18px, 4.8vw, 28px);
      color: rgb(0, 180, 0);
      font-family: "Petit Formal Script", cursive;
      font-weight: 700;
      margin-bottom: 2px;
    }
    p {
      font-size: 16px;
      line-height: clamp(8px, 4vw, 26px);
      color: rgb(100, 100, 100);
    }
  }
  .posts-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    .post-card {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      overflow: hidden;
      .pc-image {
        width: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &::after {
          content: "";
          inset: 0;
          position: absolute;
          transition: background-color 0.2s;
        }
        &:hover::after {
          background-color: rgba(0, 180, 0, 0.1);
        }
      }
      .pc-main {
        padding: 3%;
        background-color: rgba(255, 255, 255, 0.65);
        height: 180px;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        p:nth-child(1) {
          white-space: nowrap;
          overflow: hidden;
          font-size: 16px;
          text-overflow: ellipsis;
          width: 100%;
          color: rgb(0, 180, 0);
          margin-bottom: 4px;
        }
        p:nth-child(2) {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        p:nth-child(3) {
          font-size: 16px;
          color: rgb(100, 100, 100);
        }
        button {
          background-color: transparent;
          margin-top: auto;
          border: none;
          font-size: 16px;
          color: rgb(100, 100, 100);
          transition: color 0.2s;
          cursor: pointer;
          i {
            margin-left: 4px;
            font-size: 14px;
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
    }
  }
}
@media (max-width: 768px) {
  .hv-blogs-container {
    .bc-title {
      p {
        font-size: 14px;
      }
    }
    .posts-card-container {
      grid-template-columns: repeat(2, 1fr);
      .post-card {
        .pc-main {
          p:nth-child(2) {
            font-size: 16px;
          }
          p:nth-child(1),
          p:nth-child(3),
          button {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
