import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ACTIONS
import fetchNextPage from '../actions/fetch_next_page'

class NextPageButton extends Component {
  render () {
    return (
      <button onClick={this.onClick.bind(this)} className="nextPageButton btn btn-primary btn-sm">
        Next Page
      </button>
    )
  }

  // EVENT HANDLERS
  onClick (evt) {
    console.log('NextPageButton', this.props)
    this.props.fetchNextPage({
      pageToken: this.props.nextPageToken,
      term: this.props.currentTerm
    })
  }
}

function mapStateToProps (state) {
  return {
    nextPageToken: state.nextPageToken,
    currentTerm: state.currentTerm
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchNextPage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPageButton)
