import defaultBusiness from '../store/initialStates/business'
import { ERROR_VALIDATE_BUSINESS_ATTRIBUTES, UPDATE_BUSINESS_ATTRIBUTES } from '../actions/businessActions'

export default function (state = defaultBusiness, { type, payload }) {
  switch (type) {
    case UPDATE_BUSINESS_ATTRIBUTES:
      console.log(type)
      return {
        ...state,
        [payload.name]: {
          value: payload.value,
          error: ''
        }
      }
    case ERROR_VALIDATE_BUSINESS_ATTRIBUTES:
      console.log(type)
      return {
        ...state,
        [payload.name]: {
          ...state[payload.name],
          error: payload.error
        }
      }
    default:
      return state
  }
}
