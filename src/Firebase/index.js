// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC-AewXXD5JFaIKV7KleHe6fIxHgQze1M",
  authDomain: "react-login-aute.firebaseapp.com",
  projectId: "react-login-aute",
  storageBucket: "react-login-aute.appspot.com",
  messagingSenderId: "746217430523",
  appId: "1:746217430523:web:b32ddc8b3112c535d1ff5e",
  measurementId: "G-MKR0FDM7W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)