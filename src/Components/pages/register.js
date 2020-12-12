import React, {  useState, useEffect } from 'react';
import {BrowserRouter as Router,useHistory} from 'react-router-dom';
import './login.scss';
import './register.scss';

let Register=()=>{

    const history = useHistory();

    let redirToLogin=()=>{

        history.push(`/`);
    }

    return(
    <div className="register-wrapper">
        <div className="reg-img-wrapper"> <img src="https://picsum.photos/500"></img></div>

        <div className="reg-form-wrapper">
            <div className="login">Register</div>
            <div className="login2">Manage your shopping efficiently</div>
            <div className="text">Let's get you setup so we can verify your personal account and begin creating your profile.</div>
            
           <div className="twin-wrapper"> 
               <div className="unit">
                    <div className="subtext">First Name</div>
                    <input className="input3" ></input> 
                </div>
                <div className="unit1">
                    <div className="subtext">Last Name</div>
                    <input className="input3"></input>
                </div>
            </div>


            <div className="twin-wrapper"> 
               <div className="unit">
                    <div className="subtext">Email</div>
                    <input className="input3" ></input> 
                </div>
                <div className="unit1">
                    <div className="subtext">Phone Number</div>
                    <input className="input3"></input>
                </div>
            </div>


            <div className="twin-wrapper"> 
               <div className="unit">
                    <div className="subtext">Password</div>
                    <input className="input3" ></input> 
                </div>
                <div className="unit1">
                    <div className="subtext">Confirm Password</div>
                    <input className="input3" ></input>
                </div>
            </div>
            
            
            
            <div className="checkbox-1"><input type="checkbox" id="check" ></input>
                <div className="remberme">Yes, i want to recieve promotional emails.</div></div>

            <div className="checkbox-2"><input type="checkbox" id="check" ></input>
                <div className="remberme">I agree with all the <a>Terms and Condiions</a></div></div>
                  
              
           
            <button className="btn">Create Account</button>

            <div className="login2">Have an account ?<a onClick={redirToLogin}>  Log in</a></div>
            
        </div>

    </div>
    );
}

export default Register;