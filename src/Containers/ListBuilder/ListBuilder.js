import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import InputBox from "../../Components/Layout/InputBox";

const ListBuilder =()=>{ 
             
        const  [listx,setlistx] =  useState( 

        [{id:1,item:"test item",flavor:"vanilla",qty:'5'},]);



let addItemBot =(itemrecieve)=>{              
              
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

 let editItem = (id2) =>{
        let newarr = [...listx];
        let recid = id2.id;
               //  a=editedItem.name;                 b=editedItem.flavor;                 c=editedItem.qty;
               for(let i =0; i<newarr.length;i++){
                if(newarr[i].id===recid){
                       console.log("editingid :", recid);
                       console.log(newarr[i]);
                       newarr[i]=id2;
                       //newarr[i].flavor='edit';
                     //  newarr[i].qty='edit'; 
                       setlistx(newarr);                       
                }
                
               // newarr[recivid]=id2;
                //setlistx(newarr)
}}

 



useEffect(()=>{
    
        console.log(listx);

},[listx])

    

return(
<div> <InputBox additem={addItemBot} listx={listx} />
              
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
                editItem={editItem}     
                   
                
                >
                     
                </ListItem>  ))
                
                }                         
                             
 </div>          
        );    
}

export default ListBuilder;
