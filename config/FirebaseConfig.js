// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "petapp-4b480.firebaseapp.com",
  projectId: "petapp-4b480",
  storageBucket: "petapp-4b480.firebasestorage.app",
  messagingSenderId: "807211512250",
  appId: "1:807211512250:web:b298f4b5468619e86aed83",
  measurementId: "G-PBNH0CB330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);