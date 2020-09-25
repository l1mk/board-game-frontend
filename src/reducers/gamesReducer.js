const gamesReducer = (state = { games: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_GAMES':
        console.log('loading games', action, state)
        return {
          ...state,
          games: [...state.games],
          loading: true
        }
      case 'ADD_GAMES':
        console.log('all games', action, state)
        return {
          ...state,
          games: action.games,
          loading: false
        }
      case 'ADD_GAME':
        console.log('adding new game', action, state)
        return {
          ...state,
          games : [...state.games, action.game]
        }
        case 'DELETE_GAME':
          console.log('deleting game', action, state)
          return {
            ...state,
            games : action.games
          }

      default:
        return state;
    }
  }
   
  export default gamesReducer;