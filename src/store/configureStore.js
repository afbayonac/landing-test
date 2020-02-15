import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import initialState from './initialState'
import validationBusiness from '../middlewares/validationBusiness'
import applying from '../middlewares/applying'
import thunk from 'redux-thunk'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore () {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, applying, validationBusiness))
  )
}
