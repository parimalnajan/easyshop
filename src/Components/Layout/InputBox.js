
import React, {  useState, } from "react";
import Card from '../../Containers/ListBuilder/Card';

import {PlusSquareOutlined} from'@ant-design/icons';

import "./InputBox.css";
import '../../Containers/ListBuilder/Card.css';



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
 
    if(itemText==='Item')setitemText('');
    setCol1("list-elements");
}
const setnull2=()=>{
  
   if(flavorText==='Variety')setflavorText('');
   setCol2("list-elements");
}
const setnull3=()=>{
   
    if(qtyText==='Quantity')setqtyText('');
    setCol3("list-elements");
}
const setnull=()=>{
    // itemText = ''; qtyText= ''; flavorText= ''; without state , dosnt work
    setitemText('Item'); setqtyText('Quantity'); setflavorText('Variety');
    setCol2("altcolor");
    setCol1("altcolor");
    setCol3("altcolor");
}


let idgen = () => {
  let genid = Math.floor(Math.random() * 100 + 1);
  for (let i = 0; i < props.listx.length; i++) {
    if (props.listx[i].id === genid) {
      console.log("duplicate genereate, regen");
      return idgen();
    } else if (props.listx.length === 100) {
      alert("exceeded coded id limit");
      return;
    }
  }
  return genid;
};

const addItemLocal = ()=>
{ 
   if(isNaN(qtyText)){
     alert("please enter valid quantity");
     return;
   }
    let tempid = idgen();

    const newitem = {
      item: itemText,
      flavor: flavorText,
      qty: qtyText,
      id: tempid,
    };

    if (newitem.item === "Item" || newitem.item === "") {
      alert("Please enter item name");
      return;
    }
    if (flavorText === "Variety" || flavorText === "") {
      newitem.flavor = "-";
    }

    props.additem(newitem);
    props.additemfb(newitem);

    console.log("generated id:", tempid);
    console.log("recieved and adding");
    console.log(newitem);
    setnull();
     

 
};

let [textcol1,setCol1]=useState("altcolor");
let [textcol2,setCol2]=useState("altcolor");
let [textcol3,setCol3]=useState("altcolor");



    return(
<div className="inputbox-wrap">
 <Card>
     <div className="listbox-item">

      <div className="listbox-title">Welcome, {props.name}</div>
    <div className="listbox-title">Please enter the details of required item </div>
          <div className="listbox-inputs">
           <input className={textcol1} onClick= {setnull1} onChange={textChangeBot1} value ={itemText}></input>
            <input className={textcol2}onClick= {setnull2} onChange={textChangeBot2} value ={flavorText}></input> 
            <input className={textcol3}onClick= {setnull3} onChange={textChangeBot3} value ={qtyText}></input>
            </div>
 
 <div  className="listbox-button"onClick={addItemLocal}> Add to list    

 </div>

 </div>
</Card></div>

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