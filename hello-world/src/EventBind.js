import React, { Component } from 'react';
import { pro } from './Components/Welcome';

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message : "Hellooo"
        }
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye..!'
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Hello</button> */}
                <button onClick={() => this.clickHandler()}>Hello</button>
            </div>
        );
    }
}

export default EventBind;