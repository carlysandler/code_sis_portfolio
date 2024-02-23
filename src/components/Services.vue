<template>
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			<Label text="Services" />
			<div class="wrapper">
				<div class="content-wrapper" v-for="(item, index) in expandableItems" :key="index">
					<ExpandablePanel :header-text="item.headerText">
						<template #prepend-icon>
							<!-- Example using an SVG icon. You can replace this with any icon component you prefer -->
							 	<v-icon :icon="item.icon"></v-icon>
						</template>
						<template #content>
							<p class="theme-p-text">{{ item.content }}</p>
						</template>
					</ExpandablePanel>
				</div>

			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoremIpsum } from 'lorem-ipsum'

export default defineComponent({
	name: "Services",
	setup() {

		const lorem = new LoremIpsum({
			sentencesPerParagraph: {
				max: 8,
				min: 4
			},
			wordsPerSentence: {
				max: 16,
				min: 4
			}
		});

		const expandableItems = [
			{
				headerText: "Item 1",
				icon: "fas fa-paw",
				content: lorem.generateSentences(5)
			},
			{
				headerText: "Item 2",
				icon: "fas fa-cat",
				content: lorem.generateSentences(5)
			},
			{
				headerText: "Item 3",
				icon: "fas fa-dog",
				content: lorem.generateSentences(5)
			},
			{
				headerText: "Item 4",
				icon: "fas fa-fish",
				content: lorem.generateSentences(5)
			},
			{
				headerText: "Item 5",
				icon: "fas fa-dove",
				content: lorem.generateSentences(5)
			}
		]
		return {
			lorem,
			expandableItems
		}
	}
})
</script>

<style scoped>

.wrapper {
	flex: 0 0 auto;
	height: auto;
	position: relative;
	transform: perspective(1200px);
	width: 100%;
	z-index: 2;
	padding-bottom: 2px;
}
.content-wrapper {
	    place-content: start flex-start;
    align-items: start;
    display: flex;
    flex-flow: column;
    gap: 12px;
    height: min-content;
    overflow: hidden;
    padding: 0px;
    position: relative;
		    width: 100%;

}
</style>