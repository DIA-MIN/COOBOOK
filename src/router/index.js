import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import(/* webpackPrefetch: true */ '../views/HomeView.vue')
  },
  {
    path: '/result',
    name: 'result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "result" webpackPrefetch: true */ '../views/SearchResultView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
