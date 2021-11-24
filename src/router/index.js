import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '@/views/About'
import Pictures from '@/views/Pictures'
import Contact from '@/views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: Pictures
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
