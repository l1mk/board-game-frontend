export const fetchAllGames = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_GAMES'})
      fetch('http://localhost:3000/games')
      .then(response => {return response.json()})
      .then(games => { dispatch({ type: 'ADD_GAMES', games: games }) })
    }
  }