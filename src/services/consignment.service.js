import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/consignment'

const getAllConsignments = () => {
  return axios.get(API_URL)
}

const createConsignment = (
  email,
  item_name,
  item_size,
  asking_price,
  policyid,
  date_consigned,
  date_sold,
  status_code,
  venue,
  merchantid,
) => {
  axios.post(API_URL, {
    email,
    item_name,
    item_size,
    asking_price,
    policyid,
    date_consigned,
    date_sold,
    status_code,
    venue,
    merchantid,
  })
}

export default {
  getAllConsignments,
  createConsignment,
}
