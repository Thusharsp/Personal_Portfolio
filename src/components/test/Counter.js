import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        setCounter(counter-1)
    }

    return(
        <div>
            <h1> Counter Application</h1>
            <button className='Increment' onClick={increment}>Increment</button>
            <button className='Decrement' onClick={decrement}>Decrement</button>

            <h2>Count Value: {counter}</h2>
        </div>
    )
}
export default Counter;