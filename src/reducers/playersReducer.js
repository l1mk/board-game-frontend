const playersReducer = (state = { players: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_PLAYERS':
        console.log('loading', action, state)
        return {
          ...state,
          players: [...state.players],
          loading: true
        }
      case 'ADD_PLAYERS':
        console.log('adding', action, state)
        return {
          ...state,
          players: action.players,
          loading: false
        }
      case 'ADD_PLAYER':
        console.log('adding new player', action, state)
        return {
          ...state,
          players : [...state.players, action.payload]
        }
        case 'DELETE_PLAYER':
          console.log('deleting player', action, state)
          return {
            ...state,
            players : action.players
          }
        case 'UPDATE_PLAYER':
          console.log('updating player', action, state)
          let updatedPlayer = state.players.map(player => {
            if (player.id === action.payload.id) {
              return action.payload
            } else {
              return player
            }
          })
          return {
            ...state,
             players: [...state.players, updatedPlayer]}
      default:
        return state;
    }
  }
   
  export default playersReducer;