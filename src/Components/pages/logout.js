import React from 'react'
import firebase from 'firebase'
export default function Logout(props) {
    
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      
      props.setauth(false);
    return (
        <>
            <h3 style={{marginTop:"50px",width:"50%",textAlign:"center"}}>You have been logged off. Please Login to continue</h3>
        </>
    )
}
