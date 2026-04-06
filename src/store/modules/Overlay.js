import { defineStore } from "pinia";
import { ref } from "vue";

export const useOverlayStore = defineStore("overlay", () => {
    const isFilterActive = ref(false);
    const isMenuActive = ref(false);
    const isSortActive = ref(false);
    const ignoreSelectors = ref([
        ".search-container",
        ".search-view",
        "#search-button",
        ".main-filter-container",
        ".fb-button",
        ".mth-burger-button",
        ".main-menu",
        ".sort-by-container",
        ".th-settings",
        ".login-container",
        ".login",
        ".phub-button",
        ".mth-action"
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

    const showMenu = () => {
        isMenuActive.value = true;
        isFilterActive.value = false;
    };

    const hideMenu = () => {
        isMenuActive.value = false;
    };

    const toggleSort = () => {
        isSortActive.value = !isSortActive.value;
    }

    return { isSortActive, toggleSort, isFilterActive, showFilter, hideFilter, ignoreSelectors, addSelector, showMenu, hideMenu, isMenuActive };
});