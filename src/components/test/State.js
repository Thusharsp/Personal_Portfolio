import React from 'react';
import { useState } from 'react';
const State = () => {

    const [inputvalue, newstatevalue]=useState('');

    const onchange =(event) => {
        const newval = event.target.value;     
        newstatevalue(newval)   
    }

    return(
        <div>
            <h1>Hello! {inputvalue}</h1>
            <input type='text' placeholder='Write Something' onChange={onchange}></input>
        </div>
    )
}
export default State