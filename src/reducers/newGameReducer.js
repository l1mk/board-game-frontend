const newGameReducer = (state = { selectedPlayers: {player1: "AI1", player2: "AI2", player3: "AI3", player4: "AI4"}, playerOrder: [], turns: 0, currentPLayer: {} }, action) => {
    switch(action.type) {
      case 'SELECTED_PLAYERS':
        console.log('selected players', action, state)
        return {
          ...state,
          selectedPlayers: action.selectedPlayers
        }

      default:
        return state;
    }
  }
   
  export default newGameReducer;