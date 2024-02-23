import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/app/_.path.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/about.vue')
  },
  {
    path: '/projects',
    component: () => import('@/pages/projects.vue')
  },
  {
    path: '/experience',
    component: () => import('@/pages/experience.vue')
  },
  {
    path: '/reviews',
    component: () => import('@/pages/reviews.vue')
  },
  {
    path: '/contact',
    component: () => import('@/pages/contact.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

export default routes
