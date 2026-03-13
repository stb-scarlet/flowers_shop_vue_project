<template>
  <div class="service">
    <div class="service-container">
      <div class="service-wrap">
        <div class="sw-item" v-for="item in service" :key="item.id">
          <div class="swi-image">
            <img :src="item.src" alt="">
          </div>
          <div class="swi-texts">
            <h4>{{ item.firstParagraph }}</h4>
            <p>{{ item.secondParagraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const service = [
  {
    id: 1,
    src: "/service-images/1.png",
    firstParagraph: "Large Selection",
    secondParagraph:
      "From easy-care classics to rare finds, we have a plant for everyone.",
  },
  {
    id: 2,
    src: "/service-images/2.png",
    firstParagraph: "Free Shipping Nationwide",
    secondParagraph:
      "We ship from our California and Florida greenhouses, ensuring your plants arrive fresh and healthy.",
  },
  {
    id: 3,
    src: "/service-images/3.png",
    firstParagraph: "30-Day Guarantee",
    secondParagraph:
      "We stand by our plants! If anything goes wrong, we’ll make it right.",
  },
];
</script>
<style lang="scss" scoped>
.service {
  background-color: rgb(230, 243, 234);
  margin-bottom: clamp(40px, 7vw, 70px);
  .service-container {
    max-width: 1200px;
    padding: 50px 20px;
    margin: 0 auto;
    .service-wrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      .sw-item {
        .swi-image {
          height: 70px;
          width: 70px;
          margin: 0 auto 20px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .swi-texts {
          text-align: center;
          font-weight: 500;
          line-height: 22px;
          h4 {
            font-size: 20px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .service-container {
      margin: 0 50px;
      .service-wrap {
        .sw-item {
          .swi-image {
            height: 60px;
            width: 60px;
          }
          .swi-texts {
            font-size: 14px;
            line-height: 20px;
            h4 {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    .service-container {
      margin: 0;
      .service-wrap {
        .sw-item {
          .swi-image {
            height: 54px;
            width: 54px;
          }
          .swi-texts {
            font-size: 14px;
            line-height: 18px;
            h4 {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .service-container {
      .service-wrap {
        grid-template-columns: repeat(1, 1fr);
        .sw-item {
          .swi-texts {
            font-size: 12px;
          }
        }
      }
    }
    
  }
}
</style>
