import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// REDUX
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider, connect } from 'react-redux'

// ACTION CREATORS
import fetchVideos from './actions/fetch_videos'
import setCurrentTerm from './actions/set_current_term'

// REDUCERS
import rootReducer from './reducers/index'

// CONTAINERS
import SearchBar from './containers/search_bar'
import VideoDetail from './containers/video_detail'
import VideoList from './containers/video_list'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(rootReducer)

class App extends Component {
  componentDidMount () {
    this.props.fetchVideos('anime')
    this.props.setCurrentTerm('anime')
  }

  render () {
    return (
      <div>
        <SearchBar />
        <div className="row">
          <div className="col-md-7 col-lg-8">
            <VideoDetail />
          </div>
          <div className="col-md-5 col-lg-4">
            <VideoList />
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchVideos, setCurrentTerm }, dispatch)
}

const ConnectedApp = connect(null, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('.container')
)
