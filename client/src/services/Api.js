import axios from 'axios'

function getAPI() {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api.sounton.me/'
  }

  return 'http://localhost:3000/api/'
}


export default () => axios.create({
  baseURL: getAPI(),
})

