import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import Business from './components/Business'
import Owner from './components/Owner'
import Adjudication from './components/Adjudication'

const App = () => {
  return (
    <div>
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
            <button>
              Apply for a loan
            </button>
          </Link>
        </Route>
      </Switch>
    </div>
  )
}

export default App
