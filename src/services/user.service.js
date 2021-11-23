import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://localhost:3001/user/'
const user = localStorage.getItem('user')
const updateUser = () => {
  return axios.put(API_URL + user.userid, { headers: authHeader() })
}
const findUser = () => {
  return axios.get(API_URL + user.userid, { headers: authHeader() })
}
const findVendors = () => {
  return axios.put('http://localhost/vendor/' + user.userid, { headers: authHeader() })
}

export default {
  updateUser,
  findUser,
  findVendors,
}
