import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', alias: "/",
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: () => import('../views/CreateUserView.vue')
    }, 
    {
      path: '/users/:id',
      name: 'User',
      component: () => import('../views/UserView.vue')
    }
  ]
})

export default router
