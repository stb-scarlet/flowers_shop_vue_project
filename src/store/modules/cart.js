import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

  const selectedProducts = (productId) => {
    // const item = cart.value.find((item) => item.id === productId);

    // if (item) item.selected = !item.selected;
  }
  const addToCart = (product) => {
    if (product.id && !cart.value.some((item) => item.id === product.id)) {
      cart.value.push({
        ...product,
        quantity: 1,
        selected: false
      });
    } else {
      cart.value.find((item) => item.id === product.id).quantity++;
    }
  };

  const removeFromCart = (productId) => {
    confirm("Are you sure you want to remove this item from your cart?") && cart.value.splice(
      cart.value.findIndex((item) => item.id === productId),
      1
    )
  };

  const clearCart = () => {
    cart.value = [];
  };

  const updateQuantity = (productId, quantity) => {
    const item = cart.value.find((item) => item.id === productId);
    if (!item) return;

    if (quantity > 0) {
      item.quantity = quantity;
    } else if (quantity >= 99) {
      item.quantity = 99;
    } else {
      removeFromCart(productId);
    }
  }

  const getCartTotal = () => {
    return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const isProductInCart = (productId) => {
    return cart.value.some((item) => item.id === productId);
  };

  watch(cart, (val) => {
    try {
      localStorage.setItem("cart", JSON.stringify(val));
    } catch (err) {
      console.error(err);
    }
  }, { deep: true });
  return { cart, addToCart, removeFromCart, clearCart, updateQuantity, getCartTotal, isProductInCart, selectedProducts };
});