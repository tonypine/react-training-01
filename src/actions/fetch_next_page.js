import axios from 'axios'
import { API_ROOT_URL, APP_KEY } from './index'

export const FETCH_NEXT_PAGE = 'FETCH_NEXT_PAGE'
const URL = `${API_ROOT_URL}/search?key=${APP_KEY}&part=snippet&type=video`

export default ({ term, pageToken }) => {
  
  const url = `${URL}&q=${term}&pageToken=${pageToken}`
  const request = axios.get(url)

  return {
    type: FETCH_NEXT_PAGE,
    payload: request
  }
}
