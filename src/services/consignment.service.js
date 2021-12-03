import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/consignment'
const user = JSON.parse(localStorage.getItem('user'))

const getAllConsignments = () => {
  return axios.get(API_URL + '/' + user.id, {
    headers: authHeader(),
  })
}

const createConsignment = (
  userid,
  itemName,
  itemSize,
  askingPrice,
  intakeType,
  policyid,
  venue,
  merchantid,
) => {
  return axios
    .post(
      API_URL,
      {
        userid,
        itemName,
        itemSize,
        askingPrice,
        policyid,
        venue,
        merchantid,
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
}

const updateConsignment = (asking_price, policyid, venue) => {
  return axios
    .update(API_URL, {
      headers: authHeader(),
      asking_price,
      policyid,
      venue,
    })
    .then((response) => {
      return response.data
    })
}
const confirmConsignment = (consignmentid) => {
  return axios.put(API_URL + '/confirm', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}

const rejectConsignment = (consignmentid) => {
  return axios.put(API_URL + '/reject', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}
const authenticateConsignment = (consignmentid) => {
  return axios.put(API_URL + '/authenticate', {
    headers: { authHeader },
    body: { consignmentid: consignmentid },
  })
}
const deleteConsignment = (consignmentid) => {
  return axios.delete(API_URL + '/' + consignmentid, {
    headers: { authHeader },
  })
}
const deleteAllConsignments = (consignmentid) => {
  return axios.delete(API_URL + '/' + consignmentid, {
    headers: { authHeader },
  })
}

export default {
  getAllConsignments,
  createConsignment,
  updateConsignment,
  confirmConsignment,
  rejectConsignment,
  authenticateConsignment,
  deleteConsignment,
  deleteAllConsignments,
}
