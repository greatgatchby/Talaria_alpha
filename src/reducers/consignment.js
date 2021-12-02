import {
  CREATE_CONSIGNMENT,
  GET_ALL_CONSIGNMENTS,
  CONFIRM_CONSIGNMENT,
  AUTHENTICATE_CONSIGNMENT,
  REJECT_CONSIGNMENT,
  REQUEST_FAIL,
} from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CREATE_CONSIGNMENT:
      return { ...state, consignments: payload }
    case GET_ALL_CONSIGNMENTS:
      return { consignments: payload }
    case CONFIRM_CONSIGNMENT:
      return { ...state, consignments: payload }
    case AUTHENTICATE_CONSIGNMENT:
      return { ...state, consignments: payload }
    case REJECT_CONSIGNMENT:
      return { ...state, consignments: payload }
    case REQUEST_FAIL:
      return { ...state, consignments: null }
    default:
      return state
  }
}
