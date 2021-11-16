import React, { useEffect, useState } from 'react';

function UseEffect(props) {

    const [count,setCount] = useState(0)

    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `you Clicked ${count} times`
    }, [count])

    //2nd para call conditionally run effect

    /* 2nd parameter is array of values that affects on 
     when count value will be change then only useEffect re-render
    the values not change between render the affects not run*/

    return (
        <div>
            <input 
            type="text" 
            value={name}
            onChange={event => setName(event.targe.value)}
             />

            <button onClick={() => setCount(count+1)}>Click  {count} times</button>
        </div>
    );
}

export default UseEffect;