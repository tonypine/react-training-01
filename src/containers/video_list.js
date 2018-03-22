import React, { Component } from 'react'
import { connect } from 'react-redux'

import VideoListItem from './video_list_item'
import NextPageButton from './next_page_button'

class VideoList extends Component {
  renderVideoList () {
    const { videos } = this.props

    if (!videos) {
      return <li>No Vídeos</li>
    }

    return videos.map( (video) => {
      return <VideoListItem key={video.etag} video={video} />
    })
  }
  render () {
    return (
      <div>
        <ul className="videoList list-group">
          {this.renderVideoList()}
        </ul>
        <NextPageButton />
      </div>
    )
  }

  // EVENTS
  onClickNextPage (evt) {
    this.props.fetchNextPage()
  }
}

function mapStateToProps (state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(VideoList)
