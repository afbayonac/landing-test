import React, { Component } from 'react'
import MyInput from './MyInput'
import { bindActionCreators } from 'redux'
import { apply } from '../actions/adjudicationActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

class Adjudication extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: ''
    }
    this.handleAttributeUpdate = this.handleAttributeUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleAttributeUpdate (name, value) {
    this.setState({
      amount: formatter.format(Number(value.replace(/^\D+/g, '')))
    })
  }

  handleFocus () {
    this.setState({
      amount: ''
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.actions.apply('loan', this.state.amount.replace(/[,\s$]/g, ''))
  }

  render () {
    const { status, error, value } = this.props
    return (

      <form
        onSubmit={this.handleSubmit}
        className='container' style={{
          minHeight: '500px',
          minWidth: '200px'
        }}
      >
        <h1>how money you need</h1>
        <MyInput
          size={27}
          cursorRight
          name='amount'
          value={this.state.amount}
          error={error}
          label='Amount'
          onAttributeUpdate={this.handleAttributeUpdate}
          onFocus={this.handleFocus}
        />
        <button type='submit' className='loanButton'> try {status && ' again'} </button>
        <h1 style={{
          alingSelf: 'center',
          color: status === 'approved' ? 'forestgreen' : status === 'undecided' ? 'deeppink' : 'gray'
        }}
        >
          {status}
        </h1>
        {status === 'approved' && <img src='https://media.giphy.com/media/12c3Dc86bHBY1G/giphy.gif' alt={status} />}
        {status === 'undecided' && <img src='https://media.giphy.com/media/xT0xenvpD5cZDkAgOA/giphy.gif' alt={status} />}
        {status === 'declined' && <img src='https://media.giphy.com/media/qiDb8McXyj6Eg/giphy.gif' alt={status} />}
      </form>

    )
  }
}

Adjudication.propTypes = {
  value: PropTypes.number,
  status: PropTypes.string,
  error: PropTypes.string,
  actions: PropTypes.shape({
    apply: PropTypes.func
  })
}

function mapStateProp (storeState, componentsProps) {
  const { loan } = storeState
  return loan
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      apply
    }, dispatch)
  }
}

export default connect(mapStateProp, mapDispatchToProps)(Adjudication)
