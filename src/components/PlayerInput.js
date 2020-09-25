import React from 'react'
import { connect } from 'react-redux';
import { addPlayer } from '../actions/fetchAddPlayer'

class PlayerInput extends React.Component {

    state = {
        name: "",
        bio: "",
        favorite: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        console.log('submit new player')
        e.preventDefault()
        this.props.addPlayer(this.state)
        this.setState({ 
            name: "",
            bio: "",
            favorite: ""    
        })
    }
    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <label>Player Name: </label><br></br>
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler} /><br></br>
                <label>Bio: </label><br></br>
                <input type="text" placeholder="Info" name="bio" value={this.state.bio} onChange={this.changeHandler} /><br></br>
                <label>Favorite Character: </label><br></br>
                <input type="text" placeholder="Whats your favorite" name="favorite" value={this.state.favorite} onChange={this.changeHandler} /><br></br>
                <input type="submit" value="Submit" /><br></br>
            </form>
        )
    }
}


export default connect(null, {addPlayer}) (PlayerInput)