<template>
  <div class="footer">
    <div class="footer__wrapper">
      <v-footer>
        <div v-fade-slide class="footer-main-content-outer__wrapper">
          <div class="footer-main-content-inner__wrapper">
            <div class="footer-main-text__wrapper">
              <h1>Let's connect and create magic.</h1>
            </div>
          </div>
          <div class="footer-main-action__wrapper">
          <CSButton
            :variant="'plain'"
            :append-icon="xs ? undefined : 'fas fa-arrow-right'"
            rounded
            @click="handleSchedCallClick"
            aria-label="Schedule a call"
            size="lg"
            :icon="xs ? 'fas fa-arrow-right' : undefined"

            :text="xs ? '' : 'Schedule a call'"
          />
            
          </div>
        </div>
        <div class="footer-bottom-content__wrapper">
          <div class="footer-bottom-links__wrapper">
            <div
              v-for="(item) in navMenuItems"
              :key="item.name"
              class="footer-bottom-link"
              @click="(e) => handleNavItemClick(item.route, e)"
            >
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="footer-copyright">
            <p>© {{ year }} Carly Sandler</p>
          </div>
        </div>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useApp } from '@/use/app'
import { getCurrentYear } from '@/utils/formatters/dates'
import type { MenuItem } from '@/components/NavbarMenuItems.vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const { navMenuItems } = useApp()
    const router = useRouter()
    const { xs } = useDisplay()
  
    const handleNavItemClick = (
      route: MenuItem['route'],
      event: MouseEvent
    ) => {
      event.preventDefault()
      router.push(route)
    }

		const handleSchedCallClick = () => {
			window.open('https://calendly.com/carly-sandler', '_blank');
		}
    const year = getCurrentYear()
    return {
      navMenuItems,
      handleNavItemClick,
      year,
			handleSchedCallClick,
      xs,
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: $padding-main-xs;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    padding: $padding-main-sm-and-md;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    padding: $padding-main-lg;
  }
  @media (min-width: map-get($grid-breakpoints, 'xl')) {
    padding: $padding-main-xl-and-up;
  }
}
.footer__wrapper {
  flex: 1 0 0px;
  width: 1px;
  height: auto;
  position: relative;

  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    flex: none;
    width: 1280px;
  }
}
.v-footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  position: relative;
  background-color: black;
  border-radius: 40px;
  opacity: 1;
  width: 100%;
  gap: 72px;
  padding: 64px 16px;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    padding: 96px 56px;
    gap: 80px;
  }
  @media (min-width: map-get($grid-breakpoints, 'lg')) {
    padding: 120px 80px 64px;
    gap: 96px;
  }
}
.footer-main-content-outer__wrapper {
  transform: perspective(1200px);
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 40px;
  height: min-content;
  justify-content: center;
  max-width: 700px;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
}
.footer-main-content-inner__wrapper {
  flex-direction: column;
  align-items: center;
  display: flex;
  flex: none;
  flex-wrap: nowrap;
  gap: 16px;
  height: min-content;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 100%;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    flex-direction: row;
  }
}
.footer-main-text__wrapper {
  height: auto;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  flex: none;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;

  @media (min-width: map-get($grid-breakpoints, 'md')) {
    flex: 1 0 0px;
    width: 1px;
  }
}
h1 {
  text-align: center;
  color: white;
  font-size: 2em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  padding: 0;
  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    font-size: 2.5em;
  }
	@media (min-width: map-get($grid-breakpoints, 'lg')) {
		font-size: 4.5em;
		
	}
}
.footer-main-action__wrapper {
  flex: none;
  height: auto;
  position: relative;
  width: auto;
  text-align: center;
}
// .v-btn {
//   background-color: white;
//   border-radius: 40px !important;
//   text-transform: none !important;
// 	letter-spacing: 0em;
// 	color: black !important;
// 	margin: 0px 8px;

//   }

//   .v-btn:hover {
//   background-color: pink !important;
// }

.footer-bottom-content__wrapper {
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 32px;
  height: min-content;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    justify-content: flex-end;
  }
}
.footer-bottom-links__wrapper {
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  height: min-content;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  max-width: max-content;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, 'sm')) {
    width: min-content;
    align-content: start;
    align-items: start;
    flex-wrap: nowrap;
    gap: 32px;
  }
}
.footer-bottom-link {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  flex: none;
  height: auto;
  white-space: pre;
  position: relative;
  color: white;
  cursor: pointer;
  > p {
    font-size: 12px;
    font-weight: 500;
  }
}
.footer-copyright {
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  opacity: 0.7;
  flex: none;
  height: auto;
  white-space: pre;
  position: relative;
  color: white;
  text-align: center;
	>p {
		font-size: 10px;
	}
}
</style>
@/utils/formatters/dates