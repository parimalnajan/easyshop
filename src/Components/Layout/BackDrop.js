import React from 'react';

import './Backdrop.css';


const BackDrop= props =>{

    return(
        <div className ="backdrop" onClick={props.onClick}></div>
    )
}

export default BackDrop;