import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('Users', credentials)
  },
  login(credentials) {
    return Api().post('Users/login', credentials)
  },
}
