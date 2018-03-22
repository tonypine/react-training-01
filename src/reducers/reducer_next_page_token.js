import { FETCH_VIDEOS } from '../actions/fetch_videos'
import { FETCH_NEXT_PAGE } from '../actions/fetch_next_page'

export default (state=null, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload.data.nextPageToken
    case FETCH_NEXT_PAGE:
      return action.payload.data.nextPageToken
    default:
      return state
  }
}
