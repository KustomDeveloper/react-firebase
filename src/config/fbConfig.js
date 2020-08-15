import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOuSEzaY5k1sGUKhshVJjZJDoE7IcsGJg",
    authDomain: "website-url-checker.firebaseapp.com",
    databaseURL: "https://website-url-checker.firebaseio.com",
    projectId: "website-url-checker",
    storageBucket: "website-url-checker.appspot.com",
    messagingSenderId: "316213442724",
    appId: "1:316213442724:web:bdd24092d581676e5a4e31",
    measurementId: "G-QL5LZDVJ68"
  };

  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;