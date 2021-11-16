import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentA(props) {
    const CountContext = useContext(CountContext)
    return (
        <div>
            ComponentA - {CountContext.countState}
            <button onClick={() => CountContext.countDispatch('increment')}>Inc</button>
            <button onClick={() => CountContext.countDispatch('decrement')}>dec</button>
            <button onClick={() => CountContext.countDispatch('reset')}>reset</button>
        </div>
    );
}

export default ComponentA;