import defaultLoan from '../store/initialStates/loan'
import { API_REQUEST, API_RESPONSE, APPLY, ERROR_APPLY } from '../actions/adjudicationActions'

export default function (state = defaultLoan, { type, payload }) {
  switch (type) {
    case APPLY:
      console.log(type)
      return {
        ...state,
        error: '',
        value: payload.value
      }
    case ERROR_APPLY:
      console.log(type)
      return {
        ...state,
        error: payload.error
      }
    case API_RESPONSE:
      console.log(type, payload)
      return {
        status: payload.response,
        error: ''
      }
    default:
      return state
  }
}
