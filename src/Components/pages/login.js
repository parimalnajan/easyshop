import React, {  useState, useEffect } from 'react';
import './login.scss';


let Login=()=>{

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

            <button>Sign In</button>

            <div className="login2">Don't Have an account yet? <a>Join EasyShop</a></div>
            
        </div>

    </div>
    );
}

export default Login;