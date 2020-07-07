
import React, { Component, useState, useEffect } from "react";
//import Aux from '../../Hoc/Aux';
import   Card   from '../../Containers/ListBuilder/Card';
//import Listitem from '../../Containers/ListBuilder/ListItem';

import "./InputBox.css";


const InputBox = (props) =>{  

const [itemText,setitemText]= useState('');
const textChangeBot1= event =>{
       setitemText(event.target.value);
   }

const [flavorText,setflavorText]= useState('');
const textChangeBot2= event =>{
   setflavorText(event.target.value);
}

const [qtyText,setqtyText]= useState('');
const textChangeBot3= event =>{
    setqtyText(event.target.value);
}


const setnull=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
    setitemText(''); setqtyText(''); setflavorText('');
}

//let newid= props.getid2(itemText,flavorText,qtyText);

const addItemLocal = ()=>
{ 
    //let newid= props.getid2(itemText,flavorText,qtyText);
    const newitem={ item:itemText,
                    flavor:flavorText,
                    qty:qtyText,
                    //id:newid
                    };
                   
    
                    if(newitem.item=='' || newitem.qty=='')    
                    {alert("Please enter item name and quantity");
                        return}

    props.additem(newitem);
    setnull();
     

 
};



    return(

 <Card  className="list-item">

 <div className="list-subitem">
    <div className="list-index">Enter item: </div>
    <div className="name-top-handler">
         <div className="list-name-wrapper">
           <input className="list-elements" onChange={textChangeBot1} value ={itemText}></input>
         </div>
            
 <input className="list-elements"onChange={textChangeBot2} value ={flavorText}></input>
 <input className="list-elements"onChange={textChangeBot3} value ={qtyText}></input>
 </div></div>
 
 <div className="list-subitem">
 <button className="list-elements"  onClick={addItemLocal} >ADD</button>
 </div>
</Card>

    );
}

export default InputBox;

/*
let  getid=()=>{
};

let additem =()=>{
props.itemnew.push({item:"x",flavor:'y',qty:'10'});
console.log(props.itemx);
   }
*/