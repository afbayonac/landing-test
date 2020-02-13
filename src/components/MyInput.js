import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyInput extends Component {
  constructor (props) {
    super(props)
    this.state = { value: this.props.value }
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnchange = this.handleOnchange.bind(this)
  }

  static getDerivedStateFromProps (props, state) {
    if (
      props.value !== state.prevPropsValue
    ) {
      return {
        prevPropsValue: props.value,
        value: props.value
      }
    }
    return null
  }

  handleOnchange (e) {
    this.setState({ value: e.target.value })
  }

  handleOnBlur (e) {
    this.props.onAttributeUpdate(this.props.name, this.state.value)
  }

  render () {
    const { value } = this.state
    const { label } = this.state
    return (
      <div>
        <label>{label}</label>
        <input
          onChange={this.handleOnchange}
          onBlur={this.handleOnBlur}
          value={value}
        />
      </div>
    )
  }
}

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onAttributeUpdate: PropTypes.func.isRequired
}

export default MyInput
