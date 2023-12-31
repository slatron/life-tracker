import React from 'react';
import PropTypes from 'prop-types'
import './Drawer.scss'

const Drawer = ({children, drawerActive = false}) => {
  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li >
          <a href="https://slatron.github.io/">Home</a>
        </li>
      </ul>
      {children}
    </nav>
  )
}

Drawer.propTypes = {
  children: PropTypes.element,
  drawerActive: PropTypes.bool
}

export default Drawer
