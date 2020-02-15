import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import Business from './components/Business'
import Owner from './components/Owner'
import Adjudication from './components/Adjudication'

const App = (props) => {
  const { pathname } = props.location
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/loan/business'>
          <Business />
        </Route>
        <Route exact path='/loan/owner'>
          <Owner />
        </Route>
        <Route exact path='/loan/adjudication'>
          <Adjudication />
        </Route>
        <Route path='/'>
          <Link to='/loan/business'>
            <button className='loanButton'>
              Apply for a loan
            </button>
          </Link>
        </Route>
      </Switch>
      <h1 className='page'>
        {pathname === '/loan/business' && '1/3'}
        {pathname === '/loan/owner' && '2/3'}
        {pathname === '/loan/adjudication' && '3/3'}
      </h1>
    </div>
  )
}

export default App
