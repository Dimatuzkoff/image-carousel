<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isFixed: {
    type: Boolean,
    default: false,
  },
  isBlock: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="loader-mask"
    :class="{
      'loader-mask-fixed': isFixed,
      'loader-mask-block': isBlock,
    }"
  >
    <div class="loader">
      <div class="circle box-1"></div>
      <div class="circle box-2"></div>
      <div class="circle box-3"></div>
      <div class="circle box-4"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/main'
@use '../assets/styles/variables' as *
.loader-mask
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    z-index: 9999

    &-fixed
        position: fixed
        background: white
        top: 0
        left: 0

    &-block
        position: block

.loader
    width: 150px
    height: 50px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: row
    justify-content: space-between

.circle
    width: 20px
    height: 20px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    background: $selected
    box-shadow: 0 0 10px 3px rgb(5, 188, 82)

.box-1
    animation: box-1 1s infinite
    scale: 0

.box-2
    animation: box-2 1s infinite
    scale: 0

.box-3
    animation: box-3 1s infinite
    scale: 0

.box-4
    animation: box-4 1s infinite
    scale: 0

@keyframes box-1
    20%, 80%
        scale: 1
    100%
        scale: 0

@keyframes box-2
    20%
        scale: 0
    40%, 80%
        scale: 1
    100%
        scale: 0

@keyframes box-3
    40%
        scale: 0
    60%, 80%
        scale: 1
    100%
        scale: 0

@keyframes box-4
    60%
        scale: 0
    80%
        scale: 1
    100%
        scale: 0
</style>
