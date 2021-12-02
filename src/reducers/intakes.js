import { GET_ALL_INTAKES, TRACK_INTAKE } from '../actions/type'
const initialState = []
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_INTAKES:
      return { ...state, intake: payload }
    case TRACK_INTAKE:
      return { ...state, intake: payload }
  }
}
