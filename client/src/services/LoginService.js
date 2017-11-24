import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('Accounts', credentials)
  },
  login(credentials) {
    return Api().post('Accounts/login', credentials)
  },
}
