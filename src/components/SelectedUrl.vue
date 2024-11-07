<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
</script>

<template>
  <div class="selected-images">
    <h3 v-if="appStore.selectedImages.length > 0">Links of selected images:</h3>
    <h3 v-else>Select a image</h3>
    <ul>
      <li v-for="url in appStore.selectedImages" :key="url">
        {{ url }}
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

h3
    margin: 20px auto
</style>