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
      default:
        return state;
    }
  }
   
  export default playersReducer;