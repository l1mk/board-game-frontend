const newGameReducer = (state = { selectedPlayers: [{player1: {name: "AI1"}, player2: {name: "AI2"}, player3: {name: "AI3"}, player4: {name: "AI4"}}], playerOrder: [], turns: 0, currentPLayer: {} }, action) => {
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

      default:
        return state;
    }
  }
   
  export default newGameReducer;