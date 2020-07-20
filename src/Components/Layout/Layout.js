import React from 'react';


import './Layout.css';

const layout = (props) =>{
    return(<main>
   <header className='main-header'>
        {props.children}        
    </header>  
    </main>

);
}
export default layout;