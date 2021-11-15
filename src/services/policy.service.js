import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/policy'

const createPolicy = () => {
  return axios.post(API_URL, { headers: authHeader() })
}

const getAllPolicies = () => {
  return axios.get(API_URL, { headers: authHeader() })
}

const findPolicy = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}

const updatePolicy = (id) => {
  return axios.put(API_URL + id, { headers: authHeader() })
}

const deletePolicy = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() })
}

const deleteAllPolicies = () => {
  return axios.delete(API_URL, { headers: authHeader() })
}

export default {
  createPolicy,
  getAllPolicies,
  findPolicy,
  updatePolicy,
  deletePolicy,
  deleteAllPolicies,
}
