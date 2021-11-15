import { combineReducers } from 'redux'
import auth from './auth'
import message from './message'
import consignments from './consignment'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  nav: changeState,
  auth,
  message,
})

export default rootReducer
