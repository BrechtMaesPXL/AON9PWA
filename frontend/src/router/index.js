import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// Preload the Offline View component

import('../views/AddUser.vue').catch(() => {});
import('../views/DetailUser.vue').catch(() => {});
import('../views/HomeView.vue').catch(() => {});



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AddData',
      name: 'addData',
      component: () => import('../views/AddUser.vue'),
    },
    {
      path: '/DetailUser/:id',
      name: 'detailUser',
      component: () => import('../views/DetailUser.vue'),
      props: true,
    },
  ]
})
export default router
