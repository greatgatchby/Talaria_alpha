import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/transfer/'

const createTransfer = () => {
  return axios.post(API_URL, { headers: authHeader(), body: {} })
}
const getTransfers = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
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
