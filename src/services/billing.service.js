import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/billing/'
const user = JSON.parse(localStorage.getItem('user'))

const createBilling = (
  email,
  name,
  country_code,
  number,
  userid,
) => {
  return axios
    .post(API_URL, {
      headers: { authHeader },
      email,
      name,
      country_code,
      number,
      user.userid,
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}

const findOneBilling = (id) => {
  return axios.get(API_URL + id)
}
const updateBilling = (id) => {
  return axios.get(API_URL + id)
}
const deleteBilling = (id) => {
  return axios.delete(API_URL + id)
}

export default {
  createBilling,
  findOneBilling,
  updateBilling,
  deleteBilling,
}
