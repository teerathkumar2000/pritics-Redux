import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAMPbhfbOE0tOV7y6sbeTMTh3tz1uUV-H8",
    authDomain: "grouptodo-01.firebaseapp.com",
    databaseURL: "https://grouptodo-01.firebaseio.com",
    projectId: "grouptodo-01",
    storageBucket: "grouptodo-01.appspot.com",
    messagingSenderId: "786330052835",
    appId: "1:786330052835:web:c100b227ad903b19127dd6",
    measurementId: "G-SW7RSN3X2E"
  };
  // Initialize Firebase
  
export default firebase.initializeApp(firebaseConfig);