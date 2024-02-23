<template>
  <div class="project-img-wrapper">
    <div class="project-img-inner-wrapper">
      <div class="img-wrapper">
        <img :src="src" :alt="alt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectImageDisplay',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.project-img-wrapper {
  transform: none;
  transform-origin: 50% 50% 0px;
  opacity: 1;
  flex: 0 0 auto;
  height: 350px;
  overflow: visible;
  position: relative;
  width: 100%;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    height: 550px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    height: 488px;
  }
}
.project-img-inner-wrapper {
  transform: none;
  transform-origin: 50% 50% 0px;
  flex: 0 0 auto;
  height: 100%;
  left: calc(2.13163e-14);
  overflow: hidden;
  position: absolute;
  top: calc(2.13163e-14);
  width: 100%;
  z-index: 1;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(
      1.1
    ); // You can adjust the scale factor as needed
  }
}

.img-wrapper {
  position: absolute;
  border-radius: inherit;
  inset: 0px;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
}
</style>