import React ,{useState, useEffect} from 'react';
import {crateStore} from 'redux';


import ListBuilder from '../../Containers/ListBuilder/ListBuilder';

import MainNavigation from '../../Components/Layout/MainNav';



import  { userRef, firebaseapp } from '../../firebase';
import * as firebase from 'firebase';
import { Form, Input, Button, Checkbox } from 'antd';
import Display from './display';



import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import "./auth.css";
import '../../../node_modules/antd/dist/antd.css';

const Layout = (props) => {
  let[au,Setau]= useState('');

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

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

}


const smth=()=>{
  var user = firebase.auth().currentUser;
  Setau( user.uid);
  if (user) {
    console.log('userid:' + au);
  } else {
    console.log('nouser ');
    }
    
   // firebase.database()    .ref('users')    .child(uid)    .set({      name:user.displayName,      age:'25',     quote:'second user quote'
    //  }) 

    
}




const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};


  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };



  return(<div>

    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1>{au}</h1>
      <Form.Item
        label="Username"
        name="username"
        //rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        //rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      
      </Form.Item>


      <Form.Item
        label="Password"
        name="password"
        //rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={signin}>
          Sign in with Google
        </Button>

        <Button type="primary" htmlType="submit" onClick={smth}>
          Show ID
        </Button>
      </Form.Item>
    </Form>

 

</div>
  );


  
}

export default Layout;