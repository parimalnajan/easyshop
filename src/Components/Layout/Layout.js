import React from 'react';

import Aux from '../../Hoc/Aux';
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