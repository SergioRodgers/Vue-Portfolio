import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component:() => import( '../views/Resume.vue')
  }, 
  {
    path: '/projects',
    name: 'Projects',
    component:() => import( '../components/projects.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component:() => import( '../components/testies.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component:() => import( '../components/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router