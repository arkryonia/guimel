import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import Backend from '@/components/Backend'

import CategoryAdd from '@/components/private/category/CategoryAdd'
import CategoryUpdate from '@/components/private/category/CategoryUpdate'
import CategoryBackend from '@/components/private/category/CategoryBackend'

import PostAdd from '@/components/private/post/PostAdd'
import PostUpdate from '@/components/private/post/PostUpdate'
import PostBackend from '@/components/private/post/PostBackend'

import ProjectAdd from '@/components/private/project/ProjectAdd'
import ProjectUpdate from '@/components/private/project/ProjectUpdate'
import ProjectBackend from '@/components/private/project/ProjectBackend'

import RealizationAdd from '@/components/private/realization/RealizationAdd'
import RealizationUpdate from '@/components/private/realization/RealizationUpdate'
import RealizationBackend from '@/components/private/realization/RealizationBackend'

import Errors from '@/components/errors/Errors'
import Login from '@/components/auth/Login'

import Post from '@/components/public/posts/Post'
import PostByCat from '@/components/public/posts/PostsByCats'


import About from '@/components/includes/About'

import ProjectList from '@/components/public/projects/ProjectList'
import Project from '@/components/public/projects/Project'
import RealizationList from '@/components/public/realizations/RealizationList'
import Realization from '@/components/public/realizations/Realization'

// import Realisations from '@/components/includes/Realisations'

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
      {
        path: 'projects',
        name: 'ProjectBackend',
        component: ProjectBackend,
      },
      {
        path: 'projects/update/:id',
        name: 'ProjectUpdate',
        component: ProjectUpdate,
      },
      {
        path: 'projects/add',
        name: 'ProjectAdd',
        component: ProjectAdd,
      },
      {
        path: 'realizations',
        name: 'RealizationBackend',
        component: RealizationBackend,
      },
      {
        path: 'realizations/update/:id',
        name: 'RealizationUpdate',
        component: RealizationUpdate,
      },
      {
        path: 'realizations/add',
        name: 'RealizationAdd',
        component: RealizationAdd,
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
    name: 'RealizationList',
    component: RealizationList,
  },
  {
    path: '/projets',
    name: 'Projects',
    component: ProjectList,
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: Project,
  },
  {
    path: '/realisations/:id',
    name: 'Realization',
    component: Realization,
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
