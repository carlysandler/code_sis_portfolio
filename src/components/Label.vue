<template>
			<div class="header">
					<div class="header-content">
						<div class="text-wrapper">
							<div class="icon-wrapper">
								<div class="img-block">
									<v-img aspect-ratio="1" :src="arrowLeft" />
								</div>
							</div>
								<div class="p-block">
									<p class="theme-font">{{upperCase(text)}}</p>
								</div>

							</div>
						

						</div>
				</div>
</template>

<script lang="ts">
import {
	defineComponent
} from 'vue'
import arrowLeft from '@/assets/arrowleft.svg'
import upperCase from 'lodash/upperCase';


export default defineComponent({
	name: 'Label',
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	setup() {
		return {
			arrowLeft,
			upperCase
		}
	}
})


</script>

<style lang="scss" scoped>
	.header {
	place-content: start center;
    align-items: start;
    display: flex;
    flex: 0 0 auto;
    flex-flow: column;
    gap: 16px;
    height: min-content;
    overflow: hidden;
    padding: 0px;
    position: relative;
    width: 100%;
}

.header-content {
	flex: 0 0 auto;
    height: auto;
    position: relative;
    width: 100%;

}
.text-wrapper {
	align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 12px;
    height: min-content;
    justify-content: flex-start;
    overflow: hidden;
    padding: 0;
    position: relative;
}

.icon-wrapper {
	  opacity: 1;
    flex: none;
    height: 24px;
    position: relative;
    width: 24px;
}

.img-block {
	position: absolute;
    border-radius: inherit;
    inset: 0px;
	  
}

.v-img {
	display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center center;
    object-fit: cover;
    image-rendering: auto;
}

.p-block {
	outline: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    --framer-link-text-color: rgb(0, 153, 255);
    --framer-link-text-decoration: underline;
    --framer-paragraph-spacing: 0px;
    transform: none;
    opacity: 1;
    flex: 1 0 0px;
    height: auto;
    position: relative;
    white-space: pre-wrap;
    width: 1px;
    word-break: break-word;
    word-wrap: break-word;

}
.p {
	margin: 0;
	padding: 0;

}

</style>
