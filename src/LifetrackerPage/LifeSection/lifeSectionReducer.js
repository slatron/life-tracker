const ALL_COLORS = ['lightgreen', 'pink', 'yellow', 'goldenrod', 'plum', 'aqua']

const getInitColors = (playerCount, id) => {
  const colorCount = playerCount - 1 || 1
  const OTHER_COLORS = [...ALL_COLORS]
  OTHER_COLORS.splice(id - 1, 1)
  return OTHER_COLORS.splice(0, colorCount)
}

export const initialCountersState = (playerCount, id) => {
  return {
    colors: getInitColors(playerCount, id),
    counters: {}
  }
} 

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COUNTER': {
      const {color, count} = action.payload
      state.counters[color] = count
      return {...state};
    }
    case 'ASSIGN_COLOR': {
      const {color} = action.payload
      state.counters[color] = 0
      state.colors = state.colors.filter(c => c !== color)
      return {...state};
    }
    case 'INIT_COLORS': {
      const {playerCount, id} = action.payload
      const newColors = getInitColors(playerCount, id)
      state.colors = newColors
      state.counters = {}
      return {...state};
    }
  }
  return state
}
