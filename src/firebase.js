import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAZYezKUQQnOwRY4pYLKSa4f1cEtcbtyks",
  authDomain: "react-auth-d9904.firebaseapp.com",
  projectId: "react-auth-d9904",
  storageBucket: "react-auth-d9904.appspot.com",
  messagingSenderId: "595923543751",
  appId: "1:595923543751:web:d03ffc81af43915a59c0e2"
};

// Initialize Firebase
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;