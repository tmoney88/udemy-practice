import React, { Component } from 'react'

class UserOutput extends Component {
    render() {
        return (
            <div>
                <p>Choose Wisely</p>
                <p>Your username is: {this.props.username}</p>   
            </div>
        )
    }
}

export default UserOutput
