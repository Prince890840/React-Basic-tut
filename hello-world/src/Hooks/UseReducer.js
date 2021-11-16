import React, { useReducer } from 'react';

    const initialState = 0

    //state is newmeric val and action is a string rather than an obj with a type property
    const reducer = (state,action) => {
        switch(action){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return state = 0
            default:
                return state
        }

    }

function UseReducer(props) {

    const[currentval,dispatch] = useReducer(reducer,initialState)

    return (
        <div> 
            <h1>--------------------</h1>
            <h1>Count - {currentval}</h1>
            <h1>--------------------</h1>
            <button onClick={() => dispatch('increment')}>Inc</button>
            <button onClick={() => dispatch('decrement')}>dec</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    );
}

export default UseReducer;