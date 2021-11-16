// https://youtu.be/dpw9EHDh2bM

// 1.Don't call hooks inside loops.conditions or nested functions.
// 2.Component 1st letter should be uppercase.

import React, { useState } from 'react';

//Array Destructuring
let name = ['Lion','Cow','goat']
const [name1,name2,name3] = name;
console.log(name1)

const Demo = () => {

    const state = useState();  
    // useState is Hook

    const [count,setCount] = useState(0);

    // count -> Current Val 
    //  setCount ->Function and useState(5) ->initial val

    const IncNum = () =>
    {
        setCount(count - (-10))
        // console.log('Function Clicked.. ' + count++)
    };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
        </>
    )
}

export default Demo