import React from 'react'
import { render, Simulate } from 'react-testing-library'
import 'dom-testing-library'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Navbar from '../index'

const Home = () => <div>Home</div>
const About = () => <div>About</div>

function MockNavigationApp () {
  return (
    <Router history={createBrowserHistory()}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

const leftClick = { button: 0 }

describe('navbar', () => {
  const { getByTestId, container } = render(<MockNavigationApp />)

  it('should render a separated left and right menus', () => {
    expect(getByTestId('menu-left')).toBeTruthy()
    expect(getByTestId('menu-right')).toBeTruthy()
  })

  it('should render items that navigates to different routes', () => {
    // Dont need to test each item, we can assumet its working

    Simulate.click(getByTestId('/about'), leftClick)
    expect(container.innerHTML).toMatch('About')

    Simulate.click(getByTestId('/'), leftClick)
    expect(container.innerHTML).toMatch('Home')
  })

})
