import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactDom from 'react-dom';  

import "./SideDrawer.css";

const SideDrawer = props =>{
    return ReactDom.createPortal( <CSSTransition in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
        ><aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>,document.getElementById('drawer-hook'));
   
};

export default SideDrawer;

//return ReactDom.createPortal(content,document.getElementById('drawer-hook'));