import axios from 'axios'
const API_URL = 'http://localhost:3001/user/'

const login = (username, password) => {
  return axios.post(API_URL + 'signin', { username, password }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  })
}

const logout = () => {
  localStorage.removeItem('user')
}
const register = (
  email,
  password,
  firstname,
  lastname,
  userType,
  phone,
  address,
  country,
  postcode,
  division,
) => {
  return axios.post(API_URL + 'signup', {
    email,
    password,
    firstname,
    lastname,
    userType,
    phone,
    address,
    country,
    postcode,
    division,
  })
}

export default {
  register,
  login,
  logout,
}
