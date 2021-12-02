import {
  CREATE_VENUE,
  GET_ALL_VENUES,
  GET_ONE_VENUE,
  UPDATE_VENUE,
  DELETE_VENUE,
  DELETE_ALL_VENUES,
  REQUEST_FAIL,
} from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CREATE_VENUE:
      return { ...state, venue: payload }
    case GET_ALL_VENUES:
      return { venue: payload }
    case GET_ONE_VENUE:
      return { ...state, venue: payload }
    case UPDATE_VENUE:
      return { ...state, venue: payload }
    case DELETE_VENUE:
      return { ...state, venue: payload }
    case DELETE_ALL_VENUES:
      return { ...state, venue: payload }
    case REQUEST_FAIL:
      return { ...state, venue: null }
    default:
      return state
  }
}
