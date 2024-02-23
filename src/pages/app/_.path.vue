<template>
  <div class="mt-40">
		<Hero/>
    <Services />
    <Projects />

	</div>

</template>

<script lang="ts">
import Projects from '@/components/Projects.vue';
import Services from '@/components/Services.vue';
import Hero from '@/components/Hero.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {};
    },
    components: { Projects, Services, Hero }
})
</script>

<style scoped lang="scss">
</style>
