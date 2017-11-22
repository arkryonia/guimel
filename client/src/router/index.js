import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import Backend from '@/components/Backend'
import CategoryBackend from '@/components/Backend/CategoryBackend'
import PostBackend from '@/components/Backend/PostBackend'
import CategoryAdd from '@/components/Backend/CategoryAdd'
import CategoryUpdate from '@/components/Backend/CategoryUpdate'
import PostAdd from '@/components/Backend/PostAdd'
import PostUpdate from '@/components/Backend/PostUpdate'
import Errors from '@/components/errors/Errors'

import Login from '@/components/auth/Login'

import Post from '@/components/posts/Post'
import PostByCat from '@/components/posts/PostsByCats'

import About from '@/components/includes/About'
import Projets from '@/components/includes/Projets'
import Realisations from '@/components/includes/Realisations'

import store from '@/store/store'

Vue.use(Router);

function requireAuth(to, from, next) {
  const logged = store.state.isUserLoggedIn
  if (!logged) {
    next({
      path: '/account/login',
      query: { redirect: '/backend' },
    })
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Backend
  {
    path: '/backend',
    name: 'Backend',
    component: Backend,
    beforeEnter: requireAuth,
    children: [
      {
        path: 'posts',
        name: 'PostBackend',
        component: PostBackend,
      },
      {
        path: 'posts/update/:id',
        name: 'PostUpdate',
        component: PostUpdate,
      },
      {
        path: 'posts/add',
        name: 'PostAdd',
        component: PostAdd,
      },
      {
        path: 'categories',
        name: 'CategoryBackend',
        component: CategoryBackend,
      },
      {
        path: 'categories/update/:id',
        name: 'CategoryUpdate',
        component: CategoryUpdate,
      },
      {
        path: 'categories/add',
        name: 'CategoryAdd',
        component: CategoryAdd,
      },
    ],
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },
  {
    path: '/category/:id',
    name: 'PostByCat',
    component: PostByCat,
  },
  /**
   * Static Pages
   */
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/realisations',
    name: 'Realisations',
    component: Realisations,
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
  },
  {
    path: '*',
    name: 'Error',
    component: Errors,
  },
]

export default new Router({
  mode: 'history',
  routes,
})
