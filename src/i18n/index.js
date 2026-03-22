import { createI18n } from "vue-i18n";
import { defineStore } from "pinia";
import { watch, ref } from "vue";
import en from "@/locale/en";
import ru from "@/locale/ru";

const getInitialLocale = () => {
	try {
		const saved = localStorage.getItem("locale");
		return saved !== null ? saved : "en";
	} catch {
		return "en";
	}
};

const i18n = createI18n({
	legacy: false,
	locale: getInitialLocale(),
	fallbackLocale: "en",
	messages: {
		en,
		ru,
	},
	globalInjection: true,
});

// export const setI18nLocale = (locale) => {
//   i18n.global.locale.value = locale;
// };

export const useLocaleStore = defineStore("locale", () => {
	const isLanguageActive = ref(false)

	const toggleLaguage = () => {
		isLanguageActive.value = !isLanguageActive.value
	}
	const setLocale = (locale) => {
		i18n.global.locale.value = locale;
	};

	watch(i18n.global.locale, (val) => {
		try {
			localStorage.setItem("locale", val);
		} catch (err) {
			console.error(err);
		}
	});

	return { setLocale, toggleLaguage, isLanguageActive };
})

export default i18n;