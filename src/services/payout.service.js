import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/payout/'
const user = JSON.parse(localStorage.getItem('user'))

const getAllPayoutsForMerchant = () => {
  return axios.get('http://localhost:3001/payoutsForMerchant/' + user.id, {
    headers: authHeader(),
  })
}
const getPayout = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() })
}
const sendPayout = (id) => {
  return axios.get(API_URL + 'send/' + id, { headers: authHeader() })
}

export default {
  getAllPayoutsForMerchant,
  getPayout,
  sendPayout,
}
