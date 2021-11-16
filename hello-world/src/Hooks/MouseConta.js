import React, { useState } from 'react';

function MouseConta(props) {

    const [display,setDisplay] = React.useState(true)

    return (
        <div>
           <button onClick={() =>setDisplay(!display)}>Toggle display</button>
            {
                display 
            }
        </div>
    );
}

export default MouseConta;