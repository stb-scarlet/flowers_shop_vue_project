import { defineStore } from "pinia";
import { useProductStore } from "./product";
import { useCartStore } from "./cart";
import { useWishlistStore } from "./wishlist";
import { ref, computed, watch } from "vue";

export const useCurrencyStore = defineStore("currency", () => {
  const isCurrencyActive = ref(false);

  const toggleCurrency = () => {
    isCurrencyActive.value = !isCurrencyActive.value;
  };

  const currency = ref([
    { id: 1, name: "USD", flag: "/action-icons/usa-flag.svg", },
    { id: 2, name: "RUB", flag: "/action-icons/russia-flag.svg", },
  ]);

  const loadCurrency = () => {
    try {
      const saved = localStorage.getItem("currency")
      return saved !== null ? Number(saved) : 1
    } catch {
      return 1
    }
  };
  const selectedId = ref(loadCurrency());
  function savedCurrency(val) {
    try {
      localStorage.setItem("currency", val)
    } catch (err) {
      console.error(err)
    }
  }
  watch(selectedId, (val) => {
    savedCurrency(val)
  })

  const changeCurrency = (id) => {
    selectedId.value = id
  }

  const productStore = useProductStore()
  const cartStore = useCartStore()
  const wishlistStore = useWishlistStore()

  const currencyProducts = computed(() => {
    const isUSD = selectedId.value === 1;

    const formatter = new Intl.NumberFormat(
      isUSD ? "en-US" : "ru-RU",
      {
        style: "currency",
        currency: isUSD ? "USD" : "RUB",
      }
    );

    return productStore.getProducts.map((product) => ({
      ...product,
      formattedPrice: formatter.format(product.price),
    }));
  });

  const currencyCartProducts = computed(() => {
    const isUSD = selectedId.value === 1;

    const formatter = new Intl.NumberFormat(
      isUSD ? "en-US" : "ru-RU",
      {
        style: "currency",
        currency: isUSD ? "USD" : "RUB",
      }
    );

    return cartStore.cart.map((product) => ({
      ...product,
      formattedPrice: formatter.format(product.price),
      totalPrice: formatter.format(product.price * product.quantity),
    }));
  });

  const cartTotal = computed(() => {
    const isUSD = selectedId.value === 1;

    const formatter = new Intl.NumberFormat(
      isUSD ? "en-US" : "ru-RU",
      {
        style: "currency",
        currency: isUSD ? "USD" : "RUB",
      }
    );

    return formatter.format(
      cartStore.cart.reduce((total, product) => total + product.price * product.quantity, 0)
    );
  });

  const currencyWishlistProducts = computed(() => {
    const isUSD = selectedId.value === 1;

    const formatter = new Intl.NumberFormat(
      isUSD ? "en-US" : "ru-RU",
      {
        style: "currency",
        currency: isUSD ? "USD" : "RUB",
      }
    );

    return wishlistStore.wishlist.map((product) => ({
      ...product,
      formattedPrice: formatter.format(product.price),
    }));
  });

  return { currencyWishlistProducts, currency, changeCurrency, cartTotal, selectedId, currencyProducts, toggleCurrency, isCurrencyActive, currencyCartProducts };
})