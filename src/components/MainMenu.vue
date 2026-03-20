<template>
  <div class="main-menu-container">
    <div class="main-menu">
      <div class="close-menu"></div>
      <ul class="mm-wrapper">
        <li v-for="m_item in menu" :key="m_item.id" class="mmw-item">
          <h4 class="mmw-title">{{ m_item.title }}</h4>

          <!-- LINKS -->
          <ul v-if="m_item.links" class="mmw-links">
            <li v-for="l in m_item.links" :key="l.id" class="mmwl-item">
              <router-link :to="l.link" class="mmwl-link">
                {{ l.page }}
              </router-link>
            </li>
          </ul>
          <div class="mmw-line" v-if="m_item.line"></div>
          <!-- PANEL -->
          <ul v-if="m_item.panel" class="mmw-panel">
            <li v-for="p in m_item.panel" :key="p.id" class="mmwp-item">
              <button class="mmwp-button">{{ p.label }}</button>
            </li>
          </ul>
          <!-- SOCIALS -->
          <div v-if="m_item.socials" class="mmw-socials">
            <div v-for="s in m_item.socials" :key="s.id" class="mmws-item">
              <div v-if="s.contacts" class="mmws-contacts">
                <a href="#" class="mmws-phone">{{ s.contacts.phone }}</a>
                <a href="#" class="mmws-email">{{ s.contacts.email }}</a>
              </div>

              <div v-if="s.icons" class="mmws-icons">
                <a v-for="(icon, i) in s.icons" :key="i" class="mmwsi-icon">
                  <i :class="icon.icon"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- PRIVACY POLICY -->
          <div class="mmw-privacy-item" v-if="m_item.privacy">
            <p>privacy podivcy</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="mm-logo-container">
      <div class="mml-logo">
        <img src="/logo.png" alt="" />
      </div>
      <div class="mml-description">
        <h3>We care for your plants like they're our own.</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const menu = ref([
  {
    id: 1,
    title: "Menu",
    links: [
      { id: 1, page: "Home", link: "/" },
      { id: 2, page: "Shop", link: "/shop" },
      { id: 3, page: "About Us", link: "/about-us" },
      { id: 4, page: "Contact Us", link: "/contact-us" },
    ],
  },
  { id: 2, line: "line" },
  {
    id: 3,
    title: "User Panel",
    panel: [
      { id: 1, label: "Language" },
      { id: 2, label: "Currency" },
      { id: 3, label: "Theme" },
      { id: 4, label: "Sign In", type: "modal" },
    ],
  },
  { id: 4, line: "line" },
  {
    id: 5,
    title: "Socials",
    socials: [
      {
        id: 1,
        contacts: {
          phone: "+1 (23) 456 789",
          email: "example.org",
        },
      },
      {
        id: 1,
        icons: [
          { icon: "fab fa-linkedin-in" },
          { icon: "fab fa-youtube" },
          { icon: "fab fa-telegram" },
          { icon: "fab fa-instagram" },
        ],
      },
    ],
  },
  {id: 6, privacy: true}
]);
</script>
<style lang="scss" scoped>
.main-menu-container {
  display: none;
}
@media (max-width: 1023px) {
  .main-menu-container {
    position: fixed;
    display: block;
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    .main-menu {
      height: 100%;
      background-color: rgb(245, 242, 235);
      overflow: hidden;
      border-right: 1px solid rgba(0, 0, 0, 0.65);
      .mm-wrapper {
        height: 100dvh;
        overflow-y: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        list-style: none;
        gap: 16px;
        .mmw-line {
          height: 1px;
          background-color: rgba(0, 0, 0, 0.65);
        }
        .mmw-item {
          width: 100%;
          .mmw-title {
            color: rgb(0, 180, 0);
            padding: 20px 20px 0 20px;
            font-family: "Playfair Display", serif;
            margin-bottom: 6px;
          }
          .mmw-links,
          .mmw-panel,
          .mmw-socials {
            width: 100%;
            margin: 0;
            padding: 0 20px;
            list-style: none;
            .mmwl-item,
            .mmwp-item,
            .mmws-item {
              .mmwl-link,
              .mmwp-button,
              .mmws-contacts .mmws-phone,
              .mmws-contacts .mmws-email {
                font-size: 30px;
                appearance: none;
                text-decoration: none;
                color: rgb(0, 0, 0);
                font-weight: 700;
                width: 100%;
                display: inline-flex;
                line-height: 24px;
                justify-content: space-between;
                flex-direction: column;
                align-items: flex-start;
                border: none;
                padding: 8px 0;
                background-color: transparent;
              }
              .mmws-contacts {
                margin-bottom: 20px;
                .mmws-email,
                .mmws-phone {
                  text-decoration: underline;
                }
              }
              .mmws-icons {
                display: flex;
                gap: 16px;
                .mmwsi-icon {
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
      .mmw-privacy-item {
        width: 100%;
        padding: 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.65);
      }
    }
    .mm-logo-container {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .main-menu-container {
      grid-template-columns: repeat(2, 1fr);
      .mm-logo-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid red;
        .mml-logo {
          height: 50px;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .mml-description {
          text-align: center;
          h3 {
            font-size: 16px;
            color: rgb(245, 242, 235);
          }
        }
      }
    }
  }
}
</style>
