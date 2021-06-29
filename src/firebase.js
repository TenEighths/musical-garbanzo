import firebase from 'firebase/app';
import 'firebase/database';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAN4I_QUGYhrwL8ri_NbrszEhkI5821-6Q",
    authDomain: "boxofficesolo.firebaseapp.com",
    projectId: "boxofficesolo",
    storageBucket: "boxofficesolo.appspot.com",
    messagingSenderId: "839793615783",
    appId: "1:839793615783:web:008319a3e231e50f1d8c82",
    measurementId: "G-58R89P5QN3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  
export default firebase;