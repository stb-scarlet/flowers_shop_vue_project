import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCurrencyStore = defineStore("currency", () => {
    const currency = ref([
        { id: 1, name: "USD", flag: "/action-icons/usa-flag.svg", },
        { id: 2, name: "RUB", flag: "/action-icons/russia-flag.svg", },
    ]);
    const selectedId = ref(1)

    const currentCurrency = computed(() => currency.value.find(item => item.id === selectedId.value)
    )

    const changeCurrency = (id) => {
        selectedId.value = id
    }
    return { currency, changeCurrency, currentCurrency };
})