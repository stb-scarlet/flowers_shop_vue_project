<template>
  <div class="about-us-container">
    <div class="about-us">
      <div class="au-left-side">
        <div class="aurs-image">
          <img src="/banner-images/7.webp" alt="" />
        </div>
      </div>
      <div class="au-right-side">
        <div class="auls-title">
          <h2>{{ $t("about.title") }}</h2>
        </div>
        <div class="auls-texts">
          <p>
            {{ $t("about.firstParagraph") }}
          </p>
          <p>
            {{ $t("about.secondParagraph") }}
          </p>
          <p>
            {{ $t("about.thirdParagraph") }}
          </p>
          <p>{{ $t("about.fourthParagraph") }} <span> {{ $t("about.fifthParagraph") }}</span></p>
        </div>
      </div>
    </div>
    <Services />
    <PartnerLogos />
  </div>
</template>
<script setup>
import PartnerLogos from "@/components/ui/PartnerLogos.vue";
import Services from "@/components/ui/Services.vue";
</script>
<style lang="scss" scoped>
.about-us-container {
  width: 100%;
  padding-top: 190px;
  .about-us {
    max-width: 1200px;
    padding: 0 clamp(10px, 2vw, 20px);
    margin: 0 auto clamp(30px, 7vw, 70px);
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
    .about-us {
      max-width: 1024px;
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
  @media (max-width: 767px) {
    .about-us {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 auto clamp(30px, 7vw, 70px) !important;
      .au-left-side {
        height: 100%;
        .aurs-image {
          margin-top: 0 !important;
        }
      }
      .au-right-side {
        .auls-title {
          text-align: center;
          font-size: 20px;
          padding-left: 0 !important;
        }
        .auls-texts {
          border-left: 2px outset rgba(0, 180, 0, 0.1);
          padding-left: 14px;
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .about-us-container {
    padding-top: 130px;
    .about-us {
      margin-bottom: 100px;
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
}
</style>
