import { useState } from 'react'
import PropTypes from 'prop-types'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'

import './CommonTemplate.scss'

const CommonTemplate = ({drawerChildren, children}) => {
  const [drawerActive, setDrawerActive] = useState(false)
  const toggleDrawer = () => setDrawerActive(prev => !prev)

  return (
    <>
      <HeaderBar {...{toggleDrawer}} />
      <Drawer {...{drawerActive}}>
        {drawerChildren}
      </Drawer>
      <main>
        {children}
      </main>
    </>
  )
}

CommonTemplate.propTypes = {
  drawerChildren: PropTypes.element,
  children: PropTypes.element
}

export default CommonTemplate
