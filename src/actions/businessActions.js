export const UPDATE_BUSINESS_ATTRIBUTES = 'UPDATE_BUSINESS_ATTRIBUTES'
export function updateBusinessAttribute (name, value) {
  return {
    type: UPDATE_BUSINESS_ATTRIBUTES,
    payload: { name, value }
  }
}

export const ERROR_VALIDATE_BUSINESS_ATTRIBUTES = 'ERROR_VALIDATE_BUSINESS_ATTRIBUTES'
export function errorValidateBusinessAttribute (name, error) {
  return {
    type: ERROR_VALIDATE_BUSINESS_ATTRIBUTES,
    payload: { name, error }
  }
}
