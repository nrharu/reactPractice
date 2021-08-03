import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBij871LLod8zi5GCAaf3LJHnrdmoJYDLs",
  authDomain: "reactpractice-81d09.firebaseapp.com",
  projectId: "reactpractice-81d09",
  storageBucket: "reactpractice-81d09.appspot.com",
  messagingSenderId: "349276662199",
  appId: "1:349276662199:web:933e112b7f01acaf2c6032",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
