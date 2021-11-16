import React from 'react';

function Person({person}) { 
    //  destructure the prop as the person in the parameter
    return (
        <div>
            <h1>My Name is {person.fname} and My Id is {person.id}</h1>
        </div>
    );
}

export default Person;