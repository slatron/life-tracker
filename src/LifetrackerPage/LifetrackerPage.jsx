import {useReducer} from 'react'

import CommonTemplate from '/src/Layout/CommonTemplate'
import LifeSection from './LifeSection/LifeSection'
import LifetrackerMenu from './LifetrackerMenu/LifetrackerMenu'

import { reducer, initialState } from './lifetrackerReducer'

import './lifetrackerPage.scss'

const LifetrackerPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const resetGame = () => dispatch({type: 'RESET_LIFE' })

  const MenuProps = ({
    state,
    dispatch,
    resetGame
  })

  return (
    <CommonTemplate
      drawerChildren={<LifetrackerMenu {...MenuProps} />}
      pageName="lifetracker"
    >
      <div className="full-height-layout">
        <div className="align-row align-content life-tracker-wrapper">
          {state.sections.map(section => {
            return (
              <section key={section.id} className={`life-section ${state.playerCount < 3 ? 'low-players' : ''}`} >
                <LifeSection {...{
                  ...section,
                  dispatch,
                  playerCount: state.playerCount
                }} />
              </section>
            )
          })}
        </div>
      </div>  
    </CommonTemplate>
  )
}

export default LifetrackerPage
