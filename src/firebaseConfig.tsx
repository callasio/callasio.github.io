// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwHRPUnDMPXW_Tz6NLvysU1thwUyIx9j0",
  authDomain: "piast-61d52.firebaseapp.com",
  projectId: "piast-61d52",
  storageBucket: "piast-61d52.appspot.com",
  messagingSenderId: "46487151080",
  appId: "1:46487151080:web:013fa0883eba48f615c45d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth, firebaseApp };