import PropTypes from 'prop-types'
import './HeaderBar.scss'

const HeaderBar = ({toggleDrawer, drawerActive = false}) => (
  <div className="header-bar">
    <div className="flex-left vertical-align-container">
      <div
          className={`hamburger ${drawerActive ? 'active' : ''}`}
          onClick={toggleDrawer}
      > 
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
    <div className="flex-center vertical-align-container">
      <span className="logo">LIFE</span>
      <span className="logo logo2">TRACKER</span>
    </div>
    <div className="flex-right vertical-align-container">
      <span>&nbsp;</span>
    </div>
  </div>
)

HeaderBar.propTypes = {
  toggleDrawer: PropTypes.func,
  drawerActive: PropTypes.bool
}

export default HeaderBar
