import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChooseView from '../views/ChooseView.vue'
import FinishView from '../views/FinishView.vue'
import ShareView from '../views/ShareView.vue'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/build',
      name: 'choose',
      component: ChooseView,
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView,
    },
    {
      path: '/merrychristmas/:id',
      name: 'share',
      component: ShareView,
    }
  ],
})

export default router
