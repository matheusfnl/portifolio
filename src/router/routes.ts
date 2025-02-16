import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    component: () => import('pages/AboutView.vue'),
  },
  {
    path: '/projects',
    component: () => import('pages/ProjectsView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/about',
  },
]

export default routes
