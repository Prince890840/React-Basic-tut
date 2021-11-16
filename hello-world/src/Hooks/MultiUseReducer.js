import React, { useReducer } from 'react';

/*Multiple state var that have same state transition that
 has good idea to make multiple useReducer that has same reducer function
*/
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

function MultiUseReducer(props) {

    const[currentval,dispatch] = useReducer(reducer,initialState)

    const[currentval2,dispatch2] = useReducer(reducer,initialState)

    return (
        <div> 
            <h1>--------------------</h1>
            <h1>Count 0(MultiUseReducer) - {currentval}</h1>
            <h1>--------------------</h1>
            <button onClick={() => dispatch('increment')}>Inc</button>
            <button onClick={() => dispatch('decrement')}>dec</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <div> 
                <h1>--------------------</h1>
                <h1>Count Two(MultiUseReducer) - {currentval2}</h1>
                <h1>--------------------</h1>
                <button onClick={() => dispatch2('increment')}>Inc2</button>
                <button onClick={() => dispatch2('decrement')}>dec2</button>
                <button onClick={() => dispatch2('reset')}>reset</button>
        </div>
        </div>
    );
}

export default MultiUseReducer;