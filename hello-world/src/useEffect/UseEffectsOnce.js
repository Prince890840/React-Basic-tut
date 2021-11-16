import React, { useEffect } from 'react';

function UseEffectsOnce(props) {

    const [x,setX] = React.useState(0)
    const [y,setY] = React.useState(0)

    const logMousePosition = event => {
        console.log('Mouse event')
        setX(event.clientX)
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log('Component Unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }

    }, [])

    //WE CAN MIMIC COMPONENTDIDMOUNT USEFFECT HOOK BY PASSING  [] ARRAY TO USEEFFECT

    return (
        <div>
            Hooks X- {x} Y -{y}
        </div>
    );
}

export default UseEffectsOnce;