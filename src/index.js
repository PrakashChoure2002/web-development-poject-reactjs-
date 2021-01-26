import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import   firebase from 'firebase';

import  'firebase/firestore';
//import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4DJ4zDsbV9iAwo7DZSIofYA-nCKzYICU",
  authDomain: "cart-8b5a9.firebaseapp.com",
  projectId: "cart-8b5a9",
  storageBucket: "cart-8b5a9.appspot.com",
  messagingSenderId: "174290602703",
  appId: "1:174290602703:web:f12dcf887a61e4336005ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
