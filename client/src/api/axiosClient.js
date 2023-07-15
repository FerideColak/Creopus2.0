import axios from 'axios'
import queryString from 'query-string'

const baseUrl = 'http://127.0.0.1:5000/api/v1/'
const getToken = () => localStorage.getItem('token')
// const getToken = localStorage.getItem('token')
// console.log(getToken);
console.log(getToken())
const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: params => queryString.stringify({ params })
})

axiosClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  }
})

axiosClient.interceptors.response.use(response => {
  if (response && response.data) return response.data
  return response
}, err => {
  if (!err.response) {
    return alert(err)
  }
  throw err.response
})

export default axiosClient