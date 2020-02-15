import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateBusinessAttribute } from '../actions/businessActions'
import PropTypes from 'prop-types'

import stateCity from './USStatesCities'
import MyInput from './myInput/MyInput'

class Business extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleUpdateBusiness = this.handleUpdateBusiness.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    !Object.values(this.props.business).some(e => e.error) && this.setState({ next: true })
  }

  handleUpdateBusiness (name, value) {
    this.props.actions.updateBusinessAttribute(name, value)
  }

  render () {
    if (this.state.next) return (<Redirect to='/loan/owner' />)

    const { name, postalCode, address, state, taxId, city } = this.props.business

    return (
      <form onSubmit={this.handleSubmit} className='container' id='businessForm'>
        <h1>Your Business Info</h1>
        <div className='containerInputs'>
          <div>
            <MyInput
              value={name.value}
              error={name.error}
              label='Name'
              name='name'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
            <MyInput
              value={taxId.value}
              error={taxId.error}
              placeholder='12-1234567'
              onChange={(e) => {
                e.target.value = e.target.value.replace(/^(\d{2})(\d{0,7})$/g, '$1-$2')
              }}
              label='Tax Identification'
              name='taxId'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
            <MyInput
              type='select'
              list={Object.keys(stateCity)}
              value={state.value}
              error={state.error}
              label='State'
              name='state'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
            <MyInput
              type='select'
              list={state.value ? stateCity[state.value] : undefined}
              value={city.value}
              error={city.error}
              label='City'
              name='city'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
            <MyInput
              value={address.value}
              error={address.error}
              label='Address'
              name='address'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
            <MyInput
              placeholder='12354-1234'
              value={postalCode.value}
              error={postalCode.error}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/^(\d{5})(\d{0,4})$/g, '$1-$2')
              }}
              label='Postal code'
              name='postalCode'
              onAttributeUpdate={this.handleUpdateBusiness}
            />
          </div>
          <div>
            <button id='form_1' type='submit' className='loanButton next'>
              <p>Next</p>
            </button>
          </div>
        </div>
      </form>

    )
  }
}

const attributePrototype = PropTypes.shape({
  error: PropTypes.string,
  value: PropTypes.string.isRequired
})

Business.propTypes = {
  business: PropTypes.shape({
    name: attributePrototype,
    postalCode: attributePrototype,
    address: attributePrototype,
    state: attributePrototype,
    city: attributePrototype,
    taxId: attributePrototype
  }),
  load: PropTypes.shape({
    amount: attributePrototype,
    status: ''
  }),
  actions: PropTypes.shape({
    updateBusinessAttribute: PropTypes.func.isRequired
  })
}

function mapStateProp (storeState, componentsProps) {
  const { business, loan } = storeState
  return { business, loan }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      updateBusinessAttribute
    }, dispatch)
  }
}

export default connect(mapStateProp, mapDispatchToProps)(Business)
