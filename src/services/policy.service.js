import axios from 'axios'
import authHeader from './auth-header'
const user = JSON.parse(localStorage.getItem('user'))

const API_URL = 'http://localhost:3001/policy/'

const createPolicy = (uid, policyTerms, policyRate, policyName) => {
  return axios.post(API_URL, { headers: authHeader(), uid, policyTerms, policyRate, policyName })
}

const getAllPolicies = () => {
  return axios.get(API_URL + user.id, { headers: authHeader() })
}

const findPolicy = (id) => {
  return axios.get(API_URL + 'find/' + id, { headers: authHeader() })
}

const updatePolicy = (id, policyTerms, policyRate, policyName) => {
  return axios.put(API_URL + id, { headers: authHeader(), policyTerms, policyRate, policyName })
}

const deletePolicy = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() })
}

const deleteAllPolicies = () => {
  return axios.delete(API_URL + 'deleteAll/' + user.userid, { headers: authHeader() })
}

export default {
  createPolicy,
  getAllPolicies,
  findPolicy,
  updatePolicy,
  deletePolicy,
  deleteAllPolicies,
}
