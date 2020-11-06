import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import ListBuilder from './Containers/ListBuilder/ListBuilder';
import Navigation from '../src/constants/navigation';
import * as ROUTES from '../src/constants/routes';
import MainNavigation from './Components/Layout/MainNav';
import Display from './Components/pages/display';
import Auth from './Components/pages/auth';
import firebase from 'firebase';
import { connect } from 'react-redux';
import store from './store';
//import InputBox from './Components/Layout/InputBox';
import * as userReducer from './actions/userActions'

import './App.css';
import './index.css';


connect((store)=>{
  return{
   }

})
let App=(props) =>{
  
  let firebaseinit=true;
  let [reduxState,setReduxState]=useState('wait for it');
  let [reduxState2,setReduxState2]=useState('wait for iiiit');


  const reduxe=()=>{
    let disp={};
    disp=userReducer.demo();
store.dispatch(disp);

let tempstate=store.getState();
setReduxState(tempstate.user.testmsg);
setReduxState2(tempstate.list.testmsg2);
console.log(tempstate);
  }

  return firebaseinit!==false? (
    <div><MainNavigation/>
    <button onClick={reduxe}>Redux!</button>
    <div>{reduxState}</div>
    <div>{reduxState2}</div>
    <div>{props.userid}</div>
     
        <Switch>
          <Route path exact = "/" component={Auth}/>
          <Route path = "/auth" component={Auth} />
          <Route path = "/account"><Display/></Route>
          <Route path ="/list"><ListBuilder/></Route>
          
        
        
        </Switch>
     
    </div> 

    ): <div>Loading....</div>;
  
}

export default App;

