import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import InputBox from "../../Components/Layout/InputBox";

const ListBuilder =()=>{ 
             
        const  [listx,setlistx] =  useState( 

        [{id:1,item:"test item",flavor:"vanilla",qty:'5'},]);

let idgen=()=>{
 let genid = Math.floor((Math.random() * 10) + 1);
        for(let i=0; i<listx.length;i++){ 
                if (listx[i].id===genid) {
                        console.log("duplicate genereate, regen");
                    return idgen();
                   
                } 
               else if(listx.length===10){alert("exceeded coded id limit"); return;} 
                }
        return genid;
}

let addItemBot =(itemrecieve)=>{              
               itemrecieve.id=idgen();
                console.log("generated id:" ,itemrecieve.idcounter);console.log("recieved and adding");console.log(itemrecieve);
               // listx.push(itemrecieve); this worked for class
               // setlistx(listx.concat(itemrecieve)); bad for sync etc
                setlistx((prevlistx) =>{
                return prevlistx.concat(itemrecieve);
                             
                });
               
 }
               
        
let deleteItem =(id2) =>{
        setlistx((listx) =>{                
                
                    
        let abc=  listx.filter(x => x.id!==id2);  
         return abc;   
       //return listx.splice(id2,1);       
                                
        });           
      
        console.log("delete called on"); console.log(id2);
        console.log(listx);
       
 }


useEffect(()=>{
    
        console.log(listx);

},[listx])

    

return(
<div> <InputBox additem={addItemBot}  />
              
              {                                
               listx.map((itemx,index) =>(
                <ListItem 
                key={index}
                id={itemx.id} 
                asd={index+1}

                itemname={itemx.item}
                itemflavor={itemx.flavor}
                itemqty={itemx.qty}
               
                deleteItem={deleteItem}        
                           
                
                >
                     
                </ListItem>  ))
                
                }                         
                             
 </div>          
        );    
}

export default ListBuilder;
