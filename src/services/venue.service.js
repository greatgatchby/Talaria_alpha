import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/venue/'

const createVenue = () => {
  return axios.post(API_URL, { headers: authHeader(), body: {} })
}
const getAllVenues = () => {
  return axios.get(API_URL, { headers: authHeader() })
}
const findVenue = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}
const updateVenue = () => {
  return axios.put(API_URL, { headers: authHeader() })
}
const deleteVenue = (id) => {
  return axios.get(API_URL, { headers: authHeader() })
}

export default {
  createVenue,
  getAllVenues,
  findVenue,
  updateVenue,
  deleteVenue,
}
