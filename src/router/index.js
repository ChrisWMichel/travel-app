import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/ViewHome.vue'
import DestinationShow from '@/views/DestinationShow.vue'
import ExperienceShow from '@/views/ExperienceShow.vue'
import NotFound from '@/views/NotFound.vue'
import sourceData from '@/data/data.json'
import Protected from '@/views/Protected.vue'
import Login from '@/views/Login.vue'
import Invoices from '@/views/Invoices.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
   // {path:"/home", redirect: {name: 'home'}},
    {
      path: '/protected',
      name: 'protected',
      components: {
        default: Protected,
        LeftSidebar: LeftSidebar
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/invoices',
      name: 'invoices',
      components:{
        default: Invoices,
        LeftSidebar: LeftSidebar
      }, 
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: DestinationShow,
      props: route => ({...route.params, id: parseInt(route.params.id)}),
      // props: true,
      beforeEnter: (to, from, next) => {
        const exists = sourceData.destinations.find(
          destination => destination.id === parseInt(to.params.id)
        )
        if (!exists) {
          return next({ 
            name: 'not-found',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          })
        }
        next()
      },
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: ExperienceShow,
          props: route => ({...route.params, id: parseInt(route.params.id)})
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if(to.params.id !== from.params.id) {
      return (
        savedPosition ? savedPosition : new Promise((resolve) => {
          setTimeout(() => {
            resolve({ top: 0, behavior: 'smooth'})
          }, 300)
        })
      )
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !window.user) {
    return next({ name: 'login', query: { redirect: to.fullPath }})
  }
  next()
})
export default router
