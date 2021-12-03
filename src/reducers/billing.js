import {
  CREATE_BILLING,
  FIND_ONE_BILLING,
  UPDATE_BILLING,
  DELETE_BILLING,
  REQUEST_FAIL,
} from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CREATE_BILLING:
      return { ...state, consignments: payload }
    case FIND_ONE_BILLING:
      return { consignments: payload }
    case UPDATE_BILLING:
      return { ...state, consignments: payload }
    case DELETE_BILLING:
      return { ...state, consignments: payload }
    case REQUEST_FAIL:
      return { ...state, consignments: null }
    default:
      return state
  }
}
