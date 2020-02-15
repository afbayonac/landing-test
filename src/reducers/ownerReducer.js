import defaultOwner from '../store/initialStates/owner'
import { ERROR_VALIDATE_OWNER_ATTRIBUTES, UPDATE_OWNER_ATTRIBUTES } from '../actions/ownerActions'

export default function (state = defaultOwner, { type, payload }) {
  switch (type) {
    case UPDATE_OWNER_ATTRIBUTES:
      console.log(type)
      return {
        ...state,
        [payload.name]: {
          value: payload.value,
          error: ''
        }
      }
    case ERROR_VALIDATE_OWNER_ATTRIBUTES:
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
