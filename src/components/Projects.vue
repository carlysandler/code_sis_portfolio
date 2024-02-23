<template>
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			<Label text="Projects" />
			<div class="wrapper">
				<div class="content-wrapper">
					<div class="project-group"  v-for="(group, index) in groupedProjects">
						<div class="project-single" v-for="(item, idx) in group" :key="idx">
					<Project :key="index" :project="item" />
					</div>
					</div>
					</div>
	          <CSButton
						 v-if="showSeeAllButton"
							variant="outlined"
							text="See all projects"
							size="lg"
							append-icon="fas fa-arrow-right"
							:full-width="true"
							@click="goToProjectsPage"
						 />
			</div>
			</div>
		</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { projects } from "@/constants/mock-projects"
import Project from './Project.vue';
import { useRouter } from 'vue-router'
import CSButton from './CSButton.vue';

export default defineComponent({
	name: "Projects",
	components: {
		Project,
		CSButton
	},
	setup() {
		const router = useRouter();
	

		const visibleProjects = computed(() => {
			return projects.filter(project => project.pinned).slice(0, 4);
		});

		const groupedProjects = computed(() => {
			const groups = [];
			for (let i = 0; i < visibleProjects.value.length; i += 2) {
				groups.push(visibleProjects.value.slice(i, i + 2));
			}
			return groups;
		});

		const showSeeAllButton = computed(() => {
			return projects.length > 4;
		});

		 const goToProjectsPage = (e: MouseEvent) => {
			e.preventDefault();
			router.push("/projects")
		};

		return {
			visibleProjects,
			groupedProjects,
			showSeeAllButton,
			goToProjectsPage
		}
	}
})
</script>

<style lang="scss" scoped>

.wrapper {
	place-content: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-flow: column;
    gap: 32px;
    height: min-content;
    overflow: hidden;
    padding: 0px;
    position: relative;
    width: 100%;
}

.content-wrapper {
	place-content: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-flow: column;
    gap: 32px;
    height: min-content;
    overflow: hidden;
    padding: 0px;
    position: relative;
    width: 100%;
}

.project-group {
	flex-direction: column !important;
	place-content: center;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    gap: 32px;
    height: min-content;
    overflow: hidden;
    padding: 0px;
    position: relative;
    width: 100%;
		@media (min-width: map-get($grid-breakpoints, 'lg'))  {
			flex-direction: unset !important;
		}
}
.project-single {
	flex-basis: 100%;
	width: 100%;
		@media (min-width: map-get($grid-breakpoints, 'lg'))  {
			flex-basis: calc(50% - 16px); 
		}
  /* Adjust the width as needed, considering the gap between projects */
}

.button-wrapper {
	flex-grow: 1;
}



</style>