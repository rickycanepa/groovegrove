import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCuS0hlDdXNoJnTcrumwkVcoZC6CNpczJc",
  authDomain: "groove-grove-3d74c.firebaseapp.com",
  projectId: "groove-grove-3d74c",
  storageBucket: "groove-grove-3d74c.appspot.com",
  messagingSenderId: "478223878731",
  appId: "1:478223878731:web:35de13c763686fafe51bce",
  measurementId: "G-MLY84MMRYT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Check if running in a Node.js environment
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Firebase configuration loaded:', firebaseConfig);
}