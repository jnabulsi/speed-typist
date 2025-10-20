import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import PlayView from '../views/Play.vue'
import ResultsView from '../views/Results.vue'
import MetricsView from '../views/Metrics.vue' 

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/play', name: 'Play', component: PlayView },
  { path: '/results', name: 'Results', component: ResultsView },
  { path: '/metrics', name: 'Metrics', component: MetricsView }, 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

