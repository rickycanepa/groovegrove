import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey:" AIzaSyCuS0hlDdXNoJnTcrumwkVcoZC6CNpczJc",
  authDomain: "groove-grove-3d74c.firebaseapp.com",
  projectId: "groove-grove-3d74c",
  storageBucket: "groove-grove-3d74c.appspot.com",
  messagingSenderId: "478223878731",
  appId: "1:478223878731:web:35de13c763686fafe51bce",
  measurementId: "G-MLY84MMRYT"
});

export const firebaseAuth = getAuth(firebaseApp);
export default firebaseApp;