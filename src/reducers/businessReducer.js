import defaultBusiness from '../store/initialStates/business'
import { UPDATE_BUSINESS_ATTRIBUTES } from '../actions/business'

export default function (state = defaultBusiness, { type, payload }) {
  switch (type) {
    case UPDATE_BUSINESS_ATTRIBUTES:
      console.log('work')
      return {
        ...state,
        [payload.name]: payload.value
      }
    case 2:
      return state
    default:
      return state
  }
}