export const fetchDeleteGame = (id) => {
    //action to delete game
    console.log('fetching delete', id)
    return (dispatch) => {
        fetch (`http://localhost:3000/games/${id}`, {
            method:'DELETE'
        })
        .then(response => {return response.json()})
        .then(games => { dispatch({ type: 'DELETE_GAME', games: games }) })
      }
    }