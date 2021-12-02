import {
  DELETE_ALL_POLICIES,
  DELETE_POLICY,
  FIND_ONE_POLICY,
  GET_ALL_POLICIES,
  UPDATE_POLICY,
  CREATE_POLICY,
} from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case CREATE_POLICY:
      return { ...state, policies: payload }
    case GET_ALL_POLICIES:
      return { ...state, policies: payload }
    case UPDATE_POLICY:
      return { ...state, policies: payload }
    case FIND_ONE_POLICY:
      return { ...state, policies: payload }
    case DELETE_ALL_POLICIES:
      return { ...state, policies: payload }
    case DELETE_POLICY:
      return { ...state, policies: payload }
    default:
      return state
  }
}
