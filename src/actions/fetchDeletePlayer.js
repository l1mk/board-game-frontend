export const fetchDeletePlayer = (id) => {
  //action to delete a player
    return (dispatch) => {
        fetch (`http://localhost:3000/players/${id}`, {
            method:'DELETE'
        })
        .then(response => {return response.json()})
        .then(players => { dispatch({ type: 'DELETE_PLAYERS', players: players }) })
      }
    }