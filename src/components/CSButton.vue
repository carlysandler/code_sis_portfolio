<template>
  <v-hover v-slot="{ isHovering, props }" :disabled="!hoverEffect">
    <v-btn
      :class="[
        'cs-custom-btn',
        variant,
        text === '' ? 'px-0' : 'px-2',
        { 'cs-custom-btn--hover': isHovering && hoverEffect },
        { 'full-width': fullWidth }
      ]"
      :style="{
        cursor: 'pointer',
        'background-color': isHovering ? '#FFCAFF' : 'white',
        border:
          variant === 'outlined'
            ? '0.15rem solid currentColor'
            : 'inherit'
      }"
      :outlined="variant === 'outlined'"
      :href="href"
      :rounded="rounded"
      :large="size === 'lg'"
      :small="size === 'sm'"
      flat
      :x-small="size === 'xs'"
      :aria-label="ariaLabel"
      :elevation="0"
      :variant="variant"
      :ripple="false"
			v-bind="props"
      @click="handleClick"
    >
      <template v-if="icon && !appendIcon && !text">
        <v-icon :name="icon" :size="iconSize">{{ icon }}</v-icon>
      </template>
      <div class="content-wrapper">
        <template v-if="text">
          <!-- Default slot for button text or custom content -->
          {{ text }}
        </template>
        <template v-if="appendIcon && !icon">
          <v-icon
            @mouseenter="spinIcon"
            @mouseleave="resetIcon"
            :name="appendIcon"
            :size="iconSize"
            >{{ appendIcon }}</v-icon
          >
        </template>
      </div>
    </v-btn>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CSButton',
  props: {
    variant: {
      type: String as () => 'plain' | 'outlined',
      default: 'plain'
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String as () => 'xs' | 'sm' | 'md' | 'lg',
      default: 'md'
    },
    rounded: {
      type: Boolean,
      default: true
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    ariaLabel: String,
    href: String,
    appendIcon: {
      type: String,
      default: undefined
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: Event) => {
      event.stopPropagation()
      emit('click', event)
    }

    const iconSize = computed(() => {
      if (props.size === 'xs') return 14
      return props.size === 'sm' ? 16 : 18
    })

    const textSize = computed(() => {
      return props.size === 'md' || props.size === 'lg' ? 2 : 3
    })
    const getIconMargin = computed(() => {
      if (props.text === '') return 'mr-0'
      return props.size === 'sm' ? 'mr-1' : 'mr-2'
    })

    const spinIcon = (event: MouseEvent): void => {
      const target = event.target as HTMLElement
      target.style.transition = 'transform 0.6s'
      target.style.transform = 'rotate(360deg)'
    }
    const resetIcon = (event: MouseEvent): void => {
      const target = event.target as HTMLElement
      target.style.transition = 'transform 0.6s'
      target.style.transform = 'rotate(0deg)'
    }

    return {
      handleClick,
      iconSize,
      getIconMargin,
      textSize,
      spinIcon,
      resetIcon
    }
  }
})
</script>

<style scoped lang="scss">
.cs-custom-btn {
  /* Base styles here */
  margin: 0 0px 0 0px;
  min-width: 28px !important;
  height: 45px !important;
	opacity: 1 !important;

  &--xs {
    min-width: 20px !important;
  }

  &.full-width {
    min-width: 100% !important;
    height: auto;
  }

  &:before {
    transition: opacity 0.35s ease;
  }

  .v-btn__content {
    flex: 1;
    overflow: hidden;
  }

  &--no-hover:hover::before {
		background-color: white !important;
		opacity: 1 !important;
  }

  &--no-hover.v-btn:focus::before {
    background-color: white !important;
    transition: unset;
  }

  &--no-hover.v-btn:before {
    transition: unset;
  }

  &.rounded {
    border-radius: 50% !important;
    min-width: 20px !important;

    &.v-size--small {
      min-width: 28px !important;
    }

    &.v-size--default {
      min-width: 38px !important;
    }

    &.v-size--large {
      min-width: 48px !important;
    }
  }
		.v-btn--variant-plain {
		opacity: 1 !important;
	}

  .cs-custom-btn.plain {
    padding: 0 !important;
    font-size: xx-large !important;
    cursor: pointer;
  }

  .cs-custom-btn.flat {
    border-radius: 40px !important;
    text-transform: none !important;
    letter-spacing: 0em;
    margin: 0px 8px;
  }

  .cs-custom-btn--hover:hover {
    background-color: pink !important;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .v-icon {
    margin-left: 4px;
  }
}
</style>
