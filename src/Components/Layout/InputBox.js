
import React, {  useState, } from "react";
//import Aux from '../../Hoc/Aux';
import   Card   from '../../Containers/ListBuilder/Card';
import '../../Containers/ListBuilder/Card.css';
//import Listitem from '../../Containers/ListBuilder/ListItem';

import "./InputBox.css";


const InputBox = (props) =>{  

const [itemText,setitemText]= useState('Item');
const textChangeBot1= event =>{
       setitemText(event.target.value);
   }

const [flavorText,setflavorText]= useState('Variety');
const textChangeBot2= event =>{
   setflavorText(event.target.value);
}

const [qtyText,setqtyText]= useState('Quantity');   
const textChangeBot3= event =>{
    setqtyText(event.target.value);
}


const setnull1=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
    if(itemText==='Item')setitemText('');
}
const setnull2=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
   if(flavorText==='Variety')setflavorText('');
}
const setnull3=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
    if(qtyText==='Quantity')setqtyText('');
}
const setnull=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
    setitemText('Item'); setqtyText('Quantity'); setflavorText('Variety');
}


let idgen=()=>{
    let genid = Math.floor((Math.random() * 10) + 1);
           for(let i=0; i<props.listx.length;i++){ 
                   if (props.listx[i].id===genid) {
                           console.log("duplicate genereate, regen");
                       return idgen();
                      
                   } 
                  else if(props.listx.length===10){alert("exceeded coded id limit"); return;} 
                   }
           return genid;}

const addItemLocal = ()=>
{ 
    //itemrecieve.id=idgen();                    console.log("generated id:" ,itemrecieve.idcounter);console.log("recieved and adding");console.log(itemrecieve);
    let tempid= idgen();
    
    const newitem={ item:itemText,
                    flavor:flavorText,
                    qty:qtyText,
                    id:tempid
                    };
                    
                    if(newitem.item==='Item' || newitem.qty==='Quantity'|| newitem.flavor==='Variety')    
                    {alert("Please enter item name and quantity");
                        return}
                            
    props.additem(newitem);
    
console.log("generated id:" ,tempid);console.log("recieved and adding");console.log(newitem);   
    setnull();
     

 
};



    return(

 <Card>
     <div  className="list-item">

 <div className="list-subitem">
    <div className="list-index">Enter item: </div>
    <div className="name-top-handler">
         <div className="list-name-wrapper">
           <input className="list-elements" onClick= {setnull1} onChange={textChangeBot1} value ={itemText}></input>
         </div>
            
 <input className="list-elements"onClick= {setnull2} onChange={textChangeBot2} value ={flavorText}></input>
 <input className="list-elements"onClick= {setnull3} onChange={textChangeBot3} value ={qtyText}></input>
 </div></div>
 
 <div className="list-subitem">
 <button className="list-elements"  onClick={addItemLocal} >ADD</button>
 </div>

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