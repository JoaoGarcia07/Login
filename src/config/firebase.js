// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9treRcq5sAIUrVSKu_4icU3pvSqRnq5g",
  authDomain: "aulalogin-40a9d.firebaseapp.com",
  projectId: "aulalogin-40a9d",
  storageBucket: "aulalogin-40a9d.appspot.com",
  messagingSenderId: "1073231109979",
  appId: "1:1073231109979:web:805869e205a0bdf464047e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
