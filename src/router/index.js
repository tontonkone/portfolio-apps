import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/public/Home.vue'
import About from '../views/public/About.vue'
import Contact from '../views/public/Contact.vue'
import Experience from '../views/public/Experience.vue'
import Portfolio from '../views/public/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    //definir les routes et les routes  enfants 
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/experience',
        name: 'experience',
        component: Experience
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
      },
      // dans le cas ou route no found retour à la home 
      {
        path: '/:pathMatch(.*)*', redirect: '/'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
