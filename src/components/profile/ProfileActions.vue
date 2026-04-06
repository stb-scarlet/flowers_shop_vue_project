<template>
  <div class="profile-actions-container">
    <ul class="pa-wrapper">
      <li class="pa-item" v-for="item in profileActions" :key="item.id">
        <div class="pa-card">
          <router-link :to="item.link" class="pac-main">
            <div class="pacm-texts">
              <div class="pacmt-top">
                <p>{{ item.info }}</p>
              </div>
              <div class="pacmt-bottom">
                <p>{{ item.title }}</p>
              </div>
            </div>
            <div class="pacm-icon">
              <span
                :style="{ backgroundImage: `url(${item.icon})` }"
                v-if="item.icon"
              ></span>
            </div>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCurrencyStore } from "@/store/modules/Currency";
const currencyStore = useCurrencyStore();

const profileActions = ref([
  {
    id: 1,
    link: "/",
    title: "Balans",
    info: "123",
  },
  {
    id: 2,
    link: "/",
    title: "Spent",
    info: "123",
  },
  {
    id: 3,
    link: "/cart",
    title: `${currencyStore.currencyCartProducts.length} product`,
    info: "Cart",
    icon: "/action-icons/cart-icon.svg",
  },
  {
    id: 4,
    link: "/wishlist",
    title: `${currencyStore.currencyWishlistProducts.length} product`,
    info: "Wishlist",
    icon: "/action-icons/heart-icon.svg",
  },
]);
</script>
<style lang="scss" scoped>
.profile-actions-container {
  .pa-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px 10px;
    list-style: none;
    .pa-item {
      .pa-card {
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 10px;
        .pac-main {
          padding: 20px;
          gap: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgb(0, 0, 0);
          text-decoration: none;
          .pacm-texts {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .pacmt-top {
              font-weight: 700;
              font-size: 22px;
              line-height: 20px;
            }
            .pacmt-bottom {
              font-weight: 600;
              color: #888;
            }
          }
          .pacm-icon {
            span {
              filter: invert(36%) sepia(94%) saturate(745%) hue-rotate(85deg)
                brightness(90%) contrast(95%);
              display: inline-block;
              width: 35px;
              height: 35px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
          }
					&:hover .pacm-texts {
						.pacmt-top {
							color: rgb(0, 180, 0);
							transition: color 0.2s;
						}
					}
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .profile-actions-container {
    .pa-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
