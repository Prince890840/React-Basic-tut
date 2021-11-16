import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {

    render() {

        // Destructure count and incrementcount from this.props
        const {count,incrementCount} = this.props

        return (
            <div>
                <button onClick={incrementCount}>
                {this.props.name} Click {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter , 5)