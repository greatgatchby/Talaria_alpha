import { GET_ALL_PAYOUTS, FIND_ONE_PAYOUT, SEND_PAYOUT, SET_MESSAGE, REQUEST_FAIL } from './type'
import payoutService from '../services/payout.service'
export const getPayoutsForMerchant = () => (dispatch) => {
  return payoutService.getAllPayoutsForMerchant().then(
    (response) => {
      dispatch({
        type: GET_ALL_PAYOUTS,
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
export const findPayoutById = (id) => (dispatch) => {
  return payoutService.getPayout(id).then(
    (response) => {
      dispatch({
        type: FIND_ONE_PAYOUT,
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
export const sendPayoutById = (id) => (dispatch) => {
  return payoutService.sendPayout(id).then(
    (response) => {
      dispatch({
        type: SEND_PAYOUT,
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
