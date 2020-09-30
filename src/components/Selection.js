import React from 'react'
import { connect } from 'react-redux';
import { fetchAddPlayer } from '../actions/fetchAddPlayer'

//List of Player that are going to play and form for new players
class Selection extends React.Component {

    state = { }
    
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
        return newPlayers
    }
    

    changeHandler = (e, player) => {
        if (player === "player1") {
            this.setState({ player1: {name: e.target.value} })
        } 
        if (player === "player2") {
            this.setState({ player2: {name: e.target.value} })
        } 
        if (player === "player3") {
            this.setState({  player3: {name: e.target.value} })
        } 
        if (player === "player4") {
            this.setState({ player4: {name: e.target.value} })
        } 
    }

    submitHandler = (e, player, newPlayers) => {
        console.log('submit new player', player, this.state)
        e.preventDefault()
        if (player === "player1") {
            this.props.fetchAddPlayer(this.state.player1)
            this.setState({ })
        } 
        if (player === "player2") {
            this.props.fetchAddPlayer(this.state.player2)
        } 
        if (player === "player3") {
            this.props.fetchAddPlayer(this.state.player3)
        } 
        if (player === "player4") {
            this.props.fetchAddPlayer(this.state.player4)
        } 
        this.setState({ 
        })
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    click = (newPlayers) => {
        console.log('click', newPlayers)
    }

    render(){
        console.log('selection component', this.props)
        console.log('selected players', this.props.selectedPlayers)
    
        let newPlayers = []
        this.playerExist(newPlayers)

        if (newPlayers.length > 0){
            
            return (
                <div>
                {newPlayers.map( (player, index) =>  
                    <div key = {index}>
                        <form onSubmit={(e)=> this.submitHandler(e, player, newPlayers)}>
                            <label>{this.capitalize(player)} Name: </label><br></br>
                            <input type="text" placeholder="Name" name={player} value={this.state.player} onChange={(e)=> this.changeHandler(e, player)} />
                            <input type="submit" value="Submit" onClick= {()=> this.click(newPlayers)} />
                        </form>
                    </div>
                    )}
                         Click Continue after submitting all
                </div>
                )
           
        } else {
            return (
                <div>
                    (NO PLAYER SELECTED ALL ARTIFICIAL INTELLIGENCE GAME)
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