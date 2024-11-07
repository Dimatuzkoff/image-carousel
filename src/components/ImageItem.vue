<script setup>
import { ref, watch } from "vue";
import { useAppStore } from "../stores/AppStore";
import { defineProps } from "vue";
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

const getImageUrl = (url) => {
  const index = appStore.selectedImages.indexOf(url);

  if (index === -1) appStore.selectedImages.push(url);
  else appStore.selectedImages.splice(index, 1);
};
</script>

<template>
  <img
    v-if="appStore.images.length > 0 && appStore.images[currentIndex]"
    @click="getImageUrl(appStore.images[currentIndex].download_url)"
    :src="appStore.images[currentIndex].download_url"
    alt="image"
    :class="{
      selected: appStore.selectedImages.includes(
        appStore.images[currentIndex].download_url
      ),
    }"
    class="carousel-image"
  />
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.carousel-image
    margin: 5px
    cursor: pointer
    box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d, 0 -6px 16px -6px #00000008
    border-radius: 8px

.carousel-image.selected
    border: 3px solid $selected
    transform: scale(1.05)
</style>