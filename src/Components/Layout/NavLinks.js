import React from "react";
import {NavLink,Router} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

    return(
        <ul className="nav-links" onClick={props.onClick}>
         
            <li><NavLink to ="/list">ItemsList</NavLink></li>
           {//} <li><NavLink to = "/order">OrderStatus</NavLink></li>
}
            <li><NavLink to = "/account">MyAccount</NavLink></li>
            <li><NavLink to = "/" exact >AUTH</NavLink></li>
        

        </ul>
    )
};

export default NavLinks;