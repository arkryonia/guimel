import Router from 'vue-router'
import store from '@/store/store'

function requireAuth() {
  const logged = store.state.isUserLoggedIn
  if (logged) {
    Router.push({ name: 'Login' })
  }
}

export default requireAuth
