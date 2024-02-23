<template>
	<div class="navbar">
		<div class="toolbar" :class="{ 'expanded': isExpanded }">
			<div class="nav-content__wrapper">
				<div class="nav-content__inner">
					<div v-if="!isExpanded" class="open-menu__wrapper" @click="toggle">
						<div v-for="n in 3" :key="n" class="open-menu__bar" />
					</div>
					<v-btn v-else variant="plain" @click="toggle" size="x-large" :ripple="false">
						<span style="font-size: xx-large; cursor: pointer;">X</span>
					</v-btn>
				</div>
			</div>
		</div>
			<div v-if="isExpanded" class="expandable-content" :class="{ 'expanded': isExpanded }">
				<NavbarMenuItems :menuItems=navMenuItems @toggle="toggle" />
			</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useDisplay } from 'vuetify'
import codeSisLogo from '@/assets/codesis-logo.png'
import { useApp } from '@/use/app'
export default defineComponent({
	name: 'Navbar',
	props: {
		isExpanded: {
			type: Boolean,
			default: false
		},
	},
	setup(_, { emit }) {
    const {
      navMenuItems
    } = useApp()
		const { xs } = useDisplay()
		const toggle = () => {
			emit('toggle')
		}
		return {
			toggle,
			navMenuItems,
			codeSisLogo
		}
	}
})
</script>

<style lang="scss" scoped>
.navbar .toolbar {
	width: 100%;
	top: 0;
  left: 0;
	align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
	justify-content: flex-start;
	padding: $padding-xs;
	z-index: 200;
	border-bottom-width: 1px;
	border-color: $border-color-root;
	border-bottom-style: solid;
	transition: border-bottom 0.5s;

	@media (min-width: map-get($grid-breakpoints, 'sm')) {
      padding: $padding-sm-and-up;
    }
}
.toolbar.expanded {
	border-bottom: transparent;
}
.navbar .toolbar::after {
  content: '';
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  transition: bottom 0.8s ease-in, height 0.8s ease-in;
	bottom: -1px;
  transform: translateY(100%); // Off-screen initially
  z-index: 500; // Ensure it's above the expandable content but below the toolbar
}

.navbar .expandable-content {
  top: 81px; /* Height of the toolbar */
  left: 0;
  width: 100%;
  z-index: 15;
	height: calc(60vh - 81px);
  transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  transform: translateY(-100%);
  opacity: 0;
	padding: $padding-xs;

	@media (min-width: map-get($grid-breakpoints, 'sm')) {
      padding: $padding-sm-and-up;
    }
}

.navbar .expandable-content.expanded {
  transform: translateY(0);
  opacity: 1;
	transition: transform 0.3s ease-in, opacity 0.3s ease-in;

}
.nav-logo {
    max-width: 40px;
    height: auto;
    border-radius: 50%;
    background: var(--v-theme-background) !important;
    color: var(--v-theme-background) !important;
    position: relative;
    overflow: hidden;
    display: block;
    image-rendering: auto;
  }
.nav-content__wrapper {
  position: relative;
  width: 100%;
  }

  .nav-content__inner {
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 32px;
    justify-content: flex-end;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 100%;
  }
.open-menu__wrapper {
    background-color: var(--v-theme-background);
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
    height: auto;
    justify-content: center;
    overflow: visible;
    padding: 0;
    width: 91px;
    position: relative;

    .open-menu__bar {
      background-color: $icon-color-root;
      height: 1px;
      flex: none;
      width: 100%;
      overflow: hidden;
      position: relative;
    }
  }

.v-btn {
	padding: 0 !important;
}

</style>
