<template>
  <div
    class="main-menu-container"
    :class="{ 'mm-show': overlayStore.isMenuActive }"
  >
    <div class="main-menu">
      <button class="close-menu" @click="overlayStore.hideMenu">
        <svg
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="cm-icon"
        >
          <path
            d="M6 4.5858L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.5858 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.5858Z"
          />
        </svg>
      </button>
      <ul class="mm-wrapper">
        <li v-for="m_item in menu" :key="m_item.id" class="mmw-item">
          <h4 class="mmw-title">{{ m_item.title }}</h4>

          <!-- LINKS -->
          <ul v-if="m_item.links" class="mmw-links">
            <li v-for="l in m_item.links" :key="l.id" class="mmwl-item">
              <router-link
                :to="l.link"
                class="mmwl-link"
                active-class="mmwl-link-active"
              >
                {{ $t(l.page) }}
              </router-link>
            </li>
          </ul>
          <div class="mmw-line" v-if="m_item.line"></div>
          <!-- PANEL -->
          <ul v-if="m_item.panel" class="mmw-panel">
            <li v-for="p in m_item.panel" :key="p.id" class="mmwp-item">
              <p class="mmwp-button">{{ $t(p.label) }}</p>
              <ul
                v-if="p.type == 'language'"
                class="mmwp-list"
                :class="{ 'mmwp-list-active': $i18n.locale == 'ru' }"
              >
                <li v-for="a in p.action" :key="a.id" class="mmwpl-item">
                  <button
                    class="mmwpl-button"
                    v-if="a == 'En'"
                    @click="localeStore.setLocale('en')"
                  >
                    {{ a }}
                  </button>
                  <button
                    class="mmwpl-button"
                    v-if="a == 'Ру'"
                    @click="localeStore.setLocale('ru')"
                  >
                    {{ a }}
                  </button>
                </li>
              </ul>
              <ul v-if="p.type == 'currency'" class="mmwp-list" :class="{ 'mmwp-list-active': currencyStore.selectedId == 2}">
                <li v-for="a in p.action" :key="a.id" class="mmwpl-item">
                  <button
                    class="mmwpl-button"
                    @click="currencyStore.changeCurrency(a.id)"
                  >
                    {{ a.name }}
                  </button>
                </li>
              </ul>
              <ul v-if="p.type == 'theme'" class="mmwp-list">
                <li v-for="a in p.action" :key="a.id" class="mmwpl-item">
                  <button class="mmwpl-button">{{ $t(a) }}</button>
                </li>
              </ul>
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
            <a href="#">{{ $t("navbar.privacy_policy") }}<i class="fa fa-arrow-right"></i></a>
            <a href="#">{{ $t("navbar.terms_conditions") }}<i class="fa fa-arrow-right"></i></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="mm-logo-container">
      <div class="mml-logo">
        <img src="/logo.png" alt="" />
      </div>
      <div class="mml-description">
        <h3>{{ $t("navbar.logo_description") }}</h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCurrencyStore } from "@/store/modules/Currency";
import { useLocaleStore } from "@/i18n";
import { useOverlayStore } from "@/store/modules/Overlay";


const localeStore = useLocaleStore();
const currencyStore = useCurrencyStore();
const overlayStore = useOverlayStore();

const menu = ref([
  {
    id: 1,
    title: "Menu",
    links: [
      { id: 1, page: "navbar.home", link: "/" },
      { id: 2, page: "navbar.shop", link: "/shop" },
      { id: 3, page: "navbar.about", link: "/about-us" },
      { id: 4, page: "navbar.contact", link: "/contact-us" },
    ],
  },
  { id: 2, line: "line" },
  {
    id: 3,
    title: "User Panel",
    panel: [
      { id: 1, label: "navbar.language", action: ["En", "Ру"], type: "language" },
      { id: 2, label: "navbar.currency", action: [{ id: 1, name: "USD"}, { id: 2, name: "RUB"}], type: "currency" },
      { id: 3, label: "navbar.theme", action: ["navbar.light", "navbar.dark"], type: "theme" },
      { id: 4, label: "navbar.login", type: "modal" },
    ],
  },
  { id: 4, line: "line" },
  {
    id: 5,
    title: "Socials2",
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
  { id: 6, privacy: true },
]);
</script>
<style lang="scss" scoped>
.main-menu-container {
  display: none;
  &.mm-show {
    visibility: visible;
    .main-menu {
      transform: translateX(0);
    }
    .mm-logo-container {
      transform: scale(1);
    }
  }
}
@media (max-width: 1023px) {
  .main-menu-container {
    display: grid;
    position: fixed;
    visibility: hidden;
    width: 100%;
    height: 100vh;
    z-index: 100;
    grid-template-columns: repeat(1, 1fr);
    .main-menu {
      height: 100%;
      background-color: rgb(245, 242, 235);
      overflow: hidden;
      border-right: 1px solid rgba(0, 0, 0, 0.65);
      position: relative;
      transform: translateX(-100%);
      transition: transform 0.2s ease-out;
      .close-menu {
        position: absolute;
        top: 20px;
        right: 20px;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(100, 100, 100);
        .cm-icon {
          height: 16px;
          width: 16px;
        }
        &:active {
          color: rgb(255, 25, 83);
        }
      }
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
            color: rgb(100, 100, 100);
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
                border: none;
                font-size: 30px;
                appearance: none;
                text-decoration: none;
                color: rgb(0, 0, 0);
                font-weight: 700;
                display: inline-block;
                line-height: 24px;
                justify-content: space-between;
                flex-direction: column;
                align-items: flex-start;
                padding: 8px 0;
                background-color: transparent;
                &.mmwl-link-active {
                  color: rgb(0, 180, 0);
                }
              }
              .mmws-contacts {
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
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
            .mmwp-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .mmwp-list {
                list-style: none;
                display: flex;
                align-items: center;
                background-color: rgb(255, 255, 255, 0.65);
                height: 100%;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 25px;
                overflow: hidden;
                position: relative;
                .mmwpl-item {
                  padding: 6px 10px;
                  border-radius: 25px;
                  .mmwpl-button {
                    font-size: 16px;
                    white-space: nowrap;
                    color: rgb(0, 0, 0);
                    font-weight: 700;
                    font-family: "Quicksand", sans-serif;
                    background-color: transparent;
                    border: none;
                  }
                }
                &::after {
                  content: "";
                  position: absolute;
                  width: 50%;
                  left: 0;
                  transform: translateX(0%);
                  height: 100%;
                  background-color: rgb(0, 180, 0);
                  border-radius: 25px;
                  z-index: -1;
                  transition: transform 0.2s;
                }
                &.mmwp-list-active {
                  &::after {
                    transform: translateX(100%);
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
          display: flex;
          gap: 30px;
          a {
            font-size: clamp(14px, 2vw, 16px);
            white-space: nowrap;
            color: rgb(0, 0, 0);
            font-weight: 700;
            i {
              font-size: clamp(12px, 2vw, 14px);
            }
          }
        }
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
        transform: scale(0.8);
        transition: transform 0.2s ease-out;
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
