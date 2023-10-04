import React, {useState} from 'react';

const ClickMe=()=> {
    const [counter, setcounter] = useState(0);
    return(
        <div>
             <h1>Clicks Counter</h1>

             <button onClick={() => setcounter(counter+1)}>ClickMe</button>
             <h2> the total clicks are: {counter}</h2>
        </div>
    )
}

export default ClickMe