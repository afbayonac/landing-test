export const UPDATE_OWNER_ATTRIBUTES = 'UPDATE_OWNER_ATTRIBUTES'
export function updateOwnerAttribute (name, value) {
  return {
    type: UPDATE_OWNER_ATTRIBUTES,
    payload: { name, value }
  }
}

export const ERROR_VALIDATE_OWNER_ATTRIBUTES = 'ERROR_VALIDATE_OWNER_ATTRIBUTES'
export function errorValidateOwnerAttribute (name, error) {
  return {
    type: ERROR_VALIDATE_OWNER_ATTRIBUTES,
    payload: { name, error }
  }
}
