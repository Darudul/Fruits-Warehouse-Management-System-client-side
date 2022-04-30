// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqvG4aqJju_uqRoL_PoODXMJByMtq2fI",
  authDomain: "fruits-warehouse-website.firebaseapp.com",
  projectId: "fruits-warehouse-website",
  storageBucket: "fruits-warehouse-website.appspot.com",
  messagingSenderId: "102212270007",
  appId: "1:102212270007:web:441a8672a4ea70c04d5a32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
