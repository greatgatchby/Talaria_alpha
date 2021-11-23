import axios from 'axios'
import authHeader from './auth-header'
const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search'
const options = {
  headers: {
    'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
    'x-rapidapi-key': '31edc1357amsh0352ae1b4728e9cp18dc69jsn6e67408c0799',
  },
}
const searchSneakers = (query) => {
  return axios.get(API_URL, { headers: options.headers, params: { limit: '100', query: query } })
}

export default { searchSneakers }
