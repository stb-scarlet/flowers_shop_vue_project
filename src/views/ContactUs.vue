<template>
  <div class="contact-container">
    <div class="contact-part">
      <div class="contact-info">
        <div class="ci-item">
          <h2>Contact Us</h2>
          <p>
            <span>Email call, or complete the form learn how</span>
            <span>Snappy can solve your messaging problem.</span>
          </p>
          <p>example@ex.com</p>
          <p>(123)-123-123</p>
          <a href="">Custom Support</a>
        </div>
        <ul class="ci-wrapper">
          <li class="ciw-item">
            <p class="ciw-title">Custom Support</p>
            <p>
              Our team is availble around the clock to address any concerns or
              questions you may have.
            </p>
          </li>
          <li class="ciw-item">
            <p class="ciw-title">Feedback & Suggestion</p>
            <p>
              Our team is availble around the clock to address any concerns or
              questions you may have.
            </p>
          </li>
          <li class="ciw-item">
            <p class="ciw-title">Medi Inquiries</p>
            <p>
              Our team is availble around the clock to address any concerns or
              questions you may have.
            </p>
          </li>
        </ul>
      </div>
      <div class="main-contact">
        <div class="mc-card">
          <div class="mcc-header">
            <div class="mcc-title">Send a Message</div>
            <p>You can reach us anytime</p>
          </div>
          <div class="mcc-body">
            <form class="mcc-form">
              <div class="mccf-fullname">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <input type="email" placeholder="Your email" required />
              <input type="text" placeholder="Phone number" required />
              <textarea placeholder="How can we help?" required></textarea>
              <button class="mccf-button">Send</button>
              <p>
                By contacting us, you agree to our
                <a href="#">Terms & Conditions</a> and
                <a href="#">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Services />
  </div>
</template>
<script setup>
import Services from "@/components/ui/Services.vue";
</script>
<style lang="scss" scoped>
.contact-container {
  padding: 100px 0 0;
  width: 100%;
  .contact-part {
    display: grid;
    align-items: center;
    color: rgb(0, 0, 0);
    grid-template-columns: 100%;
    gap: 50px;
    max-width: 1500px;
    margin: clamp(20px, 10vw, 40px) auto;
    padding: 0 clamp(10px, 2vw, 20px);
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .ci-item {
        font-size: 16px;
        h2 {
          color: rgb(0, 0, 0);
          font-size: 50px;
          margin-bottom: 10px;
        }
        p,
        a {
          font-weight: 600;
          display: flex;
          flex-direction: column;
          line-height: 28px;
          color: rgb(100, 100, 100);
          font-size: 18px;
          margin-bottom: 10px;
        }
        a {
          color: rgb(0, 0, 0);
        }
      }
      .ci-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        list-style: none;
        .ciw-item {
          .ciw-title {
            color: rgb(0, 0, 0);
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          p {
            line-height: 28px;
            font-weight: 500;
            color: rgb(100, 100, 100);
          }
        }
      }
    }
    .main-contact {
      .mc-card {
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 10px;
        padding: 20px;
        font-weight: 500;
        font-size: 16px;
        .mcc-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 20px;
          color: rgb(100, 100, 100);
          margin-bottom: 30px;
          .mcc-title {
            font-size: 30px;
            font-weight: 700;
            color: rgb(0, 0, 0);
          }
        }
        .mcc-body {
          width: 100%;
          p:last-child {
            margin: 0 auto;
            text-align: center;
            color: rgb(100, 100, 100);
            font-weight: 600;
            width: 100%;
            a {
              color: rgb(0, 0, 0);
              text-decoration: none;
            }
          }
          .mcc-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
            input,
            button,
            textarea {
              width: 100%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 10px;
              font-size: 16px;
              font-weight: 600;
              font-family: "Quicksand", sans-serif;
              &::placeholder {
                color: rgb(160, 160, 160);
              }
              &:focus {
                border: none;
                outline: 1px solid rgb(0, 180, 0);
              }
            }
            textarea {
              height: 150px;
            }
            .mccf-fullname {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 15px;
            }
            .mccf-button {
              background-color: rgb(0, 180, 0);
              color: rgb(245, 242, 235);
              font-weight: 700;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .contact-container {
    padding: 120px 0 0;
    .contact-part {
      grid-template-columns: 60% 40%;
    }
  }
}
@media (min-width: 576px) {
  .contact-container {
    .contact-part {
      .contact-info {
        .ci-wrapper {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      .main-contact {
        .mc-card {
          .mcc-body {
            p:last-child {
              width: 80%;
            }
            .mcc-form {
              .mccf-fullname {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
