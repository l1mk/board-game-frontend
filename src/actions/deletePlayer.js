export const deletePlayer = (id) => {

    return (dispatch) => {
        fetch (`http://localhost:3000/players/${id}`, {
            method:'DELETE'
        })
        .then(response => {return response.json()})
        .then(players => { dispatch({ type: 'DELETE_PLAYERS', players: players }) })
      }
    }