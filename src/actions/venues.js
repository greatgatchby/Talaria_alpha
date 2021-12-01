import {
  CREATE_VENUE,
  CREATE_VENUE_FAIL,
  REQUEST_FAIL,
  GET_ALL_VENUES,
  GET_VENUE,
  SET_MESSAGE,
  DELETE_VENUE,
  DELETE_ALL_VENUES,
  UPDATE_VENUE,
} from '/.type'
import venueService from '../services/venue.service'
import {response} from "express";
//todo add one for each action (ie getOne, getAll, deleteOne, deleteAll, updateOne)
export const retrieveVenue = (dispatch) => {
  return venueService.getAllVenues().then(
    (response) => {
      dispatch({
        type: GET_ALL_VENUES,
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
export const createVenue = (name, address, type, division, postcode, merchantid) => (dispatch) => {
  return venueService.createVenue(name, address, type, division, postcode, merchantid).then(
    (response) => {
      dispatch({
        type: CREATE_VENUE,
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
      dispatch({ type: CREATE_VENUE_FAIL })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
