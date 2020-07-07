import React from "react";
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

    return(
        <ul className="nav-links" onClick={props.onClick}>
            <li><NavLink to ="/List">ItemsList</NavLink></li>
            <li><NavLink to = "/order">OrderStatus</NavLink></li>
            <li><NavLink to = "/user/account">MyAccount</NavLink></li>
            <li><NavLink to = "/signout">SignOut</NavLink></li>
        </ul>
    )
};

export default NavLinks;