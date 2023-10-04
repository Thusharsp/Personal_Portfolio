import React, {useState} from 'react';
import './signup.css';

const Signup = () => {

    const [state, setstate] = useState(" ");

    const handlechange=(event)=> {
        setstate(event.target.value);
        
    }

    return(
        
        <form className='Signup'>
             <div className='Header'>Register</div>
             <div>Hello! {state}</div>
             <div className='Name'>
                <input className='namebox' type='name' placeholder='Name' onChange={handlechange}/>  
            </div>
            <div className='Email'>
                <input className='emailbox' type='email' placeholder='Email Address'/>  
            </div>
            <div className='Password'>
                <input className='passbox' type='password' placeholder='Password'/>  
            </div>
            <div className='regbtn'>
            <button className='register'>Register</button>
            </div>
        </form>
    )
}

export default Signup