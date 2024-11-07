<script setup>
import ImageCarousel from "../components/ImageCarousel.vue";
import SelectedUrl from "../components/SelectedUrl.vue";
</script>

<template>
  <div class="carousel-container">
    <ImageCarousel />
    <SelectedUrl />
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.carousel-container
    display: flex
    flex-direction: column
    align-items: center
    max-width: 1000px
    margin: 80px auto
</style>