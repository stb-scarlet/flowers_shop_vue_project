import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useWishlistStore = defineStore("wishlist", () => {
    const wishlist = ref(JSON.parse(localStorage.getItem("wishlist")) || []);
    const addToWishlist = (product) => {
        if (product.id && !wishlist.value.some((item) => item.id === product.id)) {
            wishlist.value.push({
                ...product
            });
        } else {
            removeFromWishlist(product.id);
        }
    };

    const removeFromWishlist = (productId) => {
        wishlist.value.splice(
            wishlist.value.findIndex((item) => item.id === productId),
            1
        );
    };

    const clearWishlist = () => {
        wishlist.value = [];
    };

    const isProductInWishlist = (productId) => {
        return wishlist.value.some((item) => item.id === productId);
    };

    watch(wishlist, (val) => {
        try {
            localStorage.setItem("wishlist", JSON.stringify(val));
        } catch (err) {
            console.error(err);
        }
    }, { deep: true });
    return { wishlist, addToWishlist, removeFromWishlist, clearWishlist, isProductInWishlist };
});