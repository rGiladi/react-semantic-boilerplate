import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { history } from './router'

import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Navbar />
        </Fragment>
      </Router>
    )
  }
}

export default hot(module)(App);
