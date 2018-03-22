import { SELECT_VIDEO } from '../actions/index'
import { FETCH_VIDEOS } from '../actions/fetch_videos'

const SelectedVideoReducer = (state=null, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return action.payload
    case FETCH_VIDEOS:
      return action.payload.data.items[0]
    default:
      return state
  }
}

export default SelectedVideoReducer
