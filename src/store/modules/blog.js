import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
    const blogs = ref([
        {
            id: 1,
            src: "/blog-images/1.jpg",
            firstParagraph: "blog.firstParagraph",
            secondParagraph: "blog.secondParagraph",
            thirdParagraph: "blog.thirdParagraph",
        },
        {
            id: 2,
            src: "/blog-images/2.jpg",
            firstParagraph: "blog.firstParagraph",
            secondParagraph: "blog.secondParagraph",
            thirdParagraph: "blog.thirdParagraph",
        },
        {
            id: 3,
            src: "/blog-images/3.jpg",
            firstParagraph: "blog.firstParagraph",
            secondParagraph: "blog.secondParagraph",
            thirdParagraph: "blog.thirdParagraph",
        },
        {
            id: 4,
            src: "/blog-images/4.jpg",
            firstParagraph: "blog.firstParagraph",
            secondParagraph: "blog.secondParagraph",
            thirdParagraph: "blog.thirdParagraph",
        },
    ])

    return { blogs }
})