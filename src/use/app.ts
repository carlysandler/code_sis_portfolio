import { ref, computed } from 'vue'
// control global state of default layout
const isNavbarExpanded = ref(false)
const NAVBAR_START_HEIGHT = '81px'
const NAVBAR_MAX_HEIGHT = '100%'
const FOOTER_START_HEIGHT = "450px"
const footerRef = ref<HTMLElement | null>(null)
const footerHeight = ref(FOOTER_START_HEIGHT);

const toggleNavbar = () => {
    isNavbarExpanded.value = !isNavbarExpanded.value
}

const navbarHeight = computed(() => {
  return isNavbarExpanded.value ? NAVBAR_MAX_HEIGHT : NAVBAR_START_HEIGHT;
});

const contentHeight = computed(() => {
  return `calc(100vh - ${navbarHeight.value} - ${footerHeight.value ?? 0})`;
});

const navMenuItems = ref([
			{ name: 'Home', route: '/home' },
			{ name: 'About', route: '/about' },
			{ name: 'Experience', route: '/experience' },
			{ name: 'Contact', route: '/contact' },
			{ name: 'Blog', route: '/blog' }
		]);


export const useApp = () => {
	return {
		isNavbarExpanded,
		NAVBAR_START_HEIGHT,
		NAVBAR_MAX_HEIGHT,
		FOOTER_START_HEIGHT,
		contentHeight,
		navbarHeight,
		toggleNavbar,
		footerRef,
		navMenuItems,
		footerHeight
	}
}