import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './myInput.css'

class MyInput extends Component {
  constructor (props) {
    super(props)
    this.state = { value: this.props.value }
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
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

  handleOnChange (e) {
    e.preventDefault()
    this.props.onChange && this.props.onChange(e)
    this.setState({ value: e.target.value })
  }

  handleOnBlur (e) {
    this.props.onAttributeUpdate(this.props.name, this.state.value)
  }

  render () {
    const { value } = this.state
    const { label, error, type, list, placeholder, cursorRight, onFocus, name, size } = this.props

    let input = type !== 'number' ? (
      <input
        onKeyPress={e => {
          if (e.key === 'Enter') e.preventDefault()
        }}
        style={{
          textAlign: cursorRight ? 'right': 'left'
        }}
        size={size || 20}
        placeholder={placeholder}
        type={type}
        list={type === 'select' ? name : undefined}
        required
        onFocus={onFocus}
        name={name}
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
        value={value}
      />
    ) : type === 'number'

    return (
      <div className={`myInput ${error && 'error'}`}>
        <label htmlFor={this.props.name}>{label}</label>
        {input}
        {type === 'select' && list && (
          <datalist id={this.props.name}>
            {list && list.map(e => (<option key={e}> {e} </option>))}
          </datalist>
        )}
        <span id='error'>{error}</span>
      </div>
    )
  }
}

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onAttributeUpdate: PropTypes.func.isRequired,
  type: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  cursorRight: PropTypes.bool,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.number
}

MyInput.defaultProps = {
  type: 'text'
}

export default MyInput
