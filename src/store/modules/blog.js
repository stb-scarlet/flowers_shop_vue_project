import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
    const blogs = ref([
        {
            id: 1,
            src: '/blog-images/1.jpg',
            firstParagraph: 'September 12 | Read in 8 minutes',
            secondParagraph: `Cactus & Succulent Care Tips`,
            thirdParagraph: `Cacti are succulents are easy care plants for any home or patio.`,
        },
        {
            id: 2,
            src: '/blog-images/2.jpg',
            firstParagraph: 'September 13 | Read in 6 minutes',
            secondParagraph: `Top 10 Succulents for Your Home`,
            thirdParagraph: `Best in hanging baskets. Prefers medium to high light.`,
        },
        {
            id: 3,
            src: '/blog-images/3.jpg',
            firstParagraph: 'September 14 | Read in 3 minutes',
            secondParagraph: `Cactus & Succulent Care Tips`,
            thirdParagraph: `Cacti are succulents are easy care plants for any home or patio.`,
        },
        {
            id: 4,
            src: '/blog-images/4.jpg',
            firstParagraph: 'September 14 | Read in 2 minutes',
            secondParagraph: `Best Houseplants Room by Room`,
            thirdParagraph: `The benefits of houseplants are endless. In addition to..`,
        },
    ])

    return { blogs }
})