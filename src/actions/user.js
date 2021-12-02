import { GET_USER, REQUEST_FAIL, SET_MESSAGE, UPDATE_USER } from './type'
import userService from '../services/user.service'
export const getUser = (id) => (dispatch) => {
  return userService.findUser(id).then(
    (response) => {
      dispatch({
        type: GET_USER,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      })
      return Promise.resolve
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: REQUEST_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    },
  )
}
export const updateUser = (email, phone, address, country, postcode, division) => (dispatch) => {
  return userService.updateUser(email, phone, address, country, postcode, division).then(
    (response) => {
      dispatch({
        type: UPDATE_USER,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      })
      return Promise.resolve
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: REQUEST_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    },
  )
}
