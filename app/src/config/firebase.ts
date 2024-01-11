// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCuS0hlDdXNoJnTcrumwkVcoZC6CNpczJc",
  authDomain: "groove-grove-3d74c.firebaseapp.com",
  projectId: "groove-grove-3d74c",
  storageBucket: "groove-grove-3d74c.appspot.com",
  messagingSenderId: "478223878731",
  appId: "1:478223878731:web:35de13c763686fafe51bce",
  measurementId: "G-MLY84MMRYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
