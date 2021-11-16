import React, { useState } from "react";

const UseStateArray = () => {

    const data = [
        {
            id:0,name:"Vijay",age:25
        },
        {
            id:1,name:"Prince",age:21
        }
    ]

    const[state,setState] = React.useState(data);

    const clearArray = () => {
        //data = []; normaly we can but here useState concept
        setState([]);
    }

    return (
        <>
            <h1>UseStateArray Concept</h1>
            {/* {} inside return we can use javascript */}
            {
                state.map((array) =>{ 
                    return <h1 key={array.id}>Name: {array.name} </h1>
                })
            }
            <button onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray