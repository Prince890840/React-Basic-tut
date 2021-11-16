import React from 'react';

function UsestateObj(props) {

    const [name,setName] = React.useState({firstName: '',lastName: ''})
    
    return (
        <div>
            <form>

                <input 
                type="text" 
                placeholder="firstName"
                value={name.firstName}
                onChange={e =>setName({ ...name,firstName : e.target.value})}
                 />

                <input 
                type="text" 
                placeholder="LastName" 
                value={name.lastName}
                onChange={e =>setName({ ...name,lastName : e.target.value})}
                />

                <h1>fname:{name.firstName}</h1>
                <h1>lname:{name.lastName}</h1>
                <h2>{JSON.stringify(name)}</h2>

                {/* useState is does not automaticaly merge & update the obj
                    you have to manualy merge and update */}
            </form>
        </div>
    );
}

export default UsestateObj;