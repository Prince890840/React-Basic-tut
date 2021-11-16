import React, { Component } from 'react';

//Render Props

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        );
    }
}

export default User;