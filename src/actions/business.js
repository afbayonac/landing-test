export const UPDATE_BUSINESS_ATTRIBUTES = 'UPDATE_BUSINESS_ATTRIBUTES'
export function updateBusinessAttribute (name, value) {
  return {
    type: UPDATE_BUSINESS_ATTRIBUTES,
    payload: { name, value }
  }
}
