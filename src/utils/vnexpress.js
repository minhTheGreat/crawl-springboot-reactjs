import axios from 'axios'

export default axios.create({
  baseURL: 'https://vnexpress.net',
  headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers':'text/html; charset=utf-8',
  },
})
