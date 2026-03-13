<template>
  <div class="about-us-container">
    <div class="au-left-side">
      <div class="aurs-image">
        <img src="/banner-images/7.webp" alt="" />
      </div>
    </div>
    <div class="au-right-side">
      <div class="auls-title">
        <h2>About Us</h2>
      </div>
      <div class="auls-texts">
        <p>
          We started Green Day Shop as a group of childhood friends who all
          shared a love for nature and the outdoors. After college, we became
          roommates and quickly realized that filling our home with plants was
          something we all had in common. But when we tried shopping for
          houseplants online, we found it surprisingly difficult to find a store
          that was easy to navigate and not just geared toward wholesale. So, in
          2017, we decided to launch HousePlantShop.com—a one-stop shop for all
          things houseplants.
        </p>
        <p>
          What started in our shared home, with plants packed from our backyard
          and garage, has now grown into something much bigger. Today, we
          operate out of a large greenhouse in Southern California and have now
          expanded to a second greenhouse in Florida to bring even more happy,
          healthy plants to plant lovers across the country.
        </p>
        <p>
          Even as we’ve grown, we still treat every order with the same care and
          attention as we did when we first started. Our goal is simple: to make
          finding and caring for houseplants easy, fun, and accessible to
          everyone.
        </p>
        <p>From our house to yours, <span> The Green Day Shop Team</span></p>
      </div>
    </div>
  </div>
  <Service />
  <PartnerLogos />
</template>
<script setup>
import Service from '@/components/Service.vue';
import PartnerLogos from '@/components/PartnerLogos.vue';
</script>
<style lang="scss" scoped>
.about-us-container {
  max-width: 1200px;
  padding: 0 clamp(10px, 2vw, 20px);
  margin: clamp(30px, 4vw, 70px) auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 4vw, 50px);
  .au-left-side {
    height: 700px;
    .aurs-image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .au-right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .auls-title {
      font-family: "Playfair Display", serif;
      font-size: 34px;
      margin-bottom: 20px;
    }
    .auls-texts {
      font-weight: 500;
      line-height: 22px;
      p {
        margin-bottom: 20px;
      }
      p:nth-child(4) {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
@media (max-width: 1280px) {
  .about-us-container {
    max-width: 1024px;
    margin: clamp(40px, 7vw, 70px) 50px;
    .au-left-side {
      height: 600px;
    }
    .au-right-side {
      .auls-title {
        font-size: 30px;
        margin-bottom: 14px;
      }
      .auls-texts {
        font-size: 14px;
        line-height: 20px;
        p {
          margin-bottom: 14px;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .about-us-container {
    margin: clamp(40px, 7vw, 70px) 0;
    .au-left-side {
      height: 500px;
      .aurs-image {
        margin-top: 50px;
      }
    }
    .au-right-side {
      .auls-title {
        padding-left: 20px;
      }
      .auls-texts {
        line-height: 18px;
        font-weight: 400;
      }
    }
  }
}
@media (max-width: 767px) {
  .about-us-container {
    grid-template-columns: repeat(1, 1fr);
    .au-left-side {
      height: 100%;
      .aurs-image {
        margin-top: 0;
      }
    }
    .au-right-side {
      .auls-title {
        text-align: center;
        font-size: 20px;
        padding-left: 0;
      }
      .auls-texts {
        padding-left: 20px;
      }
    }
  }
}
</style>
