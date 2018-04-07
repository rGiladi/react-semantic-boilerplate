import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import items from './items'
import './navbar.scss'

class Navbar extends Component {

  render () {
    return (
      <Menu id='main-navbar' size='huge' borderless>

        {/* Left  */}
        <Menu.Menu position='left' data-testid='menu-left'>
          {
            items.left.map((item, index) => (
              <NavLink key={index} exact to={item.route} className='item' data-testid={item.route}>
                {item.name}
              </NavLink>
            ))
          }
        </Menu.Menu>

        {/* Right  */}
        <Menu.Menu position='right' data-testid='menu-right'>
          {
            items.right.map((item, index) => (
              <NavLink key={index} exact to={item.route} className='item' data-testid={item.route}>
                {item.name}
              </NavLink>
            ))
          }
        </Menu.Menu>

      </Menu>
    )
  }
}

export default Navbar
