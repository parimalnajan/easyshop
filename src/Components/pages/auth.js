import React ,{useState, useEffect} from 'react';
import {crateStore} from 'redux';
import ListBuilder from '../../Containers/ListBuilder/ListBuilder';
import MainNavigation from '../../Components/Layout/MainNav';
import  { userRef, firebaseapp } from '../../firebase';
import * as firebase from 'firebase';

import Display from './display';
import Card from '../../Containers/ListBuilder/Card';
import Googlebutton from '../Layout/Googlebutton';
import ReactDOM from 'react-dom';
//import route from 'can-route';
//import DefineMap from 'can-define/map/map';

 
//import AuthContainer from '/auth-container/auth-container';
//import Tabs from 'auth-component/tabs/can-route';
//import SignupForm from 'auth-component/forms/signup/';
//import LoginForm from 'auth-component/forms/login/';
//import SVGInline from 'auth-component/';


import {BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import "./auth.css";
import '../../../node_modules/antd/dist/antd.css';

const Layout = (props) => {
  let[au,Setau]= useState('');
  let[showstuff,setstuff]=useState(false);

 
  var provider = new firebase.auth.GoogleAuthProvider();

  const signin= () =>{    
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
var user = firebase.auth().currentUser;

if (user != null||showstuff==true) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

}

let setdemo = ()=>{
const demoid= 'EITKl1eRYtTxAzqe8C5JlpvrAEl1';

  
}

const smth=()=>{
  var user = firebase.auth().currentUser;
  Setau(user.uid);
  if (user) {
    console.log('userid:' + au);
  } else {
    console.log('nouser ');
   
    }
    
   // firebase.database()    .ref('users')    .child(uid)    .set({      name:user.displayName,      age:'25',     quote:'second user quote'
    //  }) 

    
}






  return(<div className='logincard'>

    <button className='b-btn' onClick={setdemo}>Test</button>     

   < div onClick={signin}><Googlebutton></Googlebutton></div> 
    
    <button className='b-btn' >  Sign Out</button>

</div>
  );


  
}

export default Layout;