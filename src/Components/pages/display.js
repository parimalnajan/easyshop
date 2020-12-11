import React, { useEffect ,useState} from 'react';
import firebase, { database } from 'firebase';

import * as Icon from 'react-feather'
import Auth from './auth';
import Card from '../../Containers/ListBuilder/Card';


import './auth.css';

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
        setd({b:"Username here",c:"dummy@demomail.com",d:"https://via.placeholder.com/150C/"})
            setLoading(false);
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
        
    let copy2=()=>{
      
       
      navigator.clipboard.writeText(details.c).then(function() {
        console.log("success");
        alert("Email id copied to clipboard!");
      }, function() {
        console.log("fale")
      });
     
      }
    
  return (<div className='maindisplay'>  {loading? <div>....loading.  Please Login</div>:
            <div className='profilecard'>

                <div className='upper'>  <div className='ppcontainer'><img className='pp'src={details.d}></img></div> </div>   
                          
                <div className='lower'>                              
                        <p className='p-name'>{details.b}</p>
                        <p>{ui.quote}</p>                            
                        <div className='icons'>
                            <a href="https://www.linkedin.com/in/parimal-najan-521008169/" target="_blank"><Icon.Linkedin /></a>                  
                            <a href="https://github.com/parimalnajan" target="_blank"><Icon.GitHub color="black"/></a>
                            <a><Icon.Mail color="red" onClick={copy2}/></a>
                         </div>
                   </div>
               </div>
        }</div>
)
}
export default Display;

