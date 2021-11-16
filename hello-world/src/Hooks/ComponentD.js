import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD(props) {
    const CountContext = useContext(CountContext)
    return (
        <div>
            ComponentD
            <button onClick={() => CountContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>dec</button>
            <button onClick={() => CountContext.countDispatch('reset')}>reset</button>
        </div>
    );
}

export default ComponentD;