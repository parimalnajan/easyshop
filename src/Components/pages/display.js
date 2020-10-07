import React, { useEffect ,useState} from 'react';
import firebase, { database } from 'firebase';
import Auth from './auth';

  function Display(){   

    var user = firebase.auth().currentUser;
  // let ref = firebase.database().ref("Users/"+id);
    
    let [ui,setUI]= useState({});
    let [loading,setLoading]=useState(true);   
    let [id,setUser]=useState(''); 
   
    let [details,setd]=useState({a:'',b:'',c:'',d:''});
    useEffect(()=>{    
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {     
            console.log(user.uid);    //logs successfully     
            setUser(()=>{
              return id=user.uid
            });
            console.log("id:"+id);    //calling state variable logs empty string                                           
           
            let ref =  firebase.database().ref("Users/"+user.uid);
           
             ref.once('value').then(async(snapshot)=>{
               console.log(snapshot.val())
               let name = await( snapshot.val())     
   
                  setUI(name);
                  console.log(ui); 
                  setLoading(false);
             })
                  user.providerData.forEach(function (profile) {                     
                    setd({b:profile.displayName,c:profile.email,d:profile.photoURL,a:profile.providerId});
                                  
                  console.log(details);
               })
      
        
        } else { console.log('nousertemp');
          // No user is signed in.
        }
      });
 

    },[])
      
/* 
 user.providerData.forEach(function (profile) {
 let provider= profile.providerId;
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
 })
          let data= user.providerData*/
    useEffect(()=>{
      console.log('from effect')
      console.log(ui);
      console.log(id);
   


    },[])
        
        
  return (<div>  {loading? <div>....loading</div>:<>
                <p>dispaly called for : {id}</p>
               
                <p>name: {details.b}</p>
                <p>name: {details.a}</p>
                <p>name: {details.d}</p>
                <p>name: {details.c}</p>
                <p>age: {ui.age}</p>
                <p>Quote:{ui.quote}</p></>
        
}
    
    </div>
)
}
export default Display;

/*<h1>
{props.age}</h1>  <div className='temp'> <button onClick={console.log('xd')}>show</button>
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
    }
    
    
      async function showdata(){
    
    await ref.once('value').then(snapshot =>{ 
       let  name= await (snapshot.val())
    
    setUI(name);
    console.log(ui); 
  
 });
 }  
 showdata(); */