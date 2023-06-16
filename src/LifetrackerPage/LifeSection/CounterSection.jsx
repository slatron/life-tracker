import React from 'react'

import PropTypes from 'prop-types'

const CounterSection = ({available, counters, counterDispatch}) => {

  const makePlayerSections = sections => sections.map(color => (
    <div key={color} className="counter-section centered" style={{backgroundColor: color}}>
      <button
        type="button"
        className="down"
        onClick={() => counterDispatch({type: 'CHANGE_COUNTER', payload: {color, count: counters[color] - 1}})}
      >
        -1
      </button>
      <div className="counter-count">{counters[color]}</div>
      <button
        type="button"
        className="up"
        onClick={() => counterDispatch({type: 'CHANGE_COUNTER', payload: {color, count: counters[color] + 1}})}
      >
        +1
      </button>
    </div>
  ))

  return (
    <section className="counter-sections">
      {makePlayerSections(Object.keys(counters))}
      {available.length
        ? <div className="choose-color-section centered">
            {available.map(color => (
              <button
                type="button"
                key={color}
                className={`color-chooser bg-${color}`}
                onClick={() => counterDispatch({type: 'ASSIGN_COLOR', payload: {color}})}
              />
            ))}
          </div>
        : null
      }
    </section>
  )
}

CounterSection.propTypes = {
  available: PropTypes.array,
  counters: PropTypes.object,
  counterDispatch: PropTypes.func
}

export default CounterSection
