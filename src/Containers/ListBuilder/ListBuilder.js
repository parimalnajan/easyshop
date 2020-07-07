import React, { Component,useState, useEffect } from "react";
//import Aux from '../../Hoc/Aux';
//import   Card   from "./Card";
import ListItem from "./ListItem";
import InputBox from "../../Components/Layout/InputBox";

const ListBuilder =()=>{ 
        
      const  [listx,setlistx] =  useState( 

        [ {id:1,item:"test item",flavor:"vanilla",qty:'5'},
        ]
          );

          let idcounter=1 ;

let addItemBot =(itemrecieve)=>{
               
                idcounter=idcounter+1;
                itemrecieve.id= idcounter;
                console.log("generated id:" ,idcounter);console.log("recieved and adding");console.log(itemrecieve);
               // listx.push(itemrecieve); this worked for class
               // setlistx(listx.concat(itemrecieve)); bad for sync etc
                setlistx((prevlistx) =>{
                return prevlistx.concat(itemrecieve);
                
              
                });
               
 }
               
        
let deleteItem =(id2) =>{
        setlistx((listx) =>{                
                
                    
        let abc=  listx.filter(x => x.id!=id2);  

        
         return abc;   
       //return listx.splice(id2,1);       
                                
        });           
      
        console.log("delete called on"); console.log(id2);
        console.log(listx);
       
 }




 /*const getid=(itemforindex)=>{

        const itemc=itemforindex.item;
        const flavorc=itemforindex.flavor;
        const qtyc=itemforindex.qty;

        const index= listx.findIndex(
                x =>x.item===itemc && x.flavor===flavorc && x.qty==qtyc);
        return index;   
        }

    
       

const setid = (newid) =>{
        
       console.log('this is the newid'); console.log(newid);
       console.log(listx[newid]);
       
       // ID=newid;
                  // return[...prevlistx,itemrecieve]
}*/

        
useEffect(()=>{
       
        console.log(listx);

},[listx])

      

return(
<div> <InputBox  additem={addItemBot}  />
              
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
        
                           
                //additem={this.additem}
                ></ListItem>  ))
                
                }                         
                             
 </div>          
        );    
}

export default ListBuilder;
