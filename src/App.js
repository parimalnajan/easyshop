import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import firebase from 'firebase';
import ListBuilder from './Containers/ListBuilder/ListBuilder';
import Navigation from '../src/constants/navigation';
import * as ROUTES from '../src/constants/routes';
import MainNavigation from './Components/Layout/MainNav';
import Display from './Components/pages/display';
import Auth from './Components/pages/auth';

import { connect } from 'react-redux';
import store from './store';
//import InputBox from './Components/Layout/InputBox';
import * as userReducer from './actions/userActions'

import './App.css';
import './index.css';
import Register from './Components/pages/register';


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


  return firebaseinit!==false? (

    <div><MainNavigation/>
    
     
        <Switch>
          <Route path exact = "/" component={Auth}/>
          <Route path = "/auth" component={Auth} />
          <Route path = "/account"><Register/></Route>
          <Route path ="/list"><ListBuilder/></Route>                    
        </Switch>
     
    </div> 

    ): <div>Loading....</div>;
  
}

export default App;

