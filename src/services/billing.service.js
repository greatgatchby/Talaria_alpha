import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3001/billing'

const createBilling = (
  billing_type,
  userid,
  iban,
  street,
  city,
  country,
  postcode,
  sort_codee,
  account_number,
) => {
  return axios
    .post(API_URL, {
      headers: { authHeader },
      billing_type,
      userid,
      iban,
      street,
      city,
      country,
      postcode,
      sort_codee,
      account_number,
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}

const getBillingByid = (id) => {
  return axios.get(API_URL + '/' + id)
}
const getAllBilling = () => {
  return axios.get(API_URL)
}
const updateBilling = () => {
  return axios.get(API_URL)
}
const deleteBilling = (id) => {
  return axios.delete(API_URL + '/' + id)
}
const deleteAllBilling = (id) => {
  return axios.delete(API_URL)
}

export default {
  createBilling,
  getBillingByid,
  getAllBilling,
  updateBilling,
  deleteBilling,
  deleteAllBilling,
}
