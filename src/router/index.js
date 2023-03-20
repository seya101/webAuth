import { createRouter, createWebHistory } from 'vue-router'

// Route Guard
import { projectAuth } from '../firebase/config'

// auth guards
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser

  if (!user) {
    next({ name: 'Home'})
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'UserHome' })
  } else {
    next()
  }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/auth/Signup.vue'),
        beforeEnter: requireNoAuth
      }
      ,
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Home.vue'),
        beforeEnter: requireNoAuth
      }
      ,
      {
        path: '/resetpassword',
        name: 'ResetPassword',
        component: () => import('../views/auth/ResetPassword.vue'),
        beforeEnter: requireNoAuth
      }
      ,
      {
        path: '/successresetpassword',
        name: 'SuccessPage',
        component: () => import('../components/SuccessPage.vue'),
        beforeEnter: requireNoAuth
      }
      ,
      {
        path: '/home',
        name: 'UserHome',
        component: () => import('../views/UserHome.vue'),
        beforeEnter: requiredAuth
      }
      ,
      // Catch All 404
      {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')
      }
    ]
})

export default router
