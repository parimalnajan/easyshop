import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route,Redirect,Switch} from 'react-router-dom';

import ListBuilder from './Containers/ListBuilder/ListBuilder'
import Layout from './Components/Layout/Layout';
import MainNav from './Components/Layout/MainNav'
import MainNavigation from './Components/Layout/MainNav';
import Card from './Containers/ListBuilder/Card';
import './App.css';
import './index.css';
import InputBox from './Components/Layout/InputBox';

class App extends Component {
  render(){ 
    return (
      <Router>

      <MainNavigation/>
      <h2>Current List:</h2>
      

      <ListBuilder><p></p></ListBuilder>
      </Router>     
    );
  }
}

export default App;

 /*
 
 <Card className="input-wrapper">
 <div className="input-elements">Enter item: </div>
 <input className="input-elements" type="text" value="item" />
 <input className="input-elements" type="text"value="flavor" /> 
 <input className="input-elements" type="text"value="quantity" />

 <button className="input-elements">Add</button>
</Card>

*/
      