import React from 'react';
import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCqUufMhoPO3MvT3Nl1jCN3ECapw_93h1I",
  authDomain: "superchat-7c945.firebaseapp.com",
  databaseURL: "https://superchat-7c945.firebaseio.com",
  projectId: "superchat-7c945",
  storageBucket: "superchat-7c945.appspot.com",
  messagingSenderId: "768115864060",
  appId: "1:768115864060:web:6a38093adbcdc5146f4279",
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
