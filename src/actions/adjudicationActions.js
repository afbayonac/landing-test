import axios from 'axios'

export const API_REQUEST = 'API_REQUEST'

export function apiRequest (name, value) {
  return async (dispatch) => {
    dispatch({ type: API_REQUEST })

    const res = await axios
      .post('https://beer-bot-7b25f.appspot.com/apply', { business: { amount: value } })
    console.log(res)
    dispatch(apiResponse('amount', 'lococo'))
  }
}

export const APPLY = 'APPLY'
export function apply (name, value) {
  return {
    type: APPLY,
    payload: { name, value }
  }
}

export const ERROR_APPLY = 'ERROR_APPLY'
export function errorApply (name, error) {
  return {
    type: ERROR_APPLY,
    payload: { name, error }
  }
}

export const API_RESPONSE = 'API_RESPONSE'
export function apiResponse (name, response) {
  return {
    type: API_RESPONSE,
    payload: { name, response }
  }
}
