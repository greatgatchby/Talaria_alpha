import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/intake/'
const user = JSON.parse(localStorage.getItem('user'))

const getAllIntakes = () => {
  return axios.get(API_URL + user.id, { headers: authHeader() })
}

const getIntakeById = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}

const createIntake = () => {
  return axios.post(API_URL, { headers: authHeader() })
}

const deleteIntake = (id) => {
  return axios.delete(API_URL + '/' + id, { headers: authHeader() })
}

const deleteAllIntakes = () => {
  return axios.delete(API_URL, { headers: authHeader() })
}

export default {
  getAllIntakes,
  getIntakeById,
  createIntake,
  deleteIntake,
  deleteAllIntakes,
}
