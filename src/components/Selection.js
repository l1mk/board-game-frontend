import React from 'react'
import { connect } from 'react-redux';
import { fetchAddPlayer } from '../actions/fetchAddPlayer'

//List of Player that are going to play and form for new players
class Selection extends React.Component {

    state = {
    }
    playerExist = (newPlayers) => {
        if (this.props.selectedPlayers.player1 === "player1"){
            console.log(this.props.selectedPlayers.player1 === "player1")
            newPlayers.push(this.props.selectedPlayers.player1)
        } 
        if (this.props.selectedPlayers.player2 === "player2"){
            console.log(this.props.selectedPlayers.player2 === "player2")
            newPlayers.push(this.props.selectedPlayers.player2)
        } 
        if (this.props.selectedPlayers.player3 === "player3"){
            console.log(this.props.selectedPlayers.player3 === "player3")
            newPlayers.push(this.props.selectedPlayers.player3)
        } 
        if (this.props.selectedPlayers.player4 === "player4"){
            console.log(this.props.selectedPlayers.player4 === "player4")
            newPlayers.push(this.props.selectedPlayers.player4)
        } 
        console.log('newplayers', newPlayers, newPlayers.length > 0)
        return newPlayers
    }
    
    changeHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    submitHandler = (e, player) => {
        console.log('submit new player', e, this.state)
        e.preventDefault()
        this.props.fetchAddPlayer(this.state)
        this.setState({ 
            player1: "",
            player2: "",
            player3: "",
            player4: "",  
        })
    }

    Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    render(){
        console.log('selection component', this.props)
        console.log('selected players', this.props.selectedPlayers)
        console.log('values', this.props.selectedPlayers.player1)
    
       
        let newPlayers = []
        this.playerExist(newPlayers)

        if (newPlayers.length > 0){
            
            return (
                <div>
                {newPlayers.map( (player, index) =>  
                    <div key = {index}>
                        <form onSubmit={e => this.submitHandler(e, player)}>
                            <label>{this.Capitalize(player)} Name: </label><br></br>
                            <input type="text" placeholder="Name" name={player} value={this.state.name} onChange={this.changeHandler} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    )}
                </div>
                )
           
        } else {
            return (
                <div>
                    <li>PLAYER1 = AI1</li>
                    <li>PLAYER2 = AI2</li>
                    <li>PLAYER3 = AI3</li>
                    <li>PLAYER4 = AI4</li>
                </div>
            )
        }
    }

}

export default connect(null, {fetchAddPlayer}) (Selection)