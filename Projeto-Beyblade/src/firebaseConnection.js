import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3L_gIYT2leZLWhXC2YwgJFJFB8EsdeH0",
  authDomain: "beyblade-react-f148e.firebaseapp.com",
  projectId: "beyblade-react-f148e",
  storageBucket: "beyblade-react-f148e.appspot.com",
  messagingSenderId: "202949045712",
  appId: "1:202949045712:web:db323afa27e5cacc545dd5",
  measurementId: "G-M7LJW6CSQ9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
