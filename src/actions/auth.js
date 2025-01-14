import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './type'

import AuthService from '../services/auth.service'

export const register =
  (email, password, firstname, lastname, userType, phone, address, country, postcode, division) =>
  (dispatch) => {
    return AuthService.register
      .register(
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
      )
      .then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
          })
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          })

          return Promise.resolve()
        },
        (error) => {
          const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

          dispatch({
            type: REGISTER_FAIL,
          })

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          })

          return Promise.reject
        },
      )
  }

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      })
      return Promise.resolve
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: LOGIN_FAIL,
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })
    },
  )
}
export const logout = () => (dispatch) => {
  AuthService.logout()
  dispatch({
    type: LOGOUT,
  })
}
