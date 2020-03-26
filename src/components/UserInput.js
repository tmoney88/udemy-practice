import React, { Component } from 'react'

class UserInput extends Component {
    render() {
        return (
            <div>
                <p>Enter your username below</p>
                <input
                 type="text" 
                 onChange={this.props.usernameHandler}
                 value={this.props.currentName} />
            </div>
        )
    }
}

export default UserInput
