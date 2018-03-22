import React, { Component } from 'react'
import { connect } from 'react-redux'

class VideoDetail extends Component {
  renderEmpty () {
    return <div>No Video Selected</div>
  }

  render () {
    const video = this.props.selectedVideo

    if (!video) {
      return this.renderEmpty()
    }

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
      <div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url} className="embed-responsive-item"></iframe>
        </div>
        <div className="details">
          <h3 className="video-title">{video.snippet.title}</h3>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    selectedVideo: state.selectedVideo
  }
}

export default connect(mapStateToProps)(VideoDetail)
