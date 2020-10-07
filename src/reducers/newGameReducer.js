const newGameReducer = (state = { selectedPlayers: [{player1: {name: "AI1"}, player2: {name: "AI2"}, player3: {name: "AI3"}, player4: {name: "AI4"}}], playerOrder: [], turns: 0, currentPlayer: {} }, action) => {
    switch(action.type) {
      case 'SELECTED_PLAYERS':
        console.log('selected players', action, state)
        return {
          ...state,
          selectedPlayers: [action.payload]
        }
        case 'UPDATE_SELECTED_PLAYERS':
          console.log('update selected players', action, state)
          return {
            ...state,
            selectedPlayers: [Object.assign(state.selectedPlayers[0], action.payload)]
          }
          case 'UPDATE_PLAYERS_ORDER':
            console.log('update players order', action, state)
            return {
              ...state,
              playerOrder: action.payload
            }
          case 'UPDATE_CURRENT_PLAYER':
            console.log('update current player', action, state)
            return {
              ...state, 
              currentPlayer: action.payload
            }
          case 'UPDATE_PLAYER_INSIDE_ORDER':
            console.log('update player', action, state)
            let newPlayers = state.playerOrder
            let foundIndex = newPlayers.findIndex( x => x.name === action.payload.name);
            newPlayers[foundIndex] = action.payload
            return {
              ...state, 
              playerOrder: newPlayers
            }
          case 'UPDATE_TURNS':
            console.log('update turns', action, state)
            return {
              ...state, 
              turns: action.payload
            }

      default:
        return state;
    }
  }
   
  export default newGameReducer;