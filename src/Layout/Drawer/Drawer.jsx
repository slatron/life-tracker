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
          <a href="http://www.mikeslater.com">Home</a>
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
