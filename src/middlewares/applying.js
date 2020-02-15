import { APPLY, errorApply, apiResponse } from '../actions/adjudicationActions'
import axios from 'axios'

const applying = store => next => action => {
  if (action.type !== APPLY) return next(action)
  console.log(action)
  next(action)

  const value = Number(action.payload.value)

  if (!(Number(value) > 0)) {
    return store.dispatch(errorApply('amount', 'amount > $0.00'))
  }

  store.dispatch((dispatch) => {
    axios
      .post('https://beer-bot-7b25f.appspot.com/apply', { business: { amount: value } })
      .then(res => {
        console.log(res)
        dispatch(apiResponse('amount', res.data.decision))
      })
  })
}

export default applying
