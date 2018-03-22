import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchVideos from '../actions/fetch_videos'
import setCurrentTerm from '../actions/set_current_term'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group searchBar">
        <input type="text" className="form-control form-control-lg" onChange={this.onnChangeInput.bind(this)} value={this.state.value}/>
        <div className="input-group-btn">
          <button type="submit" className="btn btn-primary btn-lg">
            Search
          </button>
        </div>
      </form>
    )
  }

  onFormSubmit (evt) {
    evt.preventDefault()

    this.props.fetchVideos(this.state.value)
    this.props.setCurrentTerm(this.state.value)
  }

  onnChangeInput ({ target: { value } }) {
    this.setState({ value })
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchVideos, setCurrentTerm }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
