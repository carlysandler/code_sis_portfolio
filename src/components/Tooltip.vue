<template>
  <v-tooltip
    v-model="modelValue"
    :left="position == 'left'"
    :right="position == 'right'"
    :top="position == 'top'"
    :bottom="position == 'bottom'"
    :disabled="(!array && !text) || disabled"
    :content-class="
      'uc-tooltip__content ' + (!modelValue ? 'hide' : '')
    "
    :open-on-hover="true"
    :open-on-click="false"
    :open-on-focus="false"
    :internal-activator="false"
    :max-width="500"
    :close-delay="2000"
  >
    <template #activator="{ on: tooltip, attrs }">
      <div
        v-click-outside="{
          handler: () => (modelValue = false),
          include: getElements
        }"
        :class="overflowHidden ? 'overflow-hidden d-flex' : ''"
        v-bind="attrs"
        v-on="{ ...tooltip }"
        @click="activateTooltip()"
        @mouseenter="openWithDelay()"
        @mouseleave="
          modelValue = false;
          resetTimeout();
        "
      >
        <slot />
      </div>
    </template>
    <span v-if="text">
      {{ text }}
    </span>
    <span v-else-if="array">
      <div
        v-for="val of array"
        :key="val"
        :style="isContentClickable ? 'cursor: pointer' : ''"
        @click="$emit('click', val)"
      >
        {{ val }}
      </div>
    </span>
  </v-tooltip>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
const props = defineProps({
  array: {
    type: Array as PropType<string[]>,
    default: null
  },
  text: {
    type: [String, Number],
    default: null
  },
  position: {
    type: String,
    default: 'left'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  overflowHidden: {
    type: Boolean,
    default: true
  },
  isContentClickable: {
    type: Boolean,
    default: false
  }
})
const modelValue = ref(false)
const getElements = () => {
  const elements = document.querySelectorAll('.uc-tooltip__content')
  return elements.length !== 0 ? [...elements] : []
}
let tooltipActivationTimeout: ReturnType<typeof setTimeout>
const activateTooltip = () => {
  setTimeout(() => {
    modelValue.value = false
  }, 3000)
}

const openWithDelay = () => {
  tooltipActivationTimeout = setTimeout(() => {
    modelValue.value = true
  }, 350)
}

const resetTimeout = () => {
  clearTimeout(tooltipActivationTimeout)
}
</script>

<style lang="scss">
.uc-tooltip__content {
  transition: none !important;

  &.hide {
    display: none;
  }

  pointer-events: unset;
}
</style>
