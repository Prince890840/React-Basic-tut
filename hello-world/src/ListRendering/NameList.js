import React from 'react';
import Person from './Person';

function NameList(props) {

    const persons = [
        {
            fname:"Bruce",
            id:1
        },
        {
            fname:"Clerk",
            id:2
        },
        {
            fname:"Diana",
            id:3
        },
    ]

    const personList = persons.map(person =>
        (<Person key={person.id} person = {person} />))

    // In case of array doesn't have id to identify that the data is unique
    
    // const animals = ['Lion','Cow','Lion']
    // const animalList = animals.map(
    //                                 (animal,index) => <h2>key={index} {animal}</h2>
    //                               )


    // pass the person as an prop
    // key={person.id} means that id can be unique 

    return (
        <div>
            {/* Normal we can do
             <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>  */}
            
            {
                personList
            }
        </div>
    );
}

export default NameList;