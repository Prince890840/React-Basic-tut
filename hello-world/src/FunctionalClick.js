import React  from 'react';

function FunctionalClick(){
    function clickHandler(){
        console.log("Button Clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>ClickMe</button>
        </div>

    )
}

export default FunctionalClick