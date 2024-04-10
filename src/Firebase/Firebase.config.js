// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN-ui1ekoA3d0U_uwpYbA9pHa3uWqtJ5Y",
  authDomain: "react-dragon-6eb27.firebaseapp.com",
  projectId: "react-dragon-6eb27",
  storageBucket: "react-dragon-6eb27.appspot.com",
  messagingSenderId: "368110273834",
  appId: "1:368110273834:web:4f9c3e3c4f71f453514a53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

