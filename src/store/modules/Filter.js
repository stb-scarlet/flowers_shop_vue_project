import { defineStore } from "pinia";
import { ref } from "vue";

export const useFilterStore = defineStore("filter", () => {
    const isFilterActive = ref(false);
    const ignoreSelectors = ref([
        ".search-container",
        ".search-view",
        ".th-language-box",
        "#search-button",
        ".th-currency-box",
        ".main-filter-container",
        ".fb-button"
    ])

    const addSelector = (selector) => {
        if (!ignoreSelectors.value.includes(selector)) {
            ignoreSelectors.value.push(selector)
        }
    }

    const showFilter = () => {
        isFilterActive.value = true;
    };

    const hideFilter = () => {
        isFilterActive.value = false;
    };

    return { isFilterActive, showFilter, hideFilter, ignoreSelectors, addSelector };
});