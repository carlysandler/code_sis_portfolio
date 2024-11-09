import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import { vuetify } from '@/plugins'
import fadeSlideDirective from '@/directives/v-fade-slide'
import animateRevealRouteChange from '@/directives/v-route-change'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('fade-slide', fadeSlideDirective)
app.directive('animate-reveal-route-change', animateRevealRouteChange)

app.mount('#app')
