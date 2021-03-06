import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect, Link, NavLink, useHistory} from 'react-router-dom';
import firebase from 'firebase';
import ListBuilder from './Containers/ListBuilder/ListBuilder';
import Navigation from '../src/constants/navigation';
import * as ROUTES from '../src/constants/routes';
import MainNavigation from './Components/Layout/MainNav';
import Display from './Components/pages/display';
import Auth from './Components/pages/auth';
import Cart from './Components/pages/cart';
import { connect } from 'react-redux';
import store from './store';
//import InputBox from './Components/Layout/InputBox';
import * as userReducer from './actions/userActions'
import Register from './Components/pages/register';
import Products from './Components/pages/products';


import './App.css';
import './index.css';
import Login from './Components/pages/login';
import Logout from './Components/pages/logout';



/*connect((store)=>{
  return{
   }

})*/

let App=() =>{
  
  let firebaseinit=true;
  let [reduxState,setReduxState]=useState('wait for it');
  let [reduxState2,setReduxState2]=useState('wait for iiiit');
  let tempstate=store.getState();
  let [user2,setUser]=useState('');

  const fireRedux=()=>{
    let demodispatch={};
   // demodipatch=userReducer.demo();
    store.dispatch(userReducer.demo());

    tempstate=store.getState();
    setReduxState(tempstate.user.testmsg);
    setReduxState2(tempstate.list.testmsg2);
    console.log(tempstate);
  }

const history = useHistory();
let [tempcart, setCart] = useState([]); //Cart Array
let [len,setLen]=useState(0);

let addToCart = (toadd) => {
 
   console.log("adding now",toadd);
   setCart((prevCart) => {
      let temp = prevCart.concat(toadd);
      return temp;
   });
   alert(`Added successfully: ${toadd.title}`)      
   console.log(tempcart);
};

useEffect(()=>{             //Subscribes to cart array and updates length value
  let wait=tempcart.length;
  setLen(wait);
  console.log(len);
},[tempcart]);

const buynow =(tobuy)=>{
  console.log("buying now",tobuy);
  setCart([]);
  setCart((prevCart) => {
    let temp = prevCart.concat(tobuy);
    return temp;
 });

  history.push(`/cart`);
}


let deleteHandler=(id2)=>{
  setCart((oldcart)=>{
    console.log(id2);
    let newcart=oldcart;
      newcart=oldcart.filter((x) => x.id !== id2);
     return newcart;
  });
      console.log("delete from cart success"); console.log(tempcart);
}

 
let qtyInc=(id)=>{
  let temp=[...tempcart]
  console.log(temp)
  console.log(id);
  temp[id].qty++;
  setCart(temp);
     console.log(tempcart[id].qty)
     
}

let qtyDec=(id)=>{
  let temp=[...tempcart]
  console.log("dec called:",temp)
  console.log("id:",id);
  if(temp[id].qty>0){
  temp[id].qty--;
  setCart(temp);
     console.log(tempcart[id].qty)}
     else return;
     

  
}



let [isAuthenticated,setIsAuthenticated]=useState(false);
let [name,setName]=useState('');
const googleAuth=()=>{   

  var provider = new firebase.auth.GoogleAuthProvider();
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
      console.log(error);
      // ...
    });
    
var currentuser = firebase.auth().currentUser;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    setIsAuthenticated(true);
history.push(`/products`);
setUser(user.uid);
setName(user.displayName);
}
        else{                
       return;}
        });

      }

const demoAuth=()=>{
  setUser("demo_user");
  
  setIsAuthenticated(true);
  
  history.push(`/products`);
}



useEffect(()=>{
  console.log(user2,":logged in")

},[user2]);



  return firebaseinit!==false? (

    <div className="app-wrapper"><MainNavigation auth={isAuthenticated} cartqty={len}/>   
     
        <Switch>
          <Route path exact = "/"> <Login googleAuth={googleAuth} demoAuth={demoAuth}/> </Route>
          <Route path = "/auth" component={Login} />
          <Route path = "/account"><Register/></Route>

          <Route path ="/list"> {isAuthenticated?(<ListBuilder userid={user2} name={name}/>):(<div style={{marginTop:'50px'}}>Invalid User,Please authenticate</div>)}</Route>
          <Route path= "/cart"> {isAuthenticated?(<Cart sendcart={tempcart} deleteCartItem={deleteHandler} qtyDec={qtyDec} qtyInc={qtyInc}/>):(<div style={{marginTop:'50px'}}>Invalid User,Please authenticate</div>)} </Route>
          <Route path= "/products">{isAuthenticated?(<Products addCall={addToCart} buynow={buynow}/>):(<div style={{marginTop:'50px'}}>Invalid User,Please authenticate</div>)} </Route>
          <Route path="/Logout"><Logout setauth={setIsAuthenticated}/></Route>
        </Switch>
     
    </div> 

    ): <div>Loading....</div>;
  
}

export default App;

