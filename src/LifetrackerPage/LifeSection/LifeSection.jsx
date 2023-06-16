import {useReducer, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

import './lifeSection.scss'

import LifeButton from './LifeButton'
import CounterSection from './CounterSection'
import Pawn from './Pawn'

import { reducer, initialCountersState } from './lifeSectionReducer'

const LifeSection = ({id, flip, life, name, dispatch, playerCount}) => {
  
  const [viewCounters, setViewCounters] = useState(false)
  const [currentPlayerCount, setPlayerCount] = useState(playerCount)
  const [state, counterDispatch] = useReducer(reducer, initialCountersState(playerCount, id))

  useEffect(() => {
    if (playerCount !== currentPlayerCount) {
      setPlayerCount(playerCount)
      counterDispatch({type: 'INIT_COLORS', payload: {id, playerCount}})
    }
  }, [playerCount, id, currentPlayerCount])

  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>

      <section className={`counter-area${viewCounters ? ' active': ''}`}>
        <span className="counter-area-control-icon" onClick={() => setViewCounters(!viewCounters)}>
          <Pawn />
        </span>
        <section className="counter-sections">
          <CounterSection available={state.colors} counters={state.counters} counterDispatch={counterDispatch} />
        </section>
      </section>
      <div
        className="align-content centered align-row align-footer"
        onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, life: life - 1}})}
      >
        {life}
      </div>
      <div className="double-col-row">
        <section className="centered">
          <LifeButton cls="down" change={-1} life={life - 1} dispatch={dispatch} id={id} />
          <LifeButton cls="down-big" change={-5} life={life - 5} dispatch={dispatch} id={id} />
        </section>
        <section className="centered">
          <LifeButton cls="up-big" change={5} life={life + 5} dispatch={dispatch} id={id} />
          <LifeButton cls="up" change={1} life={life + 1} dispatch={dispatch} id={id} />
        </section>
      </div>
    </div>
  )
}

LifeSection.propTypes = {
  id: PropTypes.number,
  flip: PropTypes.bool,
  life: PropTypes.number,
  name: PropTypes.string,
  dispatch: PropTypes.func,
  playerCount: PropTypes.number
}

export default LifeSection

