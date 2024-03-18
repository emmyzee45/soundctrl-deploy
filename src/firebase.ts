// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhduzZGqco3WHnEqiaS1R4e0bYvJXtF3I",
  authDomain: "zaria-3c72a.firebaseapp.com",
  projectId: "zaria-3c72a",
  storageBucket: "zaria-3c72a.appspot.com",
  messagingSenderId: "823554149327",
  appId: "1:823554149327:web:a47cf948ab6a8ddad9a0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;