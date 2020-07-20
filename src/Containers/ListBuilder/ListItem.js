import React from "react";
import   Card   from "./Card";


const ListItem = props => {         
               const deletelocal =()=>{props.deleteItem(props.id);
             
               }
        return(                    
<div>                                                 
<Card>
<div className="list-item">

<div className="list-subitem">
        <div className="list-index">{props.asd} </div>
        <div className="name-top-handler">
                <div className="list-name-wrapper">
                <div className="list-elements">{props.itemname}</div>
                </div>

        <div className="list-name-wrapper2">    
        <div  className="list-elements">{props.itemflavor}</div>
        <div className="list-elements">{props.itemqty}</div>
        </div></div></div>
        
<div className="list-subitem">
        {//<button className="list-elements" >EDIT</button>
        }
        <button  className="list-elements"onClick={deletelocal}>DEL</button> </div>
</div>
</Card>
</div>                             
                 
        )   
}

export default ListItem;
