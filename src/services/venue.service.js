import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/venue'
const getAllVenues = () => {
  return axios.get(API_URL)
}

const addVenue = (id, name, address, type) => {
  return axios
    .post(API_URL, {
      id,
      name,
      address,
      type,
    })
    .then((response) => {
      return response.data
    })
}
