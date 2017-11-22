import Api from '@/services/Api'

export default {
  list() {
    return Api().get('Categories')
  },
  details(parameter) {
    return Api().get(`Categories/${parameter}`)
  },
  add(data, headers) {
    return Api().post('Categories', data, {
      headers,
    })
  },
  update(parameter, data, headers) {
    return Api().put(`Categories/${parameter}`, data, {
      headers,
    })
  },
  delete(parameter, headers) {
    return Api().delete(`Categories/${parameter}`, {
      headers,
    })
  },
}
