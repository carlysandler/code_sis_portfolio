<template>
	<div class="menu">
		<div class="menu__wrapper">
			<ul>
				<li v-for="(item, index) in menuItems" :key="item.name">
					<a href="#" @click="(e) => handleClick(item.route, e)">
						<div class="list-item__content">
							<sup>{{ formatNumber(index) }}</sup>
						</div>
						<div class="list-item__content">
							<h2>{{ item.name }}</h2>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useRouter } from 'vue-router'


export type MenuItem = {
	name: string;
	route: string;
};
export default defineComponent({
	name: 'MenuItems',
	props: {
		menuItems: {
			type: Array as PropType<MenuItem[]>,
			required: true
		}
	},
	setup(_, { emit }) {
		const router = useRouter()
		const handleClick = (route: MenuItem["route"], event: MouseEvent) => {
			event.preventDefault()
			emit("toggle")
			router.push(route)
		}

		const formatNumber = (index: number) => {
			return (index + 1).toString().padStart(2, '0');
		};


		return {
			handleClick,
			formatNumber
		}
	}
})

</script>

<style lang="scss" scoped>
.menu {
	align-items: start;
	display: flex;
	flex: none;
	flex-direction: row;
	flex-wrap: nowrap;
	gap: 64px;
	height: min-content;
	justify-content: flex-start;
	overflow: visible;
	padding: 0;
	position: relative;
	width: 100%;

}

.menu__wrapper {
	align-items: start;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 10px;
	justify-content: center;
	overflow: hidden;
	padding-right: 32px;
	position: relative;
	width: 1px;

	@media (min-width: map-get($grid-breakpoints, 'sm')) {
		padding-right: 48px;
	}
}

ul {
	list-style-type: none;
	width: 100%;
	padding: 0;
}

li {
	/* Remove default list styles */
	list-style-type: none;
	margin: 0;
	padding: 0;
	flex: none;
	height: auto;
	width: 100%;
}

a {
	/* Remove default link styles */
	color: inherit;
	/* Make the color the same as the parent element */
	text-decoration: none;
	/* Remove underline */
	background-color: transparent;
	/* Remove any background */
	width: 100%;
	display: flex;
	cursor: pointer;
	flex-flow: row;
	gap: 10px;
	height: min-content;
	padding: 4px;
	position: relative;
	overflow: hidden;

}

a::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	background: linear-gradient(to right, $border-color-root 50%, black 50%);
	background-size: 200% 100%;
	transition: background-position 0.5s ease;
}

a:hover::after {
	background-position: -100% 0;
}

/**
Initial State of the Pseudo-Element: The ::after pseudo-element is positioned absolutely at the bottom of the link. The background is a linear gradient that is initially split between the $border-color-root color and black. 
The background-size is set to 200% 100% to cover twice the width of the element, ensuring that only half of the gradient is visible at a time.
Hover Effect: On hover, the background-position is shifted to -100% 0, which effectively slides the gradient to the left, revealing the black color and creating the filling effect.
Transition: The transition on background-position creates a smooth effect as the color appears to fill up from left to right.
 */

.list-item__content {
	outline: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex-shrink: 0;
	position: relative;
	height: auto;
	white-space: pre;
}

sup {
	color: var(--v-theme-text-disabled);
}

h2 {
	margin: 0;
	font-weight: 500;
	line-height: 1.25em;
	font-size: 3em;
}
</style>