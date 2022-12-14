import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "profile" */ '../user/UserProfile.vue')
  },
  {
    path: '/user/profile/test',
    name: 'TestComponent',
    component: () => import(/* webpackChunkName: "TestComponent" */ '../user/TestComponent.vue')
  }      
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
