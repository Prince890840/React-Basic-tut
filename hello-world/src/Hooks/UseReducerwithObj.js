import React, { useReducer } from 'react';

//Maintain state and action as an object

const initialState = {
    //local declaration of 1st & 2nd counter
    firstCounter: 0,
    secondCounter: 10
}

    //action is an object you can pass additional data in the reducer function
    
    //state as an object you can track multiple state variables

    const reducer = (state,action) => {
        switch(action.type){
            case 'increment':
                return {...state,firstCounter : state.firstCounter + action.value}
            case 'decrement':
                return {...state,firstCounter : state.firstCounter - action.value}
            case 'increment2':
                return {...state,secondCounter : state.secondCounter + action.value}
            case 'decrement2':
                return {...state,secondCounter : state.secondCounter - action.value}
            case 'reset':
                return state = 0
            default:
                return state
        }

    }

    /* spread operator use

    function sum(x, y, z) {
        return x + y + z;
      }
      
      const numbers = [1, 2, 3];
      
      console.log(sum(...numbers)); //expected output: 6

    Spread syntax (...) allows an iterable such as an array expression
or string to be expanded in places where zero or more arguments 
(for function calls) or elements (for array literals) are expected,
or an object expression to be expanded in places where zero or more
key-value pairs (for object literals) are expected.*/
      

function UseReducerwithObj(props) {

    const[currentval,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h1>---------------------------------------</h1>
            <h1>FirstCounter - {currentval.firstCounter}</h1>
            <h1>---------------------------------------</h1>
            <h1>SecondCounter - {currentval.secondCounter}</h1>
            <h1>---------------------------------------</h1>
           
            <button onClick={
                () => dispatch({type:'increment',value: 1})}>Inc
            </button>
            <button onClick={
                () => dispatch({type:'decrement',value: 1})}>dec
            </button>
            <button onClick={
                () => dispatch({type: 'increment',value: 5})}>Inc 5
            </button>
            <button onClick={
                () => dispatch({type:'decrement',value:5})}>dec 5
            </button>
            <button onClick={
                () => dispatch({type:'reset'})}>reset
            </button>

            <div>
                <button onClick={
                    () => dispatch({type:'increment2',value: 1})}>Inc Counter 2
                </button>
                <button onClick={
                    () => dispatch({type:'decrement2',value: 1})}>dec Counter 2
                </button>
            </div>

        </div>
    );
}

export default UseReducerwithObj;
