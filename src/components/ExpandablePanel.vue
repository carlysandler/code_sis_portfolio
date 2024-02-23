<template>
  <div class="expandable-panel" :class="{ expanded: isExpanded }">
    <div class="header" @click="toggle">
      <div class="header-wrapper">
        <div
          class="icon-wrapper"
          @mouseenter="spinIcon"
          @mouseleave="resetIcon"
        >
          <div class="icon-block">
            <slot name="prepend-icon" class="icon"
              ><!-- Slot for prepend icon --></slot
            >
          </div>
        </div>
        <div class="header-text">
          <h6>{{ headerText }}</h6>
        </div>
        <div class="">
          <CSButton
            class="toggle-btn"
            variant="plain"
						:rounded="false"
            :icon="isExpanded ? 'fas fa-minus' : 'fas fa-plus'"
            :hoverEffect="false"

            @click.stop="toggle"
          />
        </div>
      </div>
    </div>
		 <div class="content" v-show="isExpanded">
			<div class="wrapper">
	        <slot name="content"><!-- Default slot for sub content --></slot>
					</div>
	    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type SetupContext } from 'vue'

interface Props {
  headerText: string
}

export default defineComponent({
  name: 'ExpandablePanel',
  props: {
    headerText: {
      type: String,
      required: true
    }
  },
  setup(props: Props, { emit }: SetupContext) {
    const isExpanded = ref<boolean>(false)
    const toggle = (): void => {
      isExpanded.value = !isExpanded.value
    }
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
    return { isExpanded, toggle, spinIcon, resetIcon }
  }
})
</script>

<style lang="scss" scoped>
/* CSS remains the same as before */
.expandable-panel {
  flex: 0 0 auto;
  height: auto;
  position: relative;
  width: 100%;
	border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: $border-color-root;
  border-style: solid;
}

.expandable-panel.expanded .content {
	max-height: 100vh;
  transform: scaleY(1);
  transform-origin: top;
  transition: max-height 2.4s ease, transform 1.5 ease; // Smooth transition
	place-content: start flex-start;
    align-items: start;
    display: flex;
    flex: 0 0 auto;
    flex-flow: column;
    gap: 10px;
    height: min-content;
    overflow: visible;
    padding: 0px 20px 20px 0px;
    position: relative;
    width: 100%;
}

.expandable-panel.expanded .wrapper {
	outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    opacity: 1;
}

.framer-RZ1f1 .framer-rsbw81 {
    flex: 0 0 auto;
    height: auto;
    position: relative;
    user-select: none;
    white-space: pre-wrap;
    width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
}
.expandable-panel .header {
  place-content: start flex-start;
  align-items: start;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  gap: 0px;
  height: min-content;
  overflow: hidden;
  padding: 16px 0px;
  position: relative;
  width: 100%;
  opacity: 1;
}

.expandable-panel .header .header-wrapper {
  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 16px;
  height: min-content;
  overflow: visible;
  padding: 0px;
  position: relative;
  user-select: none;
  width: 100%;
}

.expandable-panel .header .icon-wrapper {
  flex: 0 0 auto;
  height: 34px;
  position: relative;
  width: 34px;
}
.expandable-panel .header .icon-block {
  position: absolute;
  border-radius: inherit;
  inset: 4px 0 0 0;
}
.expandable-panel .header .icon {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
}

.expandable-panel .header .header-text {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  -moz-stack-sizing: 0px;
  transform: none;
  opacity: 1;
  flex: 1 0 0px;
  height: auto;
  position: relative;
  white-space: pre-wrap;
  width: 1px;
  word-break: break-word;
  overflow-wrap: break-word;
}
.expandable-panel .header h3 {
  flex-grow: 1;
}

.expandable-panel .toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
}

/* Adjust based on the actual content size for a smoother transition */
// .expandable-panel .content[style*='display: block'] {
//   max-height: 100vh; /* Adjust as needed */
// }
.content {
  max-height: 0;
  overflow: hidden;
  transform: scaleY(0); // Initially hidden
  transform-origin: top; // Expand from top
  transition: max-height 2.4s ease, transform 1.5 ease; // Smooth transition

}
</style>
