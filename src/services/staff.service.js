import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/staff'

const createStaffMember = () => {
  return axios.post(API_URL)
}

const getStaffByMerchantid = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}

const getStaffByid = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}

const updateStaff = (id) => {
  return axios.update(API_URL + id, { headers: authHeader() })
}

const deleteStaff = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() })
}

const deleteAllStaff = () => {
  return axios.delete(API_URL, { headers: authHeader() })
}

export default {
  createStaffMember,
  getStaffByMerchantid,
  getStaffByid,
  updateStaff,
  deleteStaff,
  deleteAllStaff,
}
