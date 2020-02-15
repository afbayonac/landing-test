import { UPDATE_BUSINESS_ATTRIBUTES, errorValidateBusinessAttribute } from '../actions/businessActions'
import { UPDATE_OWNER_ATTRIBUTES, errorValidateOwnerAttribute } from '../actions/ownerActions'

const nameRegex = /^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/
const nameError = '1-75 characters, no !@#$*~ ?'

const postalCodeRegex = /^\d{5}(?:-\d{4})?$/
const postalCodeError = '12345-1234'

const taxIdRegex = /^\d{2}-\d{7}$/
const taxIdError = '12-1234566'

const socialSecurityNumberRegex = /^([1-9])(?!\1{2}-\1{2}-\1{4})[1-9]{2}-[1-9]{2}-[1-9]{4}$/
const socialSecurityNumberError = '123-12-1234'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const emailError = 'test@test.com'

const validationBusiness = store => next => action => {
  next(action)
  if (action.type === UPDATE_BUSINESS_ATTRIBUTES) {
    const { value, name } = action.payload
    switch (name) {
      case 'name':
        !nameRegex.test(value) && store.dispatch(errorValidateBusinessAttribute(name, nameError))
        break
      case 'postalCode':
        !postalCodeRegex.test(value) && store.dispatch(errorValidateBusinessAttribute(name, postalCodeError))
        break
      case 'address':
        !value && store.dispatch(errorValidateBusinessAttribute(name, 'required'))
        break
      case 'taxId':
        !taxIdRegex.test(value) && store.dispatch(errorValidateBusinessAttribute(name, taxIdError))
        break
      case 'state':
        !value && store.dispatch(errorValidateBusinessAttribute(name, 'required'))
        break
      case 'city':
        !value && store.dispatch(errorValidateBusinessAttribute(name, 'required'))
        break
    }
  }

  if (action.type === UPDATE_OWNER_ATTRIBUTES) {
    const { value, name } = action.payload
    switch (name) {
      case 'name':
        !nameRegex.test(value) && store.dispatch(errorValidateOwnerAttribute(name, nameError))
        break
      case 'postalCode':
        !postalCodeRegex.test(value) && store.dispatch(errorValidateOwnerAttribute(name, postalCodeError))
        break
      case 'address':
        !value && store.dispatch(errorValidateOwnerAttribute(name, 'required'))
        break
      case 'socialSecurityNumber':
        !socialSecurityNumberRegex.test(value) &&
        store.dispatch(errorValidateOwnerAttribute(name, socialSecurityNumberError))
        break
      case 'state':
        !value && store.dispatch(errorValidateOwnerAttribute(name, 'required'))
        break
      case 'city':
        !value && store.dispatch(errorValidateOwnerAttribute(name, 'required'))
        break
      case 'email':
        !emailRegex.test(value) && store.dispatch(errorValidateOwnerAttribute(name, emailError))
        break
    }
  }
}

export default validationBusiness
