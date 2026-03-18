<template>
  <div class="hv-products-banner-container">
    <div class="product-banner">
      <div class="pb-texts">
        <p>Summer Cactus & Succulents</p>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants
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
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </p>
        <button>
          Find More <span><i class="fas fa-arrow-right"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@media (max-width: 1023px) {
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
          transition:
            background-color 0.2s,
            border 0.2s;
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
          transition:
            background-color 0.2s,
            border 0.2s;
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
</style>
