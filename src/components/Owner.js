import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Owner extends Component {
  render () {
    return (
      <div>
        <h1>Owner's Info</h1>
        <ul>
          <li>Social security number</li>
          <input type='number' />
          <li>Name</li>
          <input type='text' />
          <li>email</li>
          <input type='email' />
          <li>address</li>
          <input type='text' />
          <li>State</li>
          <input type='text' />
          <li>city</li>
          <input type='text' />
          <li>Post Code</li>
          <input type='text' />
        </ul>
        <Link to='/loan/adjudication'> Next </Link>
      </div>
    )
  }
}

export default Owner
