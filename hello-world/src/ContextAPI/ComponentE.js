import React, { Component } from 'react';
import ComponentF from './ComponentF'
import UserContext from './UserContext';

class ComponentE extends Component {

    /* contextType is a property of Consumer
    Limitation :-
        1.it work only with class component
        2.subscribe only single context using contextType */


    static contextType = UserContext

    render() {
        return( 
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE;