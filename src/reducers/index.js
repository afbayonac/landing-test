import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import ownerReducer from './ownerReducer'

const rootReducer = combineReducers({
  business: businessReducer,
  owner: ownerReducer
})

export default rootReducer
