import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/intake/'
const user = JSON.parse(localStorage.getItem('user'))

const getAllIntakes = () => {
  return axios.get(API_URL + user.id, { headers: authHeader() })
}

const trackIntake = (id) => {
  return axios.get(API_URL + 'track/' + id)
}

export default {
  getAllIntakes,
  trackIntake,
}
