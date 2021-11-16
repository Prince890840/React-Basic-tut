import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentE(props) {
    const CountContext = useContext(CountContext)
    return (
        <div>
            ComponentE
            <button onClick={() => CountContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>dec</button>
            <button onClick={() => CountContext.countDispatch('reset')}>reset</button>
        </div>
    );
}

export default ComponentE;