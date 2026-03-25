<template>
  <div class="f-container">
    <div class="f-middle-part">
      <div class="fm-container">
        <div class="fc-logo">
          <img src="/logo.png" alt="" />
        </div>
        <div class="fc-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
        </div>
        <div class="fc-email">
          <i class="fas fa-envelope"></i>
          <span>example@ex.com</span>
        </div>
        <div class="fc-phone">
          <i class="fas fa-phone"></i>
          <span>(123) 456-7890</span>
        </div>
      </div>
    </div>
    <div class="bottom-part">
      <div class="fb-container">
        <ul class="my-pages-wrapper">
          <li class="title">
            <p>My Account</p>
          </li>
          <li class="item">
            <router-link to="/profile">My Account</router-link>
          </li>
          <li class="item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item">
            <router-link to="/shop">Shop</router-link>
          </li>
          <li class="item">
            <router-link to="/contact-us">Contact Us</router-link>
          </li>
          <li class="item">
            <router-link to="/profile">About Us</router-link>
          </li>
        </ul>
        <ul class="help-guide-wrapper">
          <li class="title">
            <p>Help & Guide</p>
          </li>
          <li class="item">
            <a href="#">Help Center</a>
          </li>
          <li class="item">
            <a href="#">How to Buy</a>
          </li>
          <li class="item">
            <a href="#">Shipping & Delivery</a>
          </li>
          <li class="item">
            <a href="#">Product Policy</a>
          </li>
          <li class="item">
            <a href="#">How to Return</a>
          </li>
        </ul>
        <ul class="categories-wrapper">
          <li class="title">
            <p>Categories</p>
          </li>
          <li class="item">
            <router-link to="/shop">House Plants</router-link>
          </li>
          <li class="item">
            <router-link to="/shop">Potter Plants</router-link>
          </li>
          <li class="item">
            <router-link to="/shop">Seeds</router-link>
          </li>
          <li class="item">
            <router-link to="/shop">Small Plants</router-link>
          </li>
          <li class="item">
            <router-link to="/shop">Accessories</router-link>
          </li>
        </ul>
        <div class="fb-socials">
          <div class="fb-social-brands">
            <div class="fbs-title">
              <p>Social Media</p>
            </div>
            <div class="fbs-icons">
              <div class="fbs-box">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div class="fbs-box">
                <i class="fab fa-instagram"></i>
              </div>
              <div class="fbs-box">
                <i class="fab fa-twitter"></i>
              </div>
              <div class="fbs-box">
                <i class="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div class="fbs-bank-cards">
            <div class="fbs-title"><p>We Accept</p></div>
            <ul class="bc-wrapper">
              <li class="bcw-box">
                <i class="fab fa-cc-visa"></i>
              </li>
              <li class="bcw-box">
                <i class="fab fa-cc-mastercard"></i>
              </li>
              <li class="bcw-box">
                <i class="fab fa-cc-paypal"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="f-privacy">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.f-container {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  .f-middle-part {
    background-color: rgba(0, 180, 0, 0.1);
    width: 100%;
    .fm-container {
      padding: 20px clamp(10px, 1vw, 20px);
      margin: 0 auto;
      display: grid;
      align-items: center;
      max-width: 1500px;
      grid-template-columns: 50% 50%;
      gap: 30px 10px;
      .fc-logo {
        width: 140px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .fc-email,
      .fc-location,
      .fc-phone {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 16px;
        i {
          color: rgb(0, 180, 0);
          font-size: 18px;
        }
      }
    }
  }
  .bottom-part {
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 clamp(10px, 1vw, 20px);
    .fb-container {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 15px;
      padding: 30px;
      .my-pages-wrapper,
      .help-guide-wrapper,
      .categories-wrapper {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        .title {
          font-size: 20px;
          font-weight: 700;
        }
        .item {
          a {
            text-decoration: none;
            color: rgb(0, 0, 0);
            font-size: 16px;
            font-weight: 500;
            &:hover {
              color: rgb(0, 180, 0);
            }
          }
        }
      }
      .fb-socials {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .fb-social-brands {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .fbs-title {
            font-size: 20px;
            font-weight: 700;
          }
          .fbs-icons {
            display: flex;
            gap: 10px;
            .fbs-box {
              width: 30px;
              height: 30px;
              background-color: rgb(0, 180, 0);
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                color: rgb(255, 255, 255);
              }
            }
          }
        }
        .fbs-bank-cards {
          .fbs-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          .bc-wrapper {
            display: flex;
            gap: 20px;
            .bcw-box {
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 30px;
            }
          }
        }
      }
    }
    .f-privacy {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      text-align: center;
      padding: 10px 0;
      background-color: rgba(255, 255, 255, 0.65);
    }
  }
}

@media (min-width: 992px) {
  .f-container {
    .f-middle-part {
      .fm-container {
        grid-template-columns: 20% 20% 20% 20% 20%;
        .fc-logo {
          width: 180px;
          height: 40px;
        }
      }
    }
    .bottom-part {
      .fb-container {
        grid-template-columns: 20% 20% 20% 20% 20%;
      }
    }
  }
}
</style>
