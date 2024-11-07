<script setup>
import ImageItem from "./ImageItem.vue";

import { ref, onMounted, onUnmounted, computed } from "vue";
import { useAppStore } from "../stores/AppStore";

const appStore = useAppStore();

appStore.getImages();

const prevImage = () => {
  appStore.currentImageIndex--;
};

const nextImage = () => {
  appStore.currentImageIndex++;
};
</script>

<template>
  <div class="carousel">
    <div class="carousel-images">
      <ImageItem class="mobile" index="0" />
      <ImageItem class="tablet" index="1" />
      <ImageItem class="tablet" index="2" />
      <ImageItem class="desktop" index="3" />
      <ImageItem class="large-desktop" index="4" />
    </div>
    <button @click="prevImage" class="carousel-button">‹</button>
    <button @click="nextImage" class="carousel-button">›</button>
  </div>
</template> 

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.carousel
    position: relative

    .carousel-images
        display: flex
</style>