import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notfound from '../views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Wasateam - home',
      content: {
        description: 'This is home description',
      },
    },
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta: {
      title: 'Wasateam - users',
      content: {
        description: 'This is users description',
      },
    },
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/Input.vue'),
    meta: {
      title: 'Wasateam - input',
      content: {
        description: 'This is input description',
      },
    },
  },
  {
    path: '*',
    name: 'Notfound',
    component: Notfound,
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let meta = document.createElement('meta')
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', to.meta.content.description)
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
