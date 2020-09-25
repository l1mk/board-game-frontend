export const fetchAddPlayer = (data) => {
    //action to add a player
    return (dispatch) => {
        fetch ('http://localhost:3000/players', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method:'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(player => {
            if (player.error){
                alert(player.error)
            } else {
                dispatch({type: 'ADD_PLAYER', player: player })
            }
        })
    }
}