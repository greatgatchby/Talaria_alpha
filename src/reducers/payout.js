import { GET_ALL_PAYOUTS, FIND_ONE_PAYOUT, SEND_PAYOUT } from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_PAYOUTS:
      return { ...state, payouts: payload }
    case FIND_ONE_PAYOUT:
      return { ...state, payouts: payload }
    case SEND_PAYOUT:
      return { ...state, payouts: payload }
    default:
      return state
  }
}
