import Api from '@/services/Api'

export default {
  list() {
    return Api().get('Posts')
  },
  details(parameter) {
    return Api().get(`Posts/${parameter}`)
  },
  add(data, headers) {
    return Api().post('Posts', data, {
      headers,
    })
  },
  update(parameter, data, headers) {
    return Api().put(`Posts/${parameter}`, data, {
      headers,
    })
  },
  delete(parameter, headers) {
    return Api().delete(`Posts/${parameter}`, {
      headers,
    })
  },
}
