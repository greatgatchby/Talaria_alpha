import axios from 'axios'
import authHeader from './auth-header'
const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search'
const options = {
  headers: {
    'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
    'x-rapidapi-key': 'c0116a9c9cmshb809d32e211afd9p11f982jsncd92e1feb0be',
  },
}
const searchSneakers = (query) => {
  return axios.get(API_URL, { headers: options.headers, params: { limit: '10', query: query } })
}

export default { searchSneakers }
