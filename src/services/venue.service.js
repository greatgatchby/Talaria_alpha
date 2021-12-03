import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/venue/'
const user = JSON.parse(localStorage.getItem('user'))

const createVenue = (
  venueName,
  venueType,
  address,
  postcode,
  country,
  city,
  division,
  mercahntid,
) => {
  return axios
    .post(API_URL, {
      headers: authHeader(),
      venueName,
      venueType,
      address,
      postcode,
      country,
      city,
      division,
      merchantid: user.id,
    })
    .then((response) => {
      return response.data
    })
}
const getAllVenues = () => {
  return axios.get(API_URL + user.id, {
    headers: authHeader(),
  })
}

const findOneVenue = (venueid) => {
  return axios.get(API_URL + venueid, {
    headers: authHeader(),
  })
}

const updateVenue = (venueid, venueName, address, postcode, country, city, division) => {
  return axios.put(API_URL + venueid, {
    headers: authHeader(),
    venueName,
    address,
    postcode,
    country,
    city,
    division,
  })
}

const deleteVenue = (venueid) => {
  return axios.delete(API_URL + venueid, {
    headers: authHeader(),
  })
}
const deleteAllVenues = (id) => {
  return axios.get(API_URL + 'deleteAll/' + id, {
    headers: authHeader(),
  })
}

export default {
  createVenue,
  getAllVenues,
  findOneVenue,
  updateVenue,
  deleteVenue,
  deleteAllVenues,
}
