import Api from '@/services/Api'

export default {
  list() {
    return Api().get('Realizations')
  },
  details(parameter) {
    return Api().get(`Realizations/${parameter}`)
  },
  add(data, headers) {
    return Api().post('Realizations', data, {
      headers,
    })
  },
  update(parameter, data, headers) {
    return Api().put(`Realizations/${parameter}`, data, {
      headers,
    })
  },
  delete(parameter, headers) {
    return Api().delete(`Realizations/${parameter}`, {
      headers,
    })
  },
}
