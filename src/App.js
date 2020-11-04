import React, { Component, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import ListBuilder from './Containers/ListBuilder/ListBuilder';
import Navigation from '../src/constants/navigation';
import * as ROUTES from '../src/constants/routes';
import MainNavigation from './Components/Layout/MainNav';
import Display from './Components/pages/display';
import './App.css';
import './index.css';
import Auth from './Components/pages/auth';
import firebase from 'firebase';
//import InputBox from './Components/Layout/InputBox';


let App=() =>{
  
  let firebaseinit=true;
  return firebaseinit!==false? (
    <div><MainNavigation/>
     
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

