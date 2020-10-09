export const fetchUpdatePlayer = (player) => {
    console.log('fetch updated player')
    return (dispatch) => {
        fetch(`http://localhost:3000/players/${player.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'PATCH',
            body: JSON.stringify(player)
        })
        .then(response => response.json())
        .then(player => dispatch({type: 'UPDATE_PLAYER', payload: player}))
    }
}