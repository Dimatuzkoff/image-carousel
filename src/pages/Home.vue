<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "../stores/AppStore";

const appStore = useAppStore();

appStore.getImages();
</script>

<template>
  <div class="title">
    <h1 v-if="appStore.title">{{ appStore.title }}</h1>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *

.title
    color: $background
</style>