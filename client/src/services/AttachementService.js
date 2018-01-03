import Api from '@/services/Api'

export default {
  upload(container, headers) {
    return Api().post(`Attachements/${container}/upload`, {
      headers,
      'Content-Type': 'multipart/form-data',
    })
  },
  download(container, file, headers) {
    return Api().get(`Attachements/${container}/download/${file}`, {
      headers,
    })
  },
  all(container, headers) {
    return Api().get(`Attachements/${container}/files`, {
      headers,
    })
  },
}
