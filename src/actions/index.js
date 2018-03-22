export const SELECT_VIDEO = 'SELECT_VIDEO'
export const APP_KEY = 'AIzaSyCCLWLT5wYYUTKf8FmY2_FdPJm8FqtKedg'
export const API_ROOT_URL = 'https://www.googleapis.com/youtube/v3'

const selectVideo = (video) => {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}

export default selectVideo
