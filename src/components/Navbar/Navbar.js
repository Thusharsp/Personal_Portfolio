import React from "react";
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li>
                <Link className="MenuList">Home</Link>
                </li>
                <li>
                <Link className="MenuList">About</Link>
                </li>
                <li>
                <Link className="MenuList">Projects</Link>
                </li>
                <li>
                <Link className="MenuList">Creativity</Link>
                </li>                
            </ul>
        </nav>
    )
}

export default Navbar