import React, { useState } from 'react';

function LoginForm(props) {

    const state = useState("")

    const [name,setName] = useState()

    const [password,setPassword] = useState()

    const [fullName,setFullName] = useState()

    const onSubmit = (event) =>
    {
        event.preventDefault();
        setFullName(name)
    }

    const InputEvent = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    const InputEvent2 = (event) =>{
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    /*Spread Operator Concept Starts*/

    const bird = {
        name : 'peacock',
        age : '10',
    };

    const home = {
        id : 1,
        ...bird,
        gender : male,
    };

    console.log(home);

    /*Spread Operator Concept Ends*/
    
    return (
        <form onSubmit={onSubmit}>   
            <div>
                <h1>Hello {fullName}</h1>
               <input type="text"
                    placeholder="Enter the Name"
                    onChange={InputEvent}
                    value={name}
               />
               <br />
               <input type="password"
                    placeholder="Enter the Password"
                    onChange={InputEvent2}
                    value={password}
               />
               <br />
               <button type="submit">Submit</button>
            </div>
        </form> 
    );
}

export default LoginForm;