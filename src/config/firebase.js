// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage'


// Initializing firebase authentication
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQsKZrNWNcaVtqCu3uD35w18IXKepVKA",
  authDomain: "hotel-booking-c2270.firebaseapp.com",
  projectId: "hotel-booking-c2270",
  storageBucket: "hotel-booking-c2270.appspot.com",
  messagingSenderId: "962086296737",
  appId: "1:962086296737:web:eb393bd8eef71abcd8a4e0",
  measurementId: "G-M3MP1C00P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export { auth, db, storage }