<script setup>
import ImageItem from "./ImageItem.vue";
import Loader from "./Loader.vue";
import { useAppStore } from "../stores/AppStore";

const appStore = useAppStore();

appStore.getImages();
</script>

<template>
  <Loader v-if="appStore.isLoading" :isFixed="true" />
  <div v-else class="carousel">
    <div class="carousel-images">
      <ImageItem class="mobile" index="0" />
      <ImageItem class="tablet" index="1" />
      <ImageItem class="tablet" index="2" />
      <ImageItem class="desktop" index="3" />
      <ImageItem class="large-desktop" index="4" />
    </div>
    <button @click="appStore.currentImageIndex--" class="carousel-button prev">
      ‹
    </button>
    <button @click="appStore.currentImageIndex++" class="carousel-button next">
      ›
    </button>
  </div>
</template> 

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.carousel
    position: relative

    .carousel-images
        display: flex
        justify-content: center

    .carousel-button
        font-size: 34px
        padding: 5px
        top: 50%
        transform: translateY(-50%)
        border: none
        cursor: pointer
        background: none
        &:active,
        &:hover
            background-color: #F0F0F0

        &:active
            scale: 1.1

    .carousel-button.prev
        position: absolute
        &:hover,
        &:active
            border-radius: 10px 0 0 10px

    .carousel-button.next
        position: absolute
        &:hover,
        &:active
            border-radius: 0 10px 10px 0
</style>