const playersReducer = (state = { players: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_PLAYERS':
        return {
          ...state,
          players: [...state.players],
          loading: true
        }
      case 'ADD_PLAYERS':
        return {
          ...state,
          players: action.players,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default playersReducer;