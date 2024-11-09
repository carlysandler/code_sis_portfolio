import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import { routes } from '@/plugins'
import type { Component } from 'vue'

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout((layout) => {
  // Resolves a layout component with layout type string.
  return import(`@/layouts/${layout}.vue`) as Promise<{
    default: Component
  }>
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

router.beforeEach((to, from, next) => {
  // Dispatch a 'routechange' event when a route change occurs
  window.dispatchEvent(new Event('routechange'))
  next()
})

export default router
