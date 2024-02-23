<template>
  <div class="project">
    <a :href="project.link">
      <ImageDisplay :src="project.img" :alt="project.name" />
      <div class="info-wrapper">
        <div class="project-name">
          <h6>{{ project.name }}</h6>
        </div>
        <div class="skills-wrapper">
          <div
            class="skill-wrapper"
            v-for="(skill, index) in project.skills"
            :key="index"
          >
            <div class="skill-name">
              <p>{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.project {
  flex: 0 0 50%;
  height: auto;
  position: relative;
  width: 100%;
}

a {
  background-color: rgb(242, 244, 247);
  width: 100%;
  border-radius: 40px;
  border: none;
  opacity: 1;
  transform: perspective(1200px);
  place-content: start flex-end;
  align-items: start;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  gap: 24px;
  height: min-content;
  overflow: hidden;
  padding: 0px 0px 24px;
  position: relative;
  text-decoration: none;
  transform-origin: 50% 50% 0px;
  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    padding: 0px 0px 32px;
  }
}

.info-wrapper {
  place-content: start flex-end;
  align-items: start;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 16px;
  height: min-content;
  overflow: visible;
  padding: 0px 40px;
  position: relative;
  width: 100%;
  transform: none;
  transform-origin: 50% 50% 0px;
  opacity: 1;
}

.project-name {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  transform-origin: 50% 50% 0px;
  opacity: 1;
  flex: 0 0 auto;
  height: auto;
  position: relative;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  color: black;
  overflow-wrap: break-word;
}
h6 {
  text-transform: capitalize;
  line-height: 1.3em;
  font-weight: 400;
}

.skills-wrapper {
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 12px;
  height: min-content;
  overflow: visible;
  padding: 0px;
  position: relative;
  width: 100%;
}

.skill-wrapper {
  border-bottom-width: 1px;
  border-color: black;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  border-radius: 100px;
  transform: none;
  transform-origin: 50% 50% 0px;
  opacity: 1;
  place-content: center;
  align-items: center;
  display: flex;
  flex-flow: row;
  gap: 10px;
  height: auto;
  overflow: hidden;
  padding: 2px 10px;
  position: relative;
  width: auto;
}

.skill-name {
  flex: 0 0 auto;
  height: auto;
  position: relative;
  white-space: pre;
  width: auto;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
}
p {
  font-size: 12px;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  text-align: start;
  line-height: 2em;
  color: black;
}
</style>
