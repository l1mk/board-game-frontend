export const fetchAddGame = (data) => {
    return (dispatch) => {
        fetch ('http://localhost:3000/games', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method:'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(game => {
            if (game.error){
                alert(game.error)
            } else {
                dispatch({type: 'ADD_GAME', game: game })
            }
        })
    }
}