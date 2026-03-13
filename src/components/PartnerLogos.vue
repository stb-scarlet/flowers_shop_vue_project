<template>
  <div class="partner-logos-container">
    <ul class="pl-wrap">
      <li class="plw-item" v-for="item in partners" :key="item.id">
        <div class="brand-logo">
          <img :src="item.src" alt="" loading="lazy" />
        </div>
        <div class="plwi-button">
          <button>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const partners = [
  {
    id: 1,
    src: "/Partner-logos/1.png",
  },
  {
    id: 2,
    src: "/Partner-logos/2.png",
  },
  {
    id: 3,
    src: "/Partner-logos/3.png",
  },
  {
    id: 4,
    src: "/Partner-logos/4.png",
  },
  {
    id: 5,
    src: "/Partner-logos/5.png",
  },
  {
    id: 6,
    src: "/Partner-logos/6.png",
  },
  {
    id: 7,
    src: "/Partner-logos/7.png",
  },
  {
    id: 8,
    src: "/Partner-logos/8.png",
  },
  {
    id: 9,
    src: "/Partner-logos/9.png",
  },
];
</script>
<style lang="scss" scoped>
.partner-logos-container {
  padding: 0 clamp(10px, 1vw, 20px);
  margin: 0 auto clamp(30px, 4vw, 70px);
  max-width: 1200px;
  .pl-wrap {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .plw-item {
      width: 100%;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.65);
      backdrop-filter: blur(4px) saturate(180%);
      border: 1px solid rgba(0, 0, 0, 0.1);
      .brand-logo {
        height: 120px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .plwi-button {
        position: absolute;
        top: 3%;
        right: 3%;
        button {
          padding: 6px;
          border-radius: 50%;
          border: none;
          font-size: 14px;
          background-color: rgb(230, 243, 234);
          color: rgb(0, 180, 0);
          transition: all 0.2s;
        }
      }
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        transition: all 0.2s;
      }
      &:hover {
        .plwi-button {
          button {
            transform: rotate(-45deg);
          }
        }
      }
      &:hover::after {
        background-color: rgba(0, 180, 0, 0.1);
      }
    }
  }
}
</style>
