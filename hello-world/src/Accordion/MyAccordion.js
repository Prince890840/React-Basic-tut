import React from 'react';

function MyAccordion({question,answer}) {
    return (
        <div>
            <h1>{question}</h1>
            <br />
            <p>{answer}</p>
        </div>
    );
}

export default MyAccordion;