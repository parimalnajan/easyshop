import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import InputBox from "../../Components/Layout/InputBox";

import firebase, { database } from 'firebase';
const ListBuilder =()=>{ 
       var user = firebase.auth().currentUser;  
       useEffect(()=>{    
              firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
               setUser(user.uid);
                  
            
               
              } else { setUser('Loading..');
                // No user is signed in.
              }});            
              },[])

      
      // let testitem={id:'12',item:"22 item",flavor:"22",qty:'5'};
       let [ui,setUi]=useState('');

       const  [listx,setlistx] =  useState([]);
       let [isdisabled,setDisabled]=useState(false);
       let [uid,setUser]=useState('');
       let listref=firebase.database().ref("Users/"+uid+"/List");   
 
       useEffect(()=>{
              
      
      },[])
let setDisabledcall= ()=>{
       
}    
let fbfucntion =()=>{    
       setDisabled(true);
       let listref=firebase.database().ref("Users/"+uid+"/List");    

       listref.once('value')
       .then(snapshot =>{
              snapshot.forEach(item=>{       
                                   console.log(item.val())
                                   //setlistx(listx.push(item.val()))
                                   let templist=[...listx];
                                   setlistx((prevlistx) =>{
                                          return prevlistx.concat(item.val());    }); 

             
       })
       })
 //listref.once('value').then(snapshot =>{        snapshot.forEach(element => {console.log(element.val())             });})

}
 let fbadd=(itemrecieve)=>{
        let thisid = itemrecieve.id;
        let listref=firebase.database().ref("Users/"+uid+"/List");
              listref.child(thisid).set({item:itemrecieve.item,
              flavor:itemrecieve.flavor,
              qty:itemrecieve.qty,
              id:itemrecieve.id});
 }


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
        let listref=firebase.database().ref("Users/"+uid+"/List");
       listref.child(id2).remove();
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
<div> <InputBox additem={addItemBot} listx={listx} additemfb={fbadd} />
              
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
  <div>                           
  <button disabled={isdisabled} onClick={fbfucntion}>Sync Cloud</button> </div>
 
    </div>       
        );    
}

export default ListBuilder;
