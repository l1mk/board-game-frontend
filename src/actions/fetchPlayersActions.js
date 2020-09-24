export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLAYERS'})
    fetch('http://localhost:3000/players')
    .then(response => {return response.json()})
    .then(players => { dispatch({ type: 'ADD_PLAYERS', players: players }) })
  }
}