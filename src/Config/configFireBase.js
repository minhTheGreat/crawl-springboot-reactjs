import firebase from 'firebase/app';
import 'firebase/storage';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCY7H3eFrJxqkqU0I7hIuFQLB9Qd4jKAz0",
    authDomain: "upload-img-v1.firebaseapp.com",
    databaseURL: "https://upload-img-v1.firebaseio.com",
    projectId: "upload-img-v1",
    storageBucket: "upload-img-v1.appspot.com",
    messagingSenderId: "579144297577"
  };
  firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
