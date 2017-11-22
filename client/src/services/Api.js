import axios from 'axios'

function getAPI() {
  if (process.env.NODE_ENV === 'production') {
    return 'http://xlogbk.tecnonia.com'
  }

  return 'http://localhost:3000/api/'
}


export default () => axios.create({
  baseURL: getAPI(),
})

