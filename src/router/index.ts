import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rpg',
      name: 'rpg',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Rpg.vue')
    },
    {
      path: '/reg',
      component: () => import('../pages/Register.vue')
    }
  ]
})

export default router
