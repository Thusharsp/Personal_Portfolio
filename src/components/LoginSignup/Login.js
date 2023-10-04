import React from 'react';
import { useState } from 'react';
import './login.css';

const login = () => {
    
        
        <form className='Login'>
            <div className='Header'>Login Page</div>
            <div className='Email'>
                <input className='emailbox' type='email' placeholder='Email Address'/>  
            </div>
            <div className='Password'>
                <input className='passbox' type='password' placeholder='Password'/>  
            </div>
            <div className='logbtn'>
            <button className='loginbtn'>Login</button>
            <button className='registerbtn'>Register</button>
            </div>

        </form>
    )
}
export default login