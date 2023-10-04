import React, {useState} from 'react';

const AddNum = () => {

    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const [result,setResult]=useState(0);

    const sum = () => {
        setResult(num1 + num2)
    }

    return(
        <div>
            <h1>Adding numbers</h1>
            <input type='number' placeholder='0' onChange={event => setNum1(+event.target.value)}></input>
            <input type='number' placeholder='0' onChange={event => setNum2(+event.target.value)}></input>

            <button onClick={sum}>Result</button>

            <h2>Total : {result}</h2>
        </div>
    )
}
export default AddNum