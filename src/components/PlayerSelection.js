import React from 'react'
import OrderSelectionContainer from '../containers/OrderSelectionContainer';

//List of Player that are going to play and form for new players
class PlayerSelection extends React.Component {

    state = {player1: {name: ""}, player2: {name: ""}, player3: {name: ""}, player4: {name: ""}}
    

    changeHandler = (e) => {
        this.setState({[e.target.name]: {name: e.target.value}})
    }

    submitHandler = (e, a) => {
        console.log('submit new player', a)
        e.preventDefault()
        if (a === "player1"){
            let updatedPlayer = {player1: {name: this.state.player1.name}}
            this.props.fetchAddPlayer(this.state.player1)
            this.setState({
                ...this.state, player1: {name: ""}
             })
             this.props.updateselectedPlayers(updatedPlayer)
             alert ('player1 created')
        }
        else if (a === "player2"){
            let updatedPlayer = {player2: {name: this.state.player2.name}}
            this.props.fetchAddPlayer(this.state.player2)
            this.setState({
                ...this.state, player2: {name: ""}
             })
             this.props.updateselectedPlayers(updatedPlayer)
             alert ('player2 created')
        }
        else if (a === "player3"){
            let updatedPlayer = {player3: {name: this.state.player3.name}}
            this.props.fetchAddPlayer(this.state.player3)
            this.setState({
                ...this.state, player3: {name: ""}
             })
             this.props.updateselectedPlayers(updatedPlayer)
             alert ('player3 created')
        }
        else if (a === "player4"){
            let updatedPlayer = {player4: {name: this.state.player4.name}}
            this.props.fetchAddPlayer(this.state.player4)
            this.setState({
                ...this.state, player4: {name: ""}
             })
             this.props.updateselectedPlayers(updatedPlayer)
             alert ('player4 created')
        }
    } 


    Player1 (props = this.props.selectedPlayers[0]) {
        if (props.player1.name === "player1"){
            return (
            <div key = "1">
                    <form onSubmit={(e, a = "player1")=> this.submitHandler(e, a)}>
                        <label>Player1: </label><br></br>
                        <input type="text" placeholder="Name" name="player1" value={this.state.player1.name} onChange={(e)=> this.changeHandler(e)} />
                        <input type="submit" value="Submit" />
                    </form>
            </div>)
        } else {
            return (
            <div>
                <label>Player1: </label>
                <li>{this.props.selectedPlayers[0].player1.name}</li>
            </div>)
        }
    }

    Player2 (props = this.props.selectedPlayers[0]){
        if (props.player2.name === "player2"){
            return (
                <div key = "2">
                        <form onSubmit={(e, a = "player2")=> this.submitHandler(e, a)}>
                            <label>Player2: </label><br></br>
                            <input type="text" placeholder="Name" name="player2" value={this.state.player2.name} onChange={(e)=> this.changeHandler(e)} />
                            <input type="submit" value="Submit" />
                        </form>
                </div>)
        } else {
            return (
                <div>
                    <label>Player2: </label>
                    <li>{this.props.selectedPlayers[0].player2.name}</li>
                </div>)
        }
    }

    Player3 (props = this.props.selectedPlayers[0]){
        if (props.player3.name === "player3"){
            return (
                <div key = "3">
                        <form onSubmit={(e, a = "player3")=> this.submitHandler(e, a)}>
                            <label>Player3: </label><br></br>
                            <input type="text" placeholder="Name" name="player3" value={this.state.player3.name} onChange={(e)=> this.changeHandler(e)} />
                            <input type="submit" value="Submit" />
                        </form>
                </div>)
        } else {
            return (
                <div>
                    <label>Player3: </label>
                    <li>{this.props.selectedPlayers[0].player3.name}</li>
                </div>)
        }
    }

    Player4 (props = this.props.selectedPlayers[0]){
        if (props.player4.name === "player4"){
            return (
                <div key = "4">
                        <form onSubmit={(e, a = "player4")=> this.submitHandler(e, a)}>
                            <label>Player4: </label><br></br>
                            <input type="text" placeholder="Name" name="player4" value={this.state.player4.name} onChange={(e)=> this.changeHandler(e)} />
                            <input type="submit" value="Submit" />
                        </form>
                </div>)
        } else {
            return (
                <div>
                    <label>Player4: </label>
                    <li>{this.props.selectedPlayers[0].player4.name}</li>
                </div>)
        }

    }

    render(){
        console.log('selection component', this.props)
        return (
            <div>
                {this.Player1()}
                {this.Player2()}
                {this.Player3()}
                {this.Player4()}
                <br></br>
                <OrderSelectionContainer selectedPlayers = {this.props.selectedPlayers} updatePlayersOrder={this.props.updatePlayersOrder} playerOrder={this.props.playerOrder} currentPLayer={this.props.currentPLayer} turns={this.props.turns} characters = {this.props.characters} fetchAllCharacters={this.props.fetchAllCharacters}/>
            </div>
        )
    }
}

export default PlayerSelection
