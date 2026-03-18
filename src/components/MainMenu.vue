<template>
  <div class="main-menu-container">
    <div class="main-menu">
      <div class="close-menu"></div>
      <ul class="mm-wrapper" v-for="item in menu" :key="item.id">
        <li class="mmw-item" v-for="item in item.m_items" :key="item.id">
          <div class="mmwi-title"><small>{{ item.title }}</small></div>
          <ul class="mmwi-wrap" v-for="item in item.mi_items" :key="item.id">
            <li class="mmwiw-item">
              <router-link :to="item.miil_link" class="mmwiwi-link">{{ item.miil_page }}</router-link>
              <div class="mmwiwi-user-panel">
                <button class="up-button">
                  
                </button>
              </div>
            </li>
          </ul>
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
const menu = [
  {
    id: 1,
    m_items: [
      {
        title: 'Menu',
        mi_items_links: [
          {
            id: 1,
            miil_page: 'Home',
            miil_link: '/'
          },
          {
            id: 2,
            miil_page: 'Shop',
            miil_link: '/shop'
          },
          {
            id: 3,
            miil_page: 'About Us',
            miil_link: '/about-us'
          },
          {
            id: 4,
            miil_page: 'Contact Us',
            miil_link: '/contact-us'
          },
        ]
      }
    ]
  },
  {
    id: 2,
    m_items: [
      {
        title: 'User Panel',
        mi_items_panel: [
          {
            id: 1,
            miip_items: 'Language'
          },
          {
            id: 2,
            miip_items: 'Currecy'
          },
          {
            id: 3,
            miip_items: 'Theme'
          },
          {
            id: 4,
            miip_items_modal: 'Sign In'
          },
        ]
      }
    ]
  },
  {
    id: 3,
    m_items: [
      {
        title: 'Socials',
        mii_items_social: [
          {
            miis_items: 'fas fa-linkedin',
            miis_items: 'fas fa-youtube',
            miis_items: 'fas fa-telegram',
            miis_items: 'fas fa-instagram',
          },
        ]
      }
    ]
  }
]
</script>
<style lang="scss" scoped>
.main-menu-container {
  display: none;
}
// @media (max-width: 1023px) {
//   .main-menu-container {
//     position: fixed;
//     display: block;
//     width: 100%;
//     height: 100%;
//     z-index: 100;
//     display: flex;
//     .main-menu {
//       height: 100%;
//       min-height: 636px;
//       overflow: scroll;
//       width: 50%;
//       background-color: rgb(245, 242, 235);
//     }
//     .mm-logo-container {
//       height: 100%;
//       width: 50%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//       .mml-logo {
//         height: 50px;
//         margin-bottom: 10px;
//         img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//       }
//       .mml-description {
//         text-align: center;
//         h3 {
//           font-size: 16px;
//           color: rgb(245, 242, 235);
//         }
//       }
//     }
//   }
// }
</style>
