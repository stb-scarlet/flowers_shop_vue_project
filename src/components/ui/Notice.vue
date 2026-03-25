<template>
  <div
    class="notice-container"
    v-if="isNoticeActive && notice.message"
    :style="{
      backgroundColor: !notice.type ? 'rgb(255, 25, 83)' : 'rgb(0, 180, 0)',
    }"
  >
    <p>{{ notice.message }}</p>

    <div class="n-close-button" @click="closeNotice">
      <svg
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        class="nc-icon"
      >
        <path
          d="M6 4.5858L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.5858 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.5858Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  notice: {
    type: Object,
    required: true,
  },
});

const isNoticeActive = ref(false);
let timeoutId;

const closeNotice = () => {
  isNoticeActive.value = false;
  clearTimeout(timeoutId);
};

watch(
  () => props.notice,
  (val) => {
    if (val?.message) {
      isNoticeActive.value = true;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isNoticeActive.value = false;
      }, 3000);
    }
  },
  { deep: true },
);
</script>
<style lang="scss" scoped>
.notice-container {
  position: fixed;
  overflow: hidden;
  z-index: 160;
  top: 10px;
  width: 80%;
  border-radius: 10px;
  padding: 10px 30px 10px 10px;
  color: rgb(245, 242, 235);
  font-weight: 700;
  font-size: 16px;
  .n-close-button {
    cursor: pointer;
  }
  .nc-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
