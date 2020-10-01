import React, { useEffect ,useState} from 'react';
import firebase, { database } from 'firebase';
import Auth from './auth';

  function Display(){   
    useEffect(()=>{
    
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         setUser(user.uid);
        } else { setUser('Loading');
          // No user is signed in.
        }
      });
 

},[])
         
    var user = firebase.auth().currentUser;
    let [id,setUser]=useState(''); 
    let [ui,setUI]= useState({});
            
       let ref = firebase.database().ref("Users/"+id);
let showdata =()=>{
        ref.once('value').then(snapshot =>{
          let name= (snapshot.val())
          setUI(name);
          //setUI(snapshot.val());
         });
     }
  

         
    useEffect(()=>{
      console.log(ui);
    },[ui])
        
        
  return (
    <div> <button onClick={showdata}>show</button>
                <p>dispaly called for : {id}</p>
                <p>name: {ui.name}</p>
                <p>age: {ui.age}</p>
                <p>Quote:{ui.quote}</p>
        

    </div>
)
}
export default Display;

/*<h1>
{props.age}</h1>
<h2>{props.name}</h2>
<p>{props.quote}</p>
 <p>{name}, Age: {age}</p>
 
 
 
  /*ref.once('value').then(function(snapshot){
    let abc=snapshot.val() && snapshot.val().abc;
   });

   console.log(abc);
   
   let gotData=(data)=>{
   let dataRecieve= data.val();
     console.log(dataRecieve);
   let  nameRecieve= dataRecieve.name;
     console.log('a: '+nameRecieve);   
    }*/