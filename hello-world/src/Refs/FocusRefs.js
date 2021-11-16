// ParentComponent of RefsWithClassComponent

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class FocusRefs extends Component {

    constructor(props){
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        this.componentRef.current.focus() 
    }

    render() {
        return (
            <div>
                <h1 className="mt-2 text-center">Refs</h1>
                <input type="text" ref={this.componentRef} />
                <button className="btn btn-success" onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusRefs;