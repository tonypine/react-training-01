import axios from 'axios'
import { API_ROOT_URL, APP_KEY } from './index'

export const FETCH_VIDEOS = 'FETCH_VIDEOS'
const URL = `${API_ROOT_URL}/search?key=${APP_KEY}&part=snippet&type=video`

const fetchVideos = (term) => {
  const url = `${URL}&q=${term}`
  const request = axios.get(url)

  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}

export default fetchVideos
