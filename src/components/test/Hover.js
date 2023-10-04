import React, {useState} from "react";

const Hover=()=>{
    const [count, setcount] = useState(0);
    return(
        <div>
            <h1>Hover Application</h1>

            <h3 onMouseOver={()=> setcount(count+1)}>Hover Over Me!!!</h3>

            <h4>Number of Hovers: {count}</h4>
        </div>
    )
}
export default Hover