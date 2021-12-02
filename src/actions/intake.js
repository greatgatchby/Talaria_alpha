import { GET_ALL_INTAKES, REQUEST_FAIL, SET_MESSAGE, TRACK_INTAKE } from './type'
import intakeService from '../services/intake.service'
export const getAllIntakes = () => (dispatch) => {
  return intakeService.getAllIntakes().then(
    (response) => {
      dispatch({
        type: GET_ALL_INTAKES,
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
export const trackIntake = (id) => (dispatch) => {
  return intakeService.trackIntake(id).then(
    (response) => {
      dispatch({
        type: TRACK_INTAKE,
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
