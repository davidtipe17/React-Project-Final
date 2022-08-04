/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from `firebase/auth`;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 
// El objeto de configuracion que le pasamos a initializeApp
const firebaseConfig = {
  apiKey: "AIzaSyA-ApB9njlBZM-koFsgBq_BMcvWnbDQi80",
  authDomain: "react-projectfinal.firebaseapp.com",
  projectId: "react-projectfinal",
  storageBucket: "react-projectfinal.appspot.com",
  messagingSenderId: "1088773517162",
  appId: "1:1088773517162:web:0109253ae140640fcc3f13"
};

// Initialize Firebase
// firebase/app importaremos initializeApp y al ejecutarlo le pasaremos un objeto de configuracion
export const app = initializeApp(firebaseConfig);
// getAuth recibe un app 
export const auth = getAuth(app);