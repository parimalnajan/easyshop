import React from "react";
import {NavLink,Router} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

    return(
        <ul className="nav-links" onClick={props.onClick}>
         {props.auth? (<>
            <li><NavLink to ="/list">Request Products</NavLink></li>    
            <li><NavLink to ="/products">Products</NavLink></li>         
            <li><NavLink to = "/cart">Cart ({props.cartqty})</NavLink></li>
            <li><NavLink to="/Logout">Log Out</NavLink></li></>)
            :(<>
            <li><NavLink to = "/account">Register</NavLink></li>
            <li><NavLink to = "/" exact >Login</NavLink></li></>)
         }

        </ul>
    )
};

export default NavLinks;