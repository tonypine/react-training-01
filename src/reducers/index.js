import { combineReducers } from 'redux'
import SelectedVideoReducer from './reducer_select_video'
import FetchVideoReducer from './reducer_fetch_videos'
import CurrentTermReducer from './reducer_current_term'
import NextPageTokenReducer from './reducer_next_page_token'

const rootReducer = combineReducers({
  currentTerm: CurrentTermReducer,
  nextPageToken: NextPageTokenReducer,
  selectedVideo: SelectedVideoReducer,
  videos: FetchVideoReducer
})

export default rootReducer
