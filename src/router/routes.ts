import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/about',
  },
  {
    path: '/about',
    component: () => import('pages/AboutView.vue'),
  },
]

export default routes
