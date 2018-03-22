export const SET_CURRENT_TERM = 'SET_CURRENT_TERM'

const setCurrentTerm = (term) => {
  return {
    type: SET_CURRENT_TERM,
    payload: term
  }
}

export default setCurrentTerm
