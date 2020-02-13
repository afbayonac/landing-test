import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateBusinessAttribute } from '../actions/business'
import MyInput from './MyInput'
import PropTypes from 'prop-types'

class Business extends Component {
  constructor (props) {
    super(props)
    this.handlerUpdateBusiness = this.handlerUpdateBusiness.bind(this)
  }

  handlerUpdateBusiness (name, value) {
    this.props.actions.updateBusinessAttribute(name, value)
  }

  render () {
    const { name } = this.props.business
    return (
      <div>
        <h1>Business's Info</h1>
        {name}
        <MyInput value={name} label='Name' name='name' onAttributeUpdate={this.handlerUpdateBusiness} />
        <MyInput value='none' label='Address' name='address' onAttributeUpdate={this.handlerUpdateBusiness} />
        <li>State</li>
        <li>Postal Code</li>
        <li>Amount</li>
        <li>Tax Id</li>
        <br />
        <Link to='/loan/owner'>next</Link>
      </div>
    )
  }
}

Business.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  actions: PropTypes.shape({
    updateBusinessAttribute: PropTypes.func.isRequired
  })
}

function mapStateProp (storeState, componentsProps) {
  const { business } = storeState
  return { business }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      updateBusinessAttribute
    }, dispatch)
  }
}

export default connect(mapStateProp, mapDispatchToProps)(Business)
