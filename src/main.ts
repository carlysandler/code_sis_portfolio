import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import { vuetify } from '@/plugins'
import fadeSlideDirective from '@/directives/v-fade-slide'
import fadeRouteChange from '@/directives/v-route-change'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('fade-slide', fadeSlideDirective)
app.directive('fade-new-route', fadeRouteChange)

app.mount('#app')
