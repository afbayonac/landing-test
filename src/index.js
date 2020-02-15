import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './App'

const store = configureStore()

render(
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
