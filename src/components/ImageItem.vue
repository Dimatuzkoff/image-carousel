<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useAppStore } from "../stores/AppStore";
import { defineProps, defineEmits } from "vue";
const appStore = useAppStore();
const props = defineProps({
  index: {
    default: 0,
  },
});
const currentIndex = ref(props.index);

watch(
  () => appStore.currentImageIndex,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      currentIndex.value + 1 == appStore.images.length
        ? (currentIndex.value = 0)
        : currentIndex.value++;
    }
    if (newValue < oldValue) {
      currentIndex.value - 1 < 0
        ? (currentIndex.value = appStore.images.length - 1)
        : currentIndex.value--;
    }
  }
);
</script>

<template>
  <img
    v-if="appStore.images.length > 0 && appStore.images[currentIndex]"
    class="carousel-image"
    :src="appStore.images[currentIndex].download_url"
    alt="image"
  />
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.carousel-image
    width: 220px
    height: 200px
    margin: 5px
    cursor: pointer
</style>