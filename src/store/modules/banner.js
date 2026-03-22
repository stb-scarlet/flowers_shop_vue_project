import { defineStore } from "pinia";
import { ref } from "vue";
export const useBannerStore = defineStore("banners", () => {
    const banners = ref([
        {
            id: 1,
            src: '/banner-images/1.jpg',
            firstParagraph: 'Welcome To Green Day',
            secondParagraph: `Let's Make A Better Planet`,
            thirdParagraph: `We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!`,
        },
        {
            id: 2,
            src: '/banner-images/2.jpg',
            firstParagraph: 'Join The Fun!',
            secondParagraph: `Sun Fun Joy`,
            thirdParagraph: `We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!`,
        },
        {
            id: 3,
            src: '/banner-images/3.jpg',
            firstParagraph: 'Explore With Us!',
            secondParagraph: `Act Now Heal Earth`,
            thirdParagraph: `We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!`,
        },
    ]);
    return { banners }
})