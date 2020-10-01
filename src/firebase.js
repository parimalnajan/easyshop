import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCyCQxXE9ym3htvrtud_VPKYql75GLlpmo",
    authDomain: "easyshop-b8047.firebaseapp.com",
    databaseURL: "https://easyshop-b8047.firebaseio.com",
    projectId: "easyshop-b8047",
    storageBucket: "easyshop-b8047.appspot.com",
    messagingSenderId: "1068445269508",
    appId: "1:1068445269508:web:4b7e5bef8bd08d4ae6bf51"
  };
  export const firebaseapp =firebase.initializeApp(firebaseConfig);



export const userRef = firebaseapp.database().ref("users");