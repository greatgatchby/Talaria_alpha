import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/venue'

//todo add for all endpoints

const getAllVenues = (merchantid) => {
  return axios.get(API_URL + '/' + merchantid, {
    headers: authHeader(),
  })
}
const deleteVenue = (venueid) => {
  return axios.get(API_URL + '/' + venueid, {
    headers: authHeader(),
  })
}
const createVenue = (name, address, type, division, postcode, merchantid) => {
  return axios
    .post(API_URL, {
      headers: authHeader(),
      name,
      address,
      type,
      division,
      postcode,
      merchantid,
    })
    .then((response) => {
      return response.data
    })
}
export default {
  createVenue,
  getAllVenues,
  deleteVenue,
}
