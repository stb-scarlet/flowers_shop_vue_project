<template>
  <div class="home-banner-container">
    <div class="hb-image">
      <img src="/home-banner.avif" alt="" />
    </div>
    <div class="hb-texts">
      <p>Grow green,</p>
      <p>live happy</p>
      <router-link to="/shop" class="hb-button">Shop All Our Plants</router-link>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.home-banner-container {
  height: clamp(600px, 80vw, 900px);
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
    .hb-button {
      background-color: rgba(0, 0, 0, 0.03);
      text-decoration: none;
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
</style>
