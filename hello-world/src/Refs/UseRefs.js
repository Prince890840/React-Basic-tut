//access dom node directly from the functional component

import React, { useEffect, useRef } from 'react';

function UseRefs(props) {

    const inputRef = useRef(null)

    useEffect(() => {
       //focus the input element 
       inputRef.current.focus()
    },[])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default UseRefs;