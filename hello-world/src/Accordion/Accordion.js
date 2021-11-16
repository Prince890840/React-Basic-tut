import React, { useState } from "react";
import {question} from './API';  
import MyAccordion from "./MyAccordion";

const Accordion = () => {
    const [data,setData] = useState(question);
    return(
        <>
            <h1>HELLO CONNECTION</h1>
            {
                data.map((curElement) => {
                    const { id } = curElement;
                    return <MyAccordion key={ id } {...curElement} />
                })
            }
        </>
    )
}

export default Accordion