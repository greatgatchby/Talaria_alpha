import billingService from '../services/billing.service'
import {
  CREATE_BILLING,
  FIND_ONE_BILLING,
  UPDATE_BILLING,
  DELETE_BILLING,
  REQUEST_FAIL,
  SET_MESSAGE,
} from './type'
export const createBilling = (email, name, country_code, number) => (dispatch) => {
  return billingService.createBilling(email, name, country_code, number).then(
    (response) => {
      dispatch({
        type: CREATE_BILLING,
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
export const findOneBilling = (id) => (dispatch) => {
  return billingService.findOneBilling(id).then(
    (response) => {
      dispatch({
        type: FIND_ONE_BILLING,
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
export const updateBilling = (id) => (dispatch) => {
  return billingService.updateBilling(id).then(
    (response) => {
      dispatch({
        type: UPDATE_BILLING,
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
export const deleteBilling = (id) => (dispatch) => {
  return billingService.deleteBilling(id).then(
    (response) => {
      dispatch({
        type: DELETE_BILLING,
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
