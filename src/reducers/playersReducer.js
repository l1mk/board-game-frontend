const playersReducer = (state = { players: [], loadingPlayer: false , games: [], loadingGame: false}, action) => {
    switch(action.type) {
      case 'LOADING_PLAYERS':
        console.log('loading player', action, state)
        return {
          ...state,
          players: [...state.players],
          loadingPlayer: true
        }
      case 'ADD_PLAYERS':
        console.log('all players', action, state)
        return {
          ...state,
          players: action.players,
          loadingPlayer: false
        }
      case 'ADD_PLAYER':
        console.log('adding new player', action, state)
        return {
          ...state,
          players : [...state.players, action.player]
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
            if (player.id === action.player.id) {
              return action.player
            } else {
              return player
            }
          })
          return {
            ...state,
             players: [...state.players, updatedPlayer]}
             case 'LOADING_GAMES':
              console.log('loading games', action, state)
              return {
                ...state,
                games: [...state.games],
                loadingGame: true
              }
            case 'ADD_GAMES':
              console.log('all games', action, state)
              return {
                ...state,
                games: action.games,
                loadingGame: false
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
   
  export default playersReducer;