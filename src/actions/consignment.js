import {
  CREATE_CONSIGNMENT,
  GET_ALL_CONSIGNMENTS,
  UPDATE_CONSIGNMENT,
  DELETE_CONSIGNMENT,
  CONFIRM_CONSIGNMENT,
  AUTHENTICATE_CONSIGNMENT,
  REJECT_CONSIGNMENT,
  REQUEST_FAIL,
  SET_MESSAGE,
} from './type'
import consignmentService from '../services/consignment.service'
export const retrieveConsignments = () => (dispatch) => {
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
    userid,
    itemName,
    itemSize,
    askingPrice,
    policyid,
    date_consigned,
    date_sold,
    status_code,
    venue,
  ) =>
  (dispatch) => {
    return consignmentService
      .createConsignment(userid, itemName, itemSize, askingPrice, policyid, status_code, venue)
      .then(
        (response) => {
          dispatch({
            type: CREATE_CONSIGNMENT,
          })

          dispatch({
            type: SET_MESSAGE,
            payload: response.data,
          })
          return Promise.resolve()
        },
        (error) => {
          const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          dispatch({ type: REQUEST_FAIL })
          dispatch({ type: SET_MESSAGE, payload: message })
          return Promise.reject()
        },
      )
  }
export const updateConsignment = (asking_price, policyid, venue) => (dispatch) => {
  return consignmentService.updateConsignment(asking_price, policyid, venue).then(
    (response) => {
      dispatch({
        type: UPDATE_CONSIGNMENT,
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
        type: REQUEST_FAIL,
      })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
export const confirmConsignment = (id) => (dispatch) => {
  return consignmentService.confirmConsignment(id).then((response) => {
    dispatch({
      type: CONFIRM_CONSIGNMENT,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    })
  })
}
export const rejectConsignment = (id) => (dispatch) => {
  return consignmentService.rejectConsignment(id).then((response) => {
    dispatch({
      type: REJECT_CONSIGNMENT,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    })
  })
}
export const authenticateConsignment = (id) => (dispatch) => {
  return consignmentService.authenticateConsignment(id).then((response) => {
    dispatch({
      type: AUTHENTICATE_CONSIGNMENT,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    })
  })
}
export const deleteConsignment = (id) => (dispatch) => {
  return consignmentService.deleteConsignment(id).then(
    (response) => {
      dispatch({
        type: DELETE_CONSIGNMENT,
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
        type: REQUEST_FAIL,
      })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
