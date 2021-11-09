import {
  CREATE_CONSIGNMENT,
  CREATE_CONSIGNMENT_FAIL,
  GET_ALL_CONSIGNMENTS,
  UPDATE_CONSIGNMENT_FAIL,
  CONFIRM_CONSIGNMENT,
  AUTHENTICATE_CONSIGNMENT,
  REJECT_CONSIGNMENT,
  REQUEST_FAIL,
  SET_MESSAGE,
} from './type'
import consignmentService from '../services/consignment.service'
export const retrieveConsignments = (dispatch) => {
  return consignmentService.getAllConsignments().then(
    (response) => {
      dispatch({
        type: GET_ALL_CONSIGNMENTS,
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
export const createConsignment =
  (
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
  ) =>
  (dispatch) => {
    return consignmentService
      .createConsignment(
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
      )
      .then(
        (response) => {
          dispatch({
            type: CREATE_CONSIGNMENT,
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
          dispatch({ type: CREATE_CONSIGNMENT_FAIL })
          dispatch({ type: SET_MESSAGE, payload: message })
          return Promise.reject()
        },
      )
  }
