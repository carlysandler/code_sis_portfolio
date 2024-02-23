import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import { routes } from '@/plugins'

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import(`@/layouts/${layout}.vue`)
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

export default router
