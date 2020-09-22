export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLAYERS'})
    fetch('http://localhost:3000/players').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_PLAYERS', players: responseJSON })
    })
  }
}