import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateOwnerAttribute } from '../actions/ownerActions'
import PropTypes from 'prop-types'

import MyInput from './MyInput'
import stateCity from './USStatesCities'

class Owner extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleUpdateOwner = this.handleUpdateOwner.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    !Object.values(this.props.owner).some(e => e.error) && this.setState({ next: true })
  }

  handleUpdateOwner (name, value) {
    this.props.actions.updateOwnerAttribute(name, value)
  }

  render () {
    if (this.state.next) return (<Redirect to='/loan/adjudication' />)

    const {
      name,
      address,
      city,
      state,
      socialSecurityNumber,
      postalCode,
      email
    } = this.props.owner

    return (
      <form onSubmit={this.handleSubmit} className='container' id='formOwner'>
        <h1>Your info</h1>
        <div className='containerInputs'>
          <div>
            <MyInput
              value={name.value}
              error={name.error}
              label='Name'
              name='name'
              autocomplete='off'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              value={email.value}
              error={email.error}
              label='Email'
              name='email'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              placeholder='123-12-1234'
              value={socialSecurityNumber.value}
              error={socialSecurityNumber.error}
              label='Social Security Number'
              name='socialSecurityNumber'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              type='select'
              list={Object.keys(stateCity)}
              value={state.value}
              error={state.error}
              label='State'
              name='state'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              type='select'
              list={state.value ? stateCity[state.value] : undefined}
              value={city.value}
              error={city.error}
              label='City'
              name='city'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              value={address.value}
              error={address.error}
              label='Address'
              name='address'
              onAttributeUpdate={this.handleUpdateOwner}
            />
            <MyInput
              placeholder='12453-1234'
              value={postalCode.value}
              error={postalCode.error}
              label='Postal code'
              name='postalCode'
              onAttributeUpdate={this.handleUpdateOwner}
            />
          </div>
          <div>
            <button type='submit' className='loanButton next' form_id='formOwner'>
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

Owner.propTypes = {
  owner: PropTypes.shape({
    name: attributePrototype,
    postalCode: attributePrototype,
    address: attributePrototype,
    state: attributePrototype,
    city: attributePrototype,
    socialSecurityNumber: attributePrototype,
    email: attributePrototype
  }),
  actions: PropTypes.shape({
    updateOwnerAttribute: PropTypes.func.isRequired
  })
}

function mapStateProp (storeState, componentsProps) {
  const { owner } = storeState
  return { owner }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      updateOwnerAttribute
    }, dispatch)
  }
}

export default connect(mapStateProp, mapDispatchToProps)(Owner)
