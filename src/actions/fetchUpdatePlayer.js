export const fetchUpdatePlayers = (data) =>{
    return (dispatch) => {
        fetch(`http://localhost:3000/players/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(player => dispatch({type: 'UPDATE_PLAYER', payload: player}))
    }
}
