import React, { Component } from 'react';
import ForwardRefs from './ForwardRefs';

class ForwardRefsParent extends Component {

    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <ForwardRefs ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default ForwardRefsParent;