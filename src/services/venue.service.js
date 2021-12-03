import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/venue/'
const user = JSON.parse(localStorage.getItem('user'))

const createVenue = (
  venueName,
  venueType,
  venueAddress,
  venuePostcode,
  venueCountry,
  venueCity,
  venueDivision,
  merchantid,
) => {
  return axios
    .post(API_URL, {
      headers: authHeader(),
      venueName,
      venueType,
      venueAddress,
      venuePostcode,
      venueCountry,
      venueCity,
      venueDivision,
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

const updateVenue = (
  venueid,
  venueName,
  venueAddress,
  venuePostcode,
  venueCountry,
  venueCity,
  venueDivision,
) => {
  return axios.put(API_URL + venueid, {
    headers: authHeader(),
    venueid,
    venueName,
    venueAddress,
    venuePostcode,
    venueCountry,
    venueCity,
    venueDivision,
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
