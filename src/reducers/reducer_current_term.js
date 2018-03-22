import { SET_CURRENT_TERM } from '../actions/set_current_term'

export default (state=null, action) => {
  switch (action.type) {
    case SET_CURRENT_TERM:
      return action.payload
    default:
      return state
  }
}
