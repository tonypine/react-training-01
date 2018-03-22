import { FETCH_VIDEOS } from '../actions/fetch_videos'
import { FETCH_NEXT_PAGE } from '../actions/fetch_next_page'

export default function (state=null, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload.data.items
    case FETCH_NEXT_PAGE:
      return action.payload.data.items
    default:
      return state
  }
}
