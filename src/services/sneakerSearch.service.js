import axios from 'axios'
import authHeader from './auth-header'
const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search'
const options = {
  params: { limit: '100', query: 'red' },
  headers: {
    'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
    'x-rapidapi-key': '31edc1357amsh0352ae1b4728e9cp18dc69jsn6e67408c0799',
  },
}
const searchSneakers = () => {
  return axios.get(API_URL, { headers: options.headers, params: options.params })
}

export default searchSneakers
