import { combineReducers } from 'redux'
import businessReducer from './businessReducer'
import ownerReducer from './ownerReducer'
import loanReducer from './loanReducer'

const rootReducer = combineReducers({
  business: businessReducer,
  owner: ownerReducer,
  loan: loanReducer
})

export default rootReducer
