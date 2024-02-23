<template>
  <v-app>
      <Navbar 
				:isExpanded="isNavbarExpanded"
				@toggle="toggleNavbar" 
				@close-navbar="isNavbarExpanded = false"
			/>
			<div class="overflow-hidden">
      <v-main :style="{ minHeight: contentHeight, paddingTop: isNavbarExpanded ? '35vh' : navbarHeight, overflowY: 'hidden' }">
        <router-view></router-view>
      </v-main>
      <Footer
				ref="footerRef"
			/>
			</div>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, watchEffect } from 'vue'
import { useApp } from '@/use/app';
import { useDisplay } from 'vuetify'
const {
	isNavbarExpanded,
	contentHeight,
	toggleNavbar,
	navbarHeight,
	footerRef,
	footerHeight
} = useApp()

onMounted(() => {
	watchEffect(() => {
		if (footerRef.value) {
			footerHeight.value = `${footerRef.value.clientHeight}px`;
		}
	});
});


</script>

<style lang="scss">
.v-app {
	height: 100vh;
	width: auto;
}
</style>
