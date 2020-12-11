import React, { useState, useEffect } from "react";

import ListItem from "./ListItem";
import InputBox from "../../Components/Layout/InputBox";
import store from "../../store";
import '../../App.css';

import firebase, { database } from 'firebase';
const ListBuilder =(props)=>{ 

       let name = {};
       let [loadingtxt, setLoadingtxt] = useState("Loading Data..");

       const [listx, setlistx] = useState([]);      
       let [loading, setLoading] = useState(true);
       let [uid, setUser] = useState("");

       let listref = firebase.database().ref("Users/" + props.userid + "/List");
      
 
       useEffect(() => {
         firebase.auth().onAuthStateChanged(function (user) {
         
            console.log(props.userid);
             setUser(props.userid);

             let listref = firebase
               .database()
               .ref("Users/" + props.userid + "/List");     //cant use state for some reason
             listref.once("value").then((snapshot) => {
               snapshot.forEach((item) => {
                 name = item.val();
                 console.log(name);
                 //setlistx(listx.push(item.val()));     let templist = [...listx];
                 setlistx((prevlistx) => {
                   return prevlistx.concat(item.val());
                 });
                 console.log(listx)
                 if(listx===null){setLoadingtxt("EmptyList");}
                 else{                
                 setLoading(false);}
                 
               });
             });
          
         });
       }, []); 
  


 let fbadd=(itemrecieve)=>{
        let thisid = itemrecieve.id;
        let listref=firebase.database().ref("Users/"+uid+"/List");
              listref.child(thisid).set({item:itemrecieve.item,
              flavor:itemrecieve.flavor,
              qty:itemrecieve.qty,
              id:itemrecieve.id});
              
              if(setLoading!==false)setLoading(false);
              //implement firebase id return into array as alternate ID assignment
 }


let addItemBot =(itemrecieve)=>{                  
               // listx.push(itemrecieve); this worked for class
               // setlistx(listx.concat(itemrecieve)); bad for sync etc
                setlistx((prevlistx) =>{
                return prevlistx.concat(itemrecieve);
                             
                });  
 }

 
                 
let deleteItem = (id2) => {
  setlistx((listx) => {
    let abc = listx.filter((x) => x.id !== id2);
    return abc;
    //return listx.splice(id2,1);
  });
  let listref = firebase.database().ref("Users/" + uid + "/List");
  listref.child(id2).remove();
  console.log("delete called on");
  console.log(id2);
  console.log(listx);
};

 let editItem = (id2) => {
   let newarr = [...listx];
   let recid = id2.id;

   for (let i = 0; i < newarr.length; i++) {
     if (newarr[i].id === recid) {
       console.log("editingid :", recid);
       console.log(newarr[i]);
       newarr[i] = id2;
       //newarr[i].flavor='edit';
       //  newarr[i].qty='edit';
       setlistx(newarr);
     }
   }
 };
 

useEffect(() => {

  console.log(listx);

}, [listx]);

    
let temp = store.getState()




return (
  <div className="list-page-wrapper">
  
    <InputBox additem={addItemBot} listx={listx} additemfb={fbadd} name={props.userid} />
    {loading ? (
      <div>{loadingtxt}</div>
    ) : (
      <>
        {listx.map((itemx, index) => (
          <ListItem
            key={index}
            id={itemx.id}
            asd={index + 1}
            itemname={itemx.item}
            itemflavor={itemx.flavor}
            itemqty={itemx.qty}
            deleteItem={deleteItem}
            editItem={editItem}
          ></ListItem>
        ))}
      </>
    )}
  </div>
);    


}



export default ListBuilder;






/* 
useEffect(()=>{    
              firebase.auth().onAuthStateChanged(function(user) {
              if (user) {setUser(user.uid);    
                     if(isdisabled===false){return}
                     
                
               
            
               let listref=firebase.database().ref("Users/"+user.uid+"/List");  
               listref.once('value')
               .then( snapshot =>{
                      snapshot.forEach( item=>{       
                              name = (item.val())
                              console.log(name)
                             //setlistx(listx.push(item.val()))
                             let templist=[...listx];
                            setlistx( (prevlistx) =>{
                                   return prevlistx.concat(item.val());    }); 
                                 setLoading(false);
                                 setDisabled(false);
        
                     
               })
               })

              
                     
              } else { console.log('nouserfound temp')
                // No user is signed in.
              }});            
              },[])


               useEffect(() => {
         firebase.auth().onAuthStateChanged(function (user) {
         
           if (user) {
             setUser(user.uid);

             let listref = firebase
               .database()
               .ref("Users/" + user.uid + "/List");     //cant use state for some reason
             listref.once("value").then((snapshot) => {
               snapshot.forEach((item) => {
                 name = item.val();
                 console.log(name);
                 //setlistx(listx.push(item.val()));     let templist = [...listx];
                 setlistx((prevlistx) => {
                   return prevlistx.concat(item.val());
                 });
                 console.log(listx)
                 if(listx===null){setLoadingtxt("EmptyList");}
                 else{                
                 setLoading(false);}
                 
               });
             });
           } else {
             console.log("nouserfound ");
             // No user is signed in.
           }
         });
       }, []); 

*/