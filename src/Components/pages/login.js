import React, {  useState, useEffect } from 'react';
import firebase from 'firebase';
import Googlebutton from '../Layout/Googlebutton';
import * as Auth from '../pages/auth'
import '../Layout/google.css';

import './login.scss';
import { useHistory } from 'react-router-dom';


let Login=(props)=>{
    let[au,Setau]= useState('');
    let[showstuff,setstuff]=useState(false); 
    const history=useHistory();
    let redirToRegister=()=>{

        history.push(`/account`);
    }

    return(
    <div className="login-wrapper">
        <div className="image-wrapper"> <img src="https://picsum.photos/500"></img></div>

        <div className="form-wrapper">
            <div className="login">Login</div>
            <div className="login2">Login to your account</div>
            <div className="text">Thank you for getting back to EasyShop</div>
            
            <div className="subtext">Username</div>
            <input className="input1" placeholder = "Email or Phone Number"></input>
            <div className="subtext">Password</div>
            <input className="input2" placeholder = "Password"></input>
            
            <div className="checkbox-wrapper">
                <div className="checkbox-wrapper-2"><input type="checkbox" id="check" ></input>
                    <div className="remberme">Remember me</div>
                </div>
                     <div className="resetpass"><a>Reset Password?</a></div> 
            </div>

            <button style={{marginBottom:"4px"}}>Sign in</button>
            <button onClick={props.demoAuth}>Demo</button>

            <div className="login2">Don't Have an account yet? <a onClick={redirToRegister}>Join EasyShop</a> Or:</div>
            <div id="google" onClick={props.googleAuth}><Googlebutton/><p></p></div>
            
            
        </div>

    </div>
    );
}

export default Login;