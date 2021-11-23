import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/transfer/'
const user = JSON.parse(localStorage.getItem('user'))

const createTransfer = () => {
  return axios.post(API_URL, { headers: authHeader(), body: {} })
}
const getTransfers = () => {
  return axios.get(API_URL /*+ user.id*/, { headers: authHeader() })
}

const initiateTransfer = (id) => {
  return axios.get('http://localhost:3001/initiate-transfer/' + id, { headers: authHeader() })
}

const deleteTransfer = () => {
  return axios.delete(API_URL, { headers: authHeader() })
}

export default {
  createTransfer,
  getTransfers,
  initiateTransfer,
  deleteTransfer,
}
