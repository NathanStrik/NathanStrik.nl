import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Regeleindeverwijderaar from '../views/Linebreakremover.vue'
import Markdownverwerker from '../views/Markdown.vue'
import Rechtenvrijbeeld from '../views/Rechtenvrijbeeld.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'NathanStrik',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/linebreakremover',
    name: 'Regeleindeverwijderaar',
    component: Regeleindeverwijderaar
  },
  {
    path: '/rechtenvrijbeeld',
    name: 'Rechtenvrijbeeld',
    component: Rechtenvrijbeeld
  },
  {
    path: '/markdown',
    name: 'Markdownverwerker',
    component: Markdownverwerker
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
