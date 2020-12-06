import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
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


/*connect((store)=>{
  return{
   }

})*/

let App=() =>{
  
  let firebaseinit=true;
  let [reduxState,setReduxState]=useState('wait for it');
  let [reduxState2,setReduxState2]=useState('wait for iiiit');
  let tempstate=store.getState();

  const fireRedux=()=>{
    let demodispatch={};
   // demodipatch=userReducer.demo();
    store.dispatch(userReducer.demo());

    tempstate=store.getState();
    setReduxState(tempstate.user.testmsg);
    setReduxState2(tempstate.list.testmsg2);
    console.log(tempstate);
  }


let [tempcart, setCart] = useState([]); //Cart Array

let addToCart = (cartArr) => {
   console.log(cartArr);

   setCart((prevCart) => {
      let temp = prevCart.concat(cartArr);

      return temp;
   });

   console.log(tempcart);
};

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
  console.log(temp)
  console.log(id);
  temp[id].qty--;
  setCart(temp);
     console.log(tempcart[id].qty)
  
}
  return firebaseinit!==false? (

    <div className="app-wrapper"><MainNavigation/>   
     
        <Switch>
          <Route path exact = "/" component={Auth} />
          <Route path = "/auth" component={Auth} />
          <Route path = "/account"><Register/></Route>
          <Route path ="/list"><ListBuilder/></Route>
          <Route path= "/cart"> <Cart sendcart={tempcart} deleteCartItem={deleteHandler} qtyDec={qtyDec} qtyInc={qtyInc}/> </Route>
          <Route path= "/products"><Products addCall={addToCart}/> </Route>
        </Switch>
     
    </div> 

    ): <div>Loading....</div>;
  
}

export default App;

