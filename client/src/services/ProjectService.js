import Api from '@/services/Api'

export default {
  list() {
    return Api().get('Projects')
  },
  details(parameter) {
    return Api().get(`Projects/${parameter}`)
  },
  add(data, headers) {
    return Api().post('Projects', data, {
      headers,
    })
  },
  update(parameter, data, headers) {
    return Api().put(`Projects/${parameter}`, data, {
      headers,
    })
  },
  delete(parameter, headers) {
    return Api().delete(`Projects/${parameter}`, {
      headers,
    })
  },
}
