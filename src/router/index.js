import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/Shop.vue'),
    },
    {
      path: '/contact-us',
      name: 'contactUs',
      component: () => import('../views/ContactUs.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/Wishlist.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    }
  ],
})

export default router
