import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import selectVideo from '../actions/index'

class VideoListItem extends Component {
  onClick (evt) {
    this.props.selectVideo(this.props.video)
  }

  render () {
    const { video: { snippet } } = this.props
    const imageUrl = snippet.thumbnails.default.url

    return (
      <li onClick={this.onClick.bind(this)} className="videoItem">
        <div className="video-list media">
          <div className="media-left">
            <img src={imageUrl} className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">{snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectVideo }, dispatch)
}

export default connect(null, mapDispatchToProps)(VideoListItem)
